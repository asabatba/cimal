import { space } from "@silverbulletmd/silverbullet/syscalls";
import {
	buildCimalPackCacheKey,
	buildPackedCimalCacheEntry,
	getCachedPack,
	putCachedPack,
} from "./cache.ts";
import { readGpxXml } from "./gpx.ts";
import {
	normalizeGpxSource,
	normalizePackPath,
	parseWidgetConfig,
} from "./input.ts";
import { decodeTerrainPack, encodeTerrainPack } from "./pack.ts";
import { buildTerrainPayloadFromGpxXml } from "./terrain.ts";
import type { ErrorPayload, ParsedWidgetConfig } from "./types.ts";
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

	const { source, style } = widgetConfig;
	let primaryError: unknown = null;

	try {
		const packPath = normalizePackPath(source);
		const packed = await space.readFile(packPath);
		const payload = decodeTerrainPack(packed);
		return {
			url: buildViewerDataUrl(payload, style),
			width: 960,
			height: 600,
		};
	} catch (error) {
		primaryError = error;
		try {
			const gpxSource = normalizeGpxSource(source);
			const xml = await readGpxXml(gpxSource);
			const cacheKey = buildCimalPackCacheKey(gpxSource, xml);
			let packed = await getCachedPack(cacheKey);
			if (!packed) {
				const payload = await buildTerrainPayloadFromGpxXml(gpxSource, xml);
				packed = encodeTerrainPack(payload);
				const cacheEntry = buildPackedCimalCacheEntry(cacheKey, gpxSource);
				await putCachedPack(cacheEntry.key, cacheEntry.path, packed);
			}
			const payload = decodeTerrainPack(packed);
			return {
				url: buildViewerDataUrl(payload, style),
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
				style,
			),
			width: 960,
			height: 340,
		};
	}
}
