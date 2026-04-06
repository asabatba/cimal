import {
	buildHikingMapTileCacheEntry,
	buildHikingMapTileCacheKey,
	getCachedHikingMapTile,
	putCachedHikingMapTile,
} from "./cache.ts";
import { dataUrlMimeType } from "./dataUrl.ts";
import {
	canvasToDataUrl,
	createRasterCanvas,
	getRasterContext,
	hasDomCanvasSupport,
	type RasterCanvas,
	type RasterContext,
} from "./raster.ts";
import type { BakedImagery, GeoBounds, HikingMapResolution } from "./types.ts";

type HikingMapTexturePreset = {
	label: HikingMapResolution;
	initialZoom: number;
	maxTileRequests: number;
	maxTextureDimension: number;
};

type TileCoverage = {
	zoom: number;
	west: number;
	east: number;
	north: number;
	south: number;
	tileXStart: number;
	tileXEnd: number;
	tileYStart: number;
	tileYEnd: number;
	tileColumns: number;
	tileRows: number;
	tileCount: number;
};

type CoverageTile = {
	tileX: number;
	tileY: number;
	wrappedX: number;
	clampedY: number;
	url: string;
};

type RasterImage = ImageBitmap | HTMLImageElement;
type EncodedRasterImage = {
	dataUrl: string;
	mimeType: string;
	width: number;
	height: number;
};

export const OPEN_HIKING_TILE_URL =
	"https://tile.openmaps.fr/openhikingmap/{z}/{x}/{y}.png";
export const OPEN_HIKING_ATTRIBUTION =
	'Imagery: <a href="https://tile.openmaps.fr/" target="_blank" rel="noreferrer">OpenHikingMap</a> with <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> data.';
export const OPEN_HIKING_FALLBACK =
	"Baked OpenHikingMap imagery is unavailable for this pack; showing classic relief tint instead.";
export const OPEN_HIKING_SOURCE_VERSION = "OpenHikingMap";

export const HIKING_MAP_TEXTURE_PRESETS: Record<
	HikingMapResolution,
	HikingMapTexturePreset
> = {
	low: {
		label: "low",
		initialZoom: 11,
		maxTileRequests: 9,
		maxTextureDimension: 1024,
	},
	standard: {
		label: "standard",
		initialZoom: 12,
		maxTileRequests: 16,
		maxTextureDimension: 2048,
	},
	high: {
		label: "high",
		initialZoom: 13,
		maxTileRequests: 36,
		maxTextureDimension: 4096,
	},
	ultra: {
		label: "ultra",
		initialZoom: 14,
		maxTileRequests: 64,
		maxTextureDimension: 8192,
	},
};

const TILE_SIZE = 256;
const MIN_TILE_ZOOM = 6;
const MAX_BROWSER_CANVAS_DIMENSION = 16384;
const EMBEDDED_TEXTURE_MAX_DATA_URL_LENGTH = 1_200_000;
const EMBEDDED_TEXTURE_MIN_DIMENSION = 512;
const TILE_LOAD_CONCURRENCY = 6;
const WEBP_QUALITY = 0.82;

function getTexturePreset(
	resolution: HikingMapResolution,
): HikingMapTexturePreset {
	return (
		HIKING_MAP_TEXTURE_PRESETS[resolution] ??
		HIKING_MAP_TEXTURE_PRESETS.standard
	);
}

function hasDomImageSupport(): boolean {
	return typeof Image !== "undefined";
}

function hasRasterSupport(): boolean {
	return (
		(typeof OffscreenCanvas !== "undefined" &&
			typeof createImageBitmap === "function") ||
		hasDomCanvasSupport()
	);
}

function clampLatitude(latitude: number): number {
	return Math.max(-85.05112878, Math.min(85.05112878, latitude));
}

function longitudeToTileX(longitude: number, zoom: number): number {
	return ((longitude + 180) / 360) * 2 ** zoom;
}

function latitudeToTileY(latitude: number, zoom: number): number {
	const radians = (clampLatitude(latitude) * Math.PI) / 180;
	return (
		((1 - Math.log(Math.tan(radians) + 1 / Math.cos(radians)) / Math.PI) / 2) *
		2 ** zoom
	);
}

function buildTileCoverage(
	targetBounds: GeoBounds,
	zoom: number,
): TileCoverage {
	const west = longitudeToTileX(targetBounds.minLon, zoom);
	const east = longitudeToTileX(targetBounds.maxLon, zoom);
	const north = latitudeToTileY(targetBounds.maxLat, zoom);
	const south = latitudeToTileY(targetBounds.minLat, zoom);
	const tileXStart = Math.floor(west);
	const tileXEnd = Math.max(tileXStart, Math.ceil(east) - 1);
	const tileYStart = Math.floor(north);
	const tileYEnd = Math.max(tileYStart, Math.ceil(south) - 1);
	const tileColumns = tileXEnd - tileXStart + 1;
	const tileRows = tileYEnd - tileYStart + 1;

	return {
		zoom,
		west,
		east,
		north,
		south,
		tileXStart,
		tileXEnd,
		tileYStart,
		tileYEnd,
		tileColumns,
		tileRows,
		tileCount: tileColumns * tileRows,
	};
}

