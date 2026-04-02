import type {
	BakedHikingMapTexture,
	GeoBounds,
	HikingMapResolution,
} from "./types.ts";

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

type RasterCanvas = HTMLCanvasElement | OffscreenCanvas;
type RasterContext =
	| CanvasRenderingContext2D
	| OffscreenCanvasRenderingContext2D;
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

export const HIKING_MAP_TEXTURE_PRESETS: Record<
	HikingMapResolution,
	HikingMapTexturePreset
> = {
	low: {
		label: "low",
		initialZoom: 12,
		maxTileRequests: 24,
		maxTextureDimension: 4096,
	},
	standard: {
		label: "standard",
		initialZoom: 13,
		maxTileRequests: 48,
		maxTextureDimension: 6144,
	},
	high: {
		label: "high",
		initialZoom: 14,
		maxTileRequests: 96,
		maxTextureDimension: 8192,
	},
	ultra: {
		label: "ultra",
		initialZoom: 15,
		maxTileRequests: 192,
		maxTextureDimension: 12288,
	},
};

const TILE_SIZE = 256;
const MIN_TILE_ZOOM = 6;
const MAX_BROWSER_CANVAS_DIMENSION = 16384;
const EMBEDDED_TEXTURE_MAX_DATA_URL_LENGTH = 1_200_000;
const EMBEDDED_TEXTURE_MIN_DIMENSION = 512;
const WEBP_QUALITY = 0.82;

function hasDomCanvasSupport(): boolean {
	return (
		typeof document !== "undefined" &&
		typeof document.createElement === "function"
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
	resolution: HikingMapResolution,
): TileCoverage {
	const preset =
		HIKING_MAP_TEXTURE_PRESETS[resolution] ??
		HIKING_MAP_TEXTURE_PRESETS.standard;
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

function bytesToDataUrl(bytes: Uint8Array, mimeType: string): string {
	if (typeof btoa !== "function") {
		throw new Error("Base64 encoding is unavailable in this runtime.");
	}

	let binary = "";
	for (let index = 0; index < bytes.length; index += 1) {
		binary += String.fromCharCode(bytes[index]);
	}
	return `data:${mimeType};base64,${btoa(binary)}`;
}

function dataUrlMimeType(dataUrl: string): string {
	const match = /^data:([^;,]+)[;,]/i.exec(dataUrl);
	return match?.[1] ?? "application/octet-stream";
}

function createRasterCanvas(width: number, height: number): RasterCanvas {
	if (typeof OffscreenCanvas !== "undefined") {
		return new OffscreenCanvas(width, height);
	}

	if (hasDomCanvasSupport()) {
		const canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		return canvas;
	}

	throw new Error("Canvas raster support is unavailable in this runtime.");
}

function getRasterContext(canvas: RasterCanvas): RasterContext | null {
	return canvas.getContext("2d");
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

async function loadTileImage(url: string): Promise<RasterImage> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(
			`Failed to load raster tile ${url}: HTTP ${response.status}`,
		);
	}

	const blob = await response.blob();
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

async function canvasToDataUrl(
	canvas: RasterCanvas,
	mimeType: string,
	quality?: number,
): Promise<string> {
	if ("toDataURL" in canvas && typeof canvas.toDataURL === "function") {
		return canvas.toDataURL(mimeType, quality);
	}

	if ("convertToBlob" in canvas && typeof canvas.convertToBlob === "function") {
		const blob = await canvas.convertToBlob({ type: mimeType, quality });
		const bytes = new Uint8Array(await blob.arrayBuffer());
		return bytesToDataUrl(bytes, blob.type || mimeType);
	}

	throw new Error("Canvas export is unavailable in this runtime.");
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

		const nextScale = 0.75;
		const nextWidth = Math.max(
			EMBEDDED_TEXTURE_MIN_DIMENSION,
			Math.round(currentCanvas.width * nextScale),
		);
		const nextHeight = Math.max(
			EMBEDDED_TEXTURE_MIN_DIMENSION,
			Math.round(currentCanvas.height * nextScale),
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

export async function bakeHikingMapTexture(
	bounds: GeoBounds,
	resolution: HikingMapResolution,
): Promise<BakedHikingMapTexture | null> {
	if (!hasRasterSupport()) {
		return null;
	}

	const preset =
		HIKING_MAP_TEXTURE_PRESETS[resolution] ??
		HIKING_MAP_TEXTURE_PRESETS.standard;
	const coverage = pickTileCoverage(bounds, resolution);
	const worldTileCount = 2 ** coverage.zoom;
	const stitchedCanvas = createRasterCanvas(
		coverage.tileColumns * TILE_SIZE,
		coverage.tileRows * TILE_SIZE,
	);
	const stitchedContext = getRasterContext(stitchedCanvas);
	if (!stitchedContext) {
		return null;
	}

	const tileRequests: Array<
		Promise<{ image: RasterImage; tileX: number; tileY: number }>
	> = [];
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
			const url = OPEN_HIKING_TILE_URL.replace("{z}", String(coverage.zoom))
				.replace("{x}", String(wrappedX))
				.replace("{y}", String(clampedY));
			tileRequests.push(
				loadTileImage(url).then((image) => ({
					image,
					tileX,
					tileY,
				})),
			);
		}
	}

	const tiles = await Promise.all(tileRequests);
	for (const tile of tiles) {
		stitchedContext.drawImage(
			tile.image,
			(tile.tileX - coverage.tileXStart) * TILE_SIZE,
			(tile.tileY - coverage.tileYStart) * TILE_SIZE,
			TILE_SIZE,
			TILE_SIZE,
		);
	}

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

	const encodedTexture = await encodeEmbeddedTexture(outputCanvas);
	return {
		width: encodedTexture.width,
		height: encodedTexture.height,
		mimeType: encodedTexture.mimeType,
		resolution: preset.label,
		dataUrl: encodedTexture.dataUrl,
	};
}
