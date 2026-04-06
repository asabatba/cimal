import { space } from "@silverbulletmd/silverbullet/syscalls";
import {
	buildCimalPackCacheKey,
	buildPackedCimalCacheEntry,
	getCachedPack,
	invalidateCachedPack,
	putCachedPack,
} from "./cache.ts";
import { readGpxXml } from "./gpx.ts";
import { parseWidgetConfig, resolveWidgetSource } from "./input.ts";
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
	ViewerConfig,
} from "./types.ts";
import { buildViewerDataUrl } from "./viewerHtml.ts";

function buildError(
	title: string,
	message: string,
	details?: string,
): ErrorPayload {
	return { title, message, details };
}

const WIDGET_WIDTH = 960;
const WIDGET_HEIGHT = 600;
const ERROR_WIDGET_HEIGHT = 340;

function buildWidgetErrorResult(
	title: string,
	message: string,
	viewerConfig?: Partial<ViewerConfig>,
): {
	url: string;
	width: number;
	height: number;
} {
	return {
		url: buildViewerDataUrl(buildError(title, message), viewerConfig),
		width: WIDGET_WIDTH,
		height: ERROR_WIDGET_HEIGHT,
	};
}

function buildWidgetSuccessResult(
	payload: TerrainPayload,
	viewerConfig: Partial<ViewerConfig>,
): {
	url: string;
	width: number;
	height: number;
} {
	return {
		url: buildViewerDataUrl(payload, viewerConfig),
		width: WIDGET_WIDTH,
		height: WIDGET_HEIGHT,
	};
}

async function renderPackWidget(
	packPath: string,
	viewerConfig: Partial<ViewerConfig>,
): Promise<{
	url: string;
	width: number;
	height: number;
}> {
	const packed = await space.readFile(packPath);
	const payload = decodeTerrainPack(packed);
	return buildWidgetSuccessResult(payload, viewerConfig);
}

async function loadOrBuildGpxPayload(
	gpxSource: string,
	style: ViewerConfig["style"],
	hikingMapResolution: ViewerConfig["hikingMapResolution"],
	worldcoverProcessing: ViewerConfig["worldcoverProcessing"],
): Promise<TerrainPayload> {
	const xml = await readGpxXml(gpxSource);
	const cacheKey = buildCimalPackCacheKey(
		gpxSource,
		xml,
		style,
		hikingMapResolution,
		worldcoverProcessing,
	);
	let packed = await getCachedPack(cacheKey);

	if (packed) {
		try {
			return decodeTerrainPack(packed);
		} catch (error) {
			if (!isInvalidOrOutdatedTerrainPackError(error)) {
				throw error;
			}
			await invalidateCachedPack(cacheKey);
			packed = null;
		}
	}

	const payload = await buildTerrainPayloadFromGpxXml(gpxSource, xml, {
		style,
		hikingMapResolution,
		worldcoverProcessing,
	});
	const cacheEntry = buildPackedCimalCacheEntry(cacheKey, gpxSource);
	await putCachedPack(
		cacheEntry.key,
		cacheEntry.path,
		encodeTerrainPack(payload),
	);
	return payload;
}

async function renderGpxSourceWidget(
	gpxSource: string,
	viewerConfig: Partial<ViewerConfig>,
): Promise<{
	url: string;
	width: number;
	height: number;
}> {
	const payload = await loadOrBuildGpxPayload(
		gpxSource,
		viewerConfig.style,
		viewerConfig.hikingMapResolution,
		viewerConfig.worldcoverProcessing,
	);
	return buildWidgetSuccessResult(payload, viewerConfig);
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
		return buildWidgetErrorResult("Cimal widget configuration error", message);
	}

	const {
		source: _source,
		hasExplicitHikingMapResolution: _resolution,
		hasExplicitTerrainShape,
		hasExplicitWorldcoverProcessing: _worldcoverProcessing,
		...viewerConfig
	} = widgetConfig;
	const viewerConfigForEmbed = hasExplicitTerrainShape
		? viewerConfig
		: { ...viewerConfig, terrainShape: undefined };
	let resolvedSource: ReturnType<typeof resolveWidgetSource>;
	try {
		resolvedSource = resolveWidgetSource(widgetConfig);
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		return buildWidgetErrorResult(
			"Cimal widget configuration error",
			message,
			viewerConfigForEmbed,
		);
	}

	try {
		if (resolvedSource.kind === "pack") {
			return await renderPackWidget(
				resolvedSource.packPath,
				viewerConfigForEmbed,
			);
		}
		return await renderGpxSourceWidget(
			resolvedSource.gpxSource,
			viewerConfigForEmbed,
		);
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		const title =
			resolvedSource.kind === "pack"
				? "Cimal pack preview failed"
				: "GPX terrain preview failed";
		return buildWidgetErrorResult(title, message, viewerConfigForEmbed);
	}
}