function coverageFitsBudget(
	coverage: TileCoverage,
	preset: HikingMapTexturePreset,
): boolean {
	return (
		coverage.tileCount <= preset.maxTileRequests &&
		coverage.tileColumns * TILE_SIZE <= MAX_BROWSER_CANVAS_DIMENSION &&
		coverage.tileRows * TILE_SIZE <= MAX_BROWSER_CANVAS_DIMENSION
	);
}

function pickTileCoverage(
	targetBounds: GeoBounds,
	preset: HikingMapTexturePreset,
): TileCoverage {
	let fallback = buildTileCoverage(targetBounds, MIN_TILE_ZOOM);

	for (let zoom = preset.initialZoom; zoom >= MIN_TILE_ZOOM; zoom -= 1) {
		const coverage = buildTileCoverage(targetBounds, zoom);
		if (coverageFitsBudget(coverage, preset)) {
			return coverage;
		}
		fallback = coverage;
	}

	return fallback;
}

function loadDomImage(url: string): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.crossOrigin = "anonymous";
		image.decoding = "async";
		image.onload = () => resolve(image);
		image.onerror = () =>
			reject(new Error(`Failed to load raster tile ${url}`));
		image.src = url;
	});
}

async function loadTileBytes(url: string): Promise<Uint8Array> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(
			`Failed to load raster tile ${url}: HTTP ${response.status}`,
		);
	}
	return new Uint8Array(await response.arrayBuffer());
}

async function decodeTileBytes(bytes: Uint8Array): Promise<RasterImage> {
	const blob = new Blob([bytes], { type: "image/png" });
	if (typeof createImageBitmap === "function") {
		return createImageBitmap(blob);
	}

	if (
		hasDomImageSupport() &&
		typeof URL !== "undefined" &&
		typeof URL.createObjectURL === "function"
	) {
		const objectUrl = URL.createObjectURL(blob);
		try {
			return await loadDomImage(objectUrl);
		} finally {
			URL.revokeObjectURL(objectUrl);
		}
	}

	throw new Error("Tile image decoding is unavailable in this runtime.");
}

async function loadCachedTileImage(
	zoom: number,
	tileX: number,
	tileY: number,
	url: string,
): Promise<RasterImage> {
	const cacheKey = buildHikingMapTileCacheKey(zoom, tileX, tileY);
	const cachedBytes = await getCachedHikingMapTile(cacheKey);
	if (cachedBytes) {
		return decodeTileBytes(cachedBytes);
	}

	const bytes = await loadTileBytes(url);
	const cacheEntry = buildHikingMapTileCacheEntry(
		cacheKey,
		`z${zoom}-x${tileX}-y${tileY}`,
	);
	await putCachedHikingMapTile(cacheEntry.key, cacheEntry.path, bytes);
	return decodeTileBytes(bytes);
}

function resizeRasterCanvas(
	source: RasterCanvas,
	width: number,
	height: number,
): RasterCanvas {
	const resizedCanvas = createRasterCanvas(width, height);
	const resizedContext = getRasterContext(resizedCanvas);
	if (!resizedContext) {
		throw new Error("Canvas resize context is unavailable in this runtime.");
	}

	resizedContext.drawImage(source, 0, 0, width, height);
	return resizedCanvas;
}

async function encodeEmbeddedTexture(
	source: RasterCanvas,
): Promise<EncodedRasterImage> {
	let currentCanvas = source;

	while (true) {
		const dataUrl = await canvasToDataUrl(
			currentCanvas,
			"image/webp",
			WEBP_QUALITY,
		);
		if (
			dataUrl.length <= EMBEDDED_TEXTURE_MAX_DATA_URL_LENGTH ||
			Math.max(currentCanvas.width, currentCanvas.height) <=
				EMBEDDED_TEXTURE_MIN_DIMENSION
		) {
			return {
				dataUrl,
				mimeType: dataUrlMimeType(dataUrl),
				width: currentCanvas.width,
				height: currentCanvas.height,
			};
		}

		const nextWidth = Math.max(
			EMBEDDED_TEXTURE_MIN_DIMENSION,
			Math.round(currentCanvas.width * 0.75),
		);
		const nextHeight = Math.max(
			EMBEDDED_TEXTURE_MIN_DIMENSION,
			Math.round(currentCanvas.height * 0.75),
		);
		if (
			nextWidth === currentCanvas.width &&
			nextHeight === currentCanvas.height
		) {
			return {
				dataUrl,
				mimeType: dataUrlMimeType(dataUrl),
				width: currentCanvas.width,
				height: currentCanvas.height,
			};
		}

		currentCanvas = resizeRasterCanvas(currentCanvas, nextWidth, nextHeight);
	}
}

