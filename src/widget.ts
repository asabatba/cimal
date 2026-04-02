import { space } from "@silverbulletmd/silverbullet/syscalls";
import {
	buildCimalPackCacheKey,
	buildPackedCimalCacheEntry,
	getCachedPack,
	invalidateCachedPack,
	putCachedPack,
} from "./cache.ts";
import { readGpxXml } from "./gpx.ts";
import {
	normalizeGpxSource,
	normalizePackPath,
	parseWidgetConfig,
} from "./input.ts";
import {
	decodeTerrainPack,
	encodeTerrainPack,
	isInvalidOrOutdatedTerrainPackError,
} from "./pack.ts";
import { buildTerrainPayloadFromGpxXml } from "./terrain.ts";
import type {
	ErrorPayload,
	ParsedWidgetConfig,
	TerrainPayload,
} from "./types.ts";
import { buildViewerDataUrl } from "./viewerHtml.ts";

function buildError(
	title: string,
	message: string,
	details?: string,
): ErrorPayload {
	return { title, message, details };
}

export async function renderGpxTerrainWidget(bodyText: string): Promise<{
	url: string;
	width: number;
	height: number;
}> {
	let widgetConfig: ParsedWidgetConfig;
	try {
		widgetConfig = parseWidgetConfig(bodyText);
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		return {
			url: buildViewerDataUrl(
				buildError("Cimal widget configuration error", message),
			),
			width: 960,
			height: 340,
		};
	}

	const { source, hasExplicitHikingMapResolution, ...viewerConfig } =
		widgetConfig;
	let packPath: string | null = null;
	try {
		packPath = normalizePackPath(source);
	} catch {
		packPath = null;
	}

	if (packPath && hasExplicitHikingMapResolution) {
		const message =
			'Hiking-map resolution is baked into existing .cimal packs. Rebuild the pack from the GPX at the desired resolution instead of setting "hiking-map-resolution" on a .cimal widget.';
		return {
			url: buildViewerDataUrl(
				buildError("Cimal widget configuration error", message),
				viewerConfig,
			),
			width: 960,
			height: 340,
		};
	}

	let primaryError: unknown = null;

	try {
		if (!packPath) {
			throw new Error("Source is not a .cimal pack path.");
		}
		const packed = await space.readFile(packPath);
		const payload = decodeTerrainPack(packed);
		return {
			url: buildViewerDataUrl(payload, viewerConfig),
			width: 960,
			height: 600,
		};
	} catch (error) {
		primaryError = error;
		try {
			const gpxSource = normalizeGpxSource(source);
			const xml = await readGpxXml(gpxSource);
			const cacheKey = buildCimalPackCacheKey(
				gpxSource,
				xml,
				viewerConfig.hikingMapResolution,
			);
			let packed = await getCachedPack(cacheKey);
			let payload: TerrainPayload | null = null;
			if (packed) {
				try {
					payload = decodeTerrainPack(packed);
				} catch (cachedPackError) {
					if (!isInvalidOrOutdatedTerrainPackError(cachedPackError)) {
						throw cachedPackError;
					}
					await invalidateCachedPack(cacheKey);
					packed = null;
				}
			}
			if (!packed) {
				const payload = await buildTerrainPayloadFromGpxXml(gpxSource, xml, {
					hikingMapResolution: viewerConfig.hikingMapResolution,
				});
				packed = encodeTerrainPack(payload);
				const cacheEntry = buildPackedCimalCacheEntry(cacheKey, gpxSource);
				await putCachedPack(cacheEntry.key, cacheEntry.path, packed);
				return {
					url: buildViewerDataUrl(payload, viewerConfig),
					width: 960,
					height: 600,
				};
			}
			if (!payload) {
				throw new Error("Cached .cimal pack could not be decoded.");
			}
			return {
				url: buildViewerDataUrl(payload, viewerConfig),
				width: 960,
				height: 600,
			};
		} catch (gpxError) {
			primaryError = gpxError;
		}

		const message =
			primaryError instanceof Error ? primaryError.message : "Unknown error";
		return {
			url: buildViewerDataUrl(
				buildError("Cimal pack preview failed", message),
				viewerConfig,
			),
			width: 960,
			height: 340,
		};
	}
}