function buildCoverageTiles(coverage: TileCoverage): CoverageTile[] {
	const worldTileCount = 2 ** coverage.zoom;
	const tiles: CoverageTile[] = [];

	for (
		let tileY = coverage.tileYStart;
		tileY <= coverage.tileYEnd;
		tileY += 1
	) {
		for (
			let tileX = coverage.tileXStart;
			tileX <= coverage.tileXEnd;
			tileX += 1
		) {
			const wrappedX =
				((tileX % worldTileCount) + worldTileCount) % worldTileCount;
			const clampedY = Math.max(0, Math.min(worldTileCount - 1, tileY));
			tiles.push({
				tileX,
				tileY,
				wrappedX,
				clampedY,
				url: OPEN_HIKING_TILE_URL.replace("{z}", String(coverage.zoom))
					.replace("{x}", String(wrappedX))
					.replace("{y}", String(clampedY)),
			});
		}
	}

	return tiles;
}

async function runWithConcurrencyLimit<T>(
	tasks: Array<() => Promise<T>>,
	concurrency: number,
): Promise<T[]> {
	const results = new Array<T>(tasks.length);
	let nextTaskIndex = 0;

	async function worker(): Promise<void> {
		while (nextTaskIndex < tasks.length) {
			const taskIndex = nextTaskIndex;
			nextTaskIndex += 1;
			results[taskIndex] = await tasks[taskIndex]();
		}
	}

	const workerCount = Math.max(1, Math.min(concurrency, tasks.length));
	await Promise.all(Array.from({ length: workerCount }, () => worker()));
	return results;
}

async function loadCoverageTiles(
	coverage: TileCoverage,
): Promise<Array<{ image: RasterImage; tileX: number; tileY: number }>> {
	const tasks = buildCoverageTiles(coverage).map((tile) => async () => ({
		image: await loadCachedTileImage(
			coverage.zoom,
			tile.wrappedX,
			tile.clampedY,
			tile.url,
		),
		tileX: tile.tileX,
		tileY: tile.tileY,
	}));

	return runWithConcurrencyLimit(tasks, TILE_LOAD_CONCURRENCY);
}

function stitchCoverageTiles(
	coverage: TileCoverage,
	tiles: Array<{ image: RasterImage; tileX: number; tileY: number }>,
): RasterCanvas | null {
	const stitchedCanvas = createRasterCanvas(
		coverage.tileColumns * TILE_SIZE,
		coverage.tileRows * TILE_SIZE,
	);
	const stitchedContext = getRasterContext(stitchedCanvas);
	if (!stitchedContext) {
		return null;
	}

	for (const tile of tiles) {
		stitchedContext.drawImage(
			tile.image,
			(tile.tileX - coverage.tileXStart) * TILE_SIZE,
			(tile.tileY - coverage.tileYStart) * TILE_SIZE,
			TILE_SIZE,
			TILE_SIZE,
		);
	}

	return stitchedCanvas;
}

function cropCoverageTexture(
	stitchedCanvas: RasterCanvas,
	coverage: TileCoverage,
	preset: HikingMapTexturePreset,
): RasterCanvas | null {
	const cropLeft = (coverage.west - coverage.tileXStart) * TILE_SIZE;
	const cropTop = (coverage.north - coverage.tileYStart) * TILE_SIZE;
	const cropWidth = Math.max(1, (coverage.east - coverage.west) * TILE_SIZE);
	const cropHeight = Math.max(1, (coverage.south - coverage.north) * TILE_SIZE);
	const textureScale = Math.min(
		1,
		preset.maxTextureDimension / Math.max(cropWidth, cropHeight),
	);
	const outputCanvas = createRasterCanvas(
		Math.max(1, Math.round(cropWidth * textureScale)),
		Math.max(1, Math.round(cropHeight * textureScale)),
	);
	const outputContext = getRasterContext(outputCanvas);
	if (!outputContext) {
		return null;
	}

	outputContext.drawImage(
		stitchedCanvas,
		cropLeft,
		cropTop,
		cropWidth,
		cropHeight,
		0,
		0,
		outputCanvas.width,
		outputCanvas.height,
	);

	return outputCanvas;
}

export async function bakeHikingMapTexture(
	bounds: GeoBounds,
	resolution: HikingMapResolution,
): Promise<BakedImagery | null> {
	if (!hasRasterSupport()) {
		return null;
	}

	const preset = getTexturePreset(resolution);
	const coverage = pickTileCoverage(bounds, preset);
	const tiles = await loadCoverageTiles(coverage);
	const stitchedCanvas = stitchCoverageTiles(coverage, tiles);
	if (!stitchedCanvas) {
		return null;
	}

	const outputCanvas = cropCoverageTexture(stitchedCanvas, coverage, preset);
	if (!outputCanvas) {
		return null;
	}

	const encodedTexture = await encodeEmbeddedTexture(outputCanvas);
	return {
		kind: "hiking-map",
		width: encodedTexture.width,
		height: encodedTexture.height,
		mimeType: encodedTexture.mimeType,
		sourceVersion: OPEN_HIKING_SOURCE_VERSION,
		resolution: preset.label,
		dataUrl: encodedTexture.dataUrl,
	};
}
