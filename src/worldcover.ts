import { fromUrl } from "geotiff";
import { bytesToDataUrl } from "./dataUrl.ts";
import { clamp, intersectBounds } from "./math.ts";
import type { BakedImagery, GeoBounds, WorldCoverProcessing } from "./types.ts";

type WorldCoverTileIndex = {
	southLat: number;
	westLon: number;
};

type RasterCanvas = HTMLCanvasElement | OffscreenCanvas;
type RasterContext =
	| CanvasRenderingContext2D
	| OffscreenCanvasRenderingContext2D;

const WORLDCOVER_HTTP_ROOT =
	"https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/map";
const WORLDCOVER_SOURCE_VERSION = "ESA WorldCover 2021 v200";
const WORLDCOVER_TILE_DEGREES = 3;
const WORLDCOVER_FILL_CLASS = 0;

const WORLDCOVER_COLORS = new Map<number, [number, number, number]>([
	[10, [0x00, 0x64, 0x00]],
	[20, [0xff, 0xbb, 0x22]],
	[30, [0xff, 0xff, 0x4c]],
	[40, [0xf0, 0x96, 0xff]],
	[50, [0xfa, 0x00, 0x00]],
	[60, [0xb4, 0xb4, 0xb4]],
	[70, [0xf0, 0xf0, 0xf0]],
	[80, [0x00, 0x64, 0xc8]],
	[90, [0x00, 0x96, 0xa0]],
	[95, [0x00, 0xcf, 0x75]],
	[100, [0xfa, 0xe6, 0xa0]],
]);

export const WORLDCOVER_ATTRIBUTION =
	"Imagery: © ESA WorldCover project 2021 / Contains modified Copernicus Sentinel data (2021) processed by ESA WorldCover consortium.";
export const WORLDCOVER_FALLBACK =
	"Baked ESA WorldCover imagery is unavailable for this pack.";

function hasRasterSupport(): boolean {
	return (
		typeof ImageData !== "undefined" &&
		(typeof OffscreenCanvas !== "undefined" ||
			(typeof document !== "undefined" &&
				typeof document.createElement === "function"))
	);
}

function createRasterCanvas(width: number, height: number): RasterCanvas {
	if (typeof OffscreenCanvas !== "undefined") {
		return new OffscreenCanvas(width, height);
	}

	if (
		typeof document !== "undefined" &&
		typeof document.createElement === "function"
	) {
		const canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		return canvas;
	}

	throw new Error("Canvas raster support is unavailable in this runtime.");
}

function getRasterContext(canvas: RasterCanvas): RasterContext | null {
	const context = canvas.getContext("2d");
	if (context) {
		context.imageSmoothingEnabled = false;
	}
	return context;
}

async function canvasToDataUrl(
	canvas: RasterCanvas,
	mimeType: string,
): Promise<string> {
	if ("toDataURL" in canvas && typeof canvas.toDataURL === "function") {
		return canvas.toDataURL(mimeType);
	}

	if ("convertToBlob" in canvas && typeof canvas.convertToBlob === "function") {
		const blob = await canvas.convertToBlob({ type: mimeType });
		return bytesToDataUrl(
			new Uint8Array(await blob.arrayBuffer()),
			blob.type || mimeType,
		);
	}

	throw new Error("Canvas export is unavailable in this runtime.");
}

function padDegrees(value: number, width: number): string {
	return Math.abs(value).toString().padStart(width, "0");
}

function formatLatitudePart(southLat: number): string {
	return `${southLat >= 0 ? "N" : "S"}${padDegrees(southLat, 2)}`;
}

function formatLongitudePart(westLon: number): string {
	return `${westLon >= 0 ? "E" : "W"}${padDegrees(westLon, 3)}`;
}

function tileId(tile: WorldCoverTileIndex): string {
	return `${formatLatitudePart(tile.southLat)}${formatLongitudePart(tile.westLon)}`;
}

function tileUrl(tile: WorldCoverTileIndex): string {
	return `${WORLDCOVER_HTTP_ROOT}/ESA_WorldCover_10m_2021_v200_${tileId(tile)}_Map.tif`;
}

function enumerateTiles(bounds: GeoBounds): WorldCoverTileIndex[] {
	const startLat =
		Math.floor(bounds.minLat / WORLDCOVER_TILE_DEGREES) *
		WORLDCOVER_TILE_DEGREES;
	const endLat =
		Math.floor((bounds.maxLat - Number.EPSILON) / WORLDCOVER_TILE_DEGREES) *
		WORLDCOVER_TILE_DEGREES;
	const startLon =
		Math.floor(bounds.minLon / WORLDCOVER_TILE_DEGREES) *
		WORLDCOVER_TILE_DEGREES;
	const endLon =
		Math.floor((bounds.maxLon - Number.EPSILON) / WORLDCOVER_TILE_DEGREES) *
		WORLDCOVER_TILE_DEGREES;

	const tiles: WorldCoverTileIndex[] = [];
	for (
		let southLat = startLat;
		southLat <= endLat;
		southLat += WORLDCOVER_TILE_DEGREES
	) {
		for (
			let westLon = startLon;
			westLon <= endLon;
			westLon += WORLDCOVER_TILE_DEGREES
		) {
			tiles.push({ southLat, westLon });
		}
	}

	if (tiles.length === 0) {
		tiles.push({ southLat: startLat, westLon: startLon });
	}

	return tiles;
}

function computeRasterWindow(
	imageBounds: GeoBounds,
	overlap: GeoBounds,
	imageWidth: number,
	imageHeight: number,
): [number, number, number, number] {
	const x1 = clamp(
		Math.floor(
			((overlap.minLon - imageBounds.minLon) /
				(imageBounds.maxLon - imageBounds.minLon)) *
				imageWidth,
		),
		0,
		imageWidth - 1,
	);
	const x2 = clamp(
		Math.ceil(
			((overlap.maxLon - imageBounds.minLon) /
				(imageBounds.maxLon - imageBounds.minLon)) *
				imageWidth,
		),
		x1 + 1,
		imageWidth,
	);
	const y1 = clamp(
		Math.floor(
			((imageBounds.maxLat - overlap.maxLat) /
				(imageBounds.maxLat - imageBounds.minLat)) *
				imageHeight,
		),
		0,
		imageHeight - 1,
	);
	const y2 = clamp(
		Math.ceil(
			((imageBounds.maxLat - overlap.minLat) /
				(imageBounds.maxLat - imageBounds.minLat)) *
				imageHeight,
		),
		y1 + 1,
		imageHeight,
	);
	return [x1, y1, x2, y2];
}

function computeOutputWindow(
	targetBounds: GeoBounds,
	overlap: GeoBounds,
	width: number,
	height: number,
): [number, number, number, number] {
	const x1 = clamp(
		Math.floor(
			((overlap.minLon - targetBounds.minLon) /
				(targetBounds.maxLon - targetBounds.minLon)) *
				width,
		),
		0,
		width - 1,
	);
	const x2 = clamp(
		Math.ceil(
			((overlap.maxLon - targetBounds.minLon) /
				(targetBounds.maxLon - targetBounds.minLon)) *
				width,
		),
		x1 + 1,
		width,
	);
	const y1 = clamp(
		Math.floor(
			((targetBounds.maxLat - overlap.maxLat) /
				(targetBounds.maxLat - targetBounds.minLat)) *
				height,
		),
		0,
		height - 1,
	);
	const y2 = clamp(
		Math.ceil(
			((targetBounds.maxLat - overlap.minLat) /
				(targetBounds.maxLat - targetBounds.minLat)) *
				height,
		),
		y1 + 1,
		height,
	);
	return [x1, y1, x2, y2];
}

function colorizeClassCodes(
	classCodes: Uint8Array,
	width: number,
	height: number,
): Uint8ClampedArray {
	const image = new Uint8ClampedArray(width * height * 4);
	for (let index = 0; index < classCodes.length; index += 1) {
		const [red, green, blue] = WORLDCOVER_COLORS.get(classCodes[index]) ?? [
			0, 0, 0,
		];
		const offset = index * 4;
		image[offset] = red;
		image[offset + 1] = green;
		image[offset + 2] = blue;
		image[offset + 3] = classCodes[index] === WORLDCOVER_FILL_CLASS ? 0 : 255;
	}
	return image;
}

function computeIslandThreshold(width: number, height: number): number {
	return clamp(Math.round((width * height) / 4096), 6, 24);
}

function countBoundaryNeighborClass(
	classCodes: Uint8Array,
	width: number,
	height: number,
	index: number,
	componentClass: number,
	boundaryCounts: Map<number, number>,
): void {
	const x = index % width;
	const y = Math.floor(index / width);
	const neighbors = [
		x > 0 ? index - 1 : -1,
		x + 1 < width ? index + 1 : -1,
		y > 0 ? index - width : -1,
		y + 1 < height ? index + width : -1,
	];

	for (const neighborIndex of neighbors) {
		if (neighborIndex < 0) {
			continue;
		}
		const neighborClass = classCodes[neighborIndex];
		if (
			neighborClass === componentClass ||
			neighborClass === WORLDCOVER_FILL_CLASS
		) {
			continue;
		}
		boundaryCounts.set(
			neighborClass,
			(boundaryCounts.get(neighborClass) ?? 0) + 1,
		);
	}
}

function pickDominantBoundaryClass(
	boundaryCounts: Map<number, number>,
): number | null {
	let replacementClass: number | null = null;
	let replacementCount = -1;

	for (const [classCode, count] of boundaryCounts.entries()) {
		if (
			count > replacementCount ||
			(count === replacementCount &&
				replacementClass != null &&
				classCode < replacementClass)
		) {
			replacementClass = classCode;
			replacementCount = count;
		}
	}

	return replacementClass;
}

function removeSmallClassIslands(
	classCodes: Uint8Array,
	width: number,
	height: number,
): Uint8Array {
	const filtered = classCodes.slice();
	const maxComponentSize = computeIslandThreshold(width, height);
	const visited = new Uint8Array(filtered.length);
	const queue = new Int32Array(filtered.length);

	for (let pass = 0; pass < 6; pass += 1) {
		visited.fill(0);
		let changedInPass = false;

		for (let startIndex = 0; startIndex < filtered.length; startIndex += 1) {
			const componentClass = filtered[startIndex];
			if (visited[startIndex] || componentClass === WORLDCOVER_FILL_CLASS) {
				continue;
			}

			let queueHead = 0;
			let queueTail = 0;
			queue[queueTail++] = startIndex;
			visited[startIndex] = 1;

			const componentIndices: number[] = [];
			const boundaryCounts = new Map<number, number>();

			while (queueHead < queueTail) {
				const index = queue[queueHead++];
				componentIndices.push(index);
				countBoundaryNeighborClass(
					filtered,
					width,
					height,
					index,
					componentClass,
					boundaryCounts,
				);

				const x = index % width;
				const y = Math.floor(index / width);
				const neighbors = [
					x > 0 ? index - 1 : -1,
					x + 1 < width ? index + 1 : -1,
					y > 0 ? index - width : -1,
					y + 1 < height ? index + width : -1,
				];

				for (const neighborIndex of neighbors) {
					if (
						neighborIndex < 0 ||
						visited[neighborIndex] ||
						filtered[neighborIndex] !== componentClass
					) {
						continue;
					}
					visited[neighborIndex] = 1;
					queue[queueTail++] = neighborIndex;
				}
			}

			if (componentIndices.length > maxComponentSize) {
				continue;
			}

			const replacementClass = pickDominantBoundaryClass(boundaryCounts);
			if (replacementClass == null) {
				continue;
			}

			for (const index of componentIndices) {
				filtered[index] = replacementClass;
			}
			changedInPass = true;
		}

		if (!changedInPass) {
			break;
		}
	}

	return filtered;
}

export async function bakeWorldCoverTexture(
	bounds: GeoBounds,
	outputWidth: number,
	outputHeight: number,
	processing: WorldCoverProcessing = "raw",
): Promise<BakedImagery | null> {
	if (
		!hasRasterSupport() ||
		outputWidth <= 0 ||
		outputHeight <= 0 ||
		!Number.isFinite(outputWidth) ||
		!Number.isFinite(outputHeight)
	) {
		return null;
	}

	const outputClassCodes = new Uint8Array(outputWidth * outputHeight);
	const tiles = enumerateTiles(bounds);

	for (const tile of tiles) {
		const tiff = await fromUrl(tileUrl(tile), { allowFullFile: false });
		const image = await tiff.getImage();
		const [minLon, minLat, maxLon, maxLat] = image.getBoundingBox();
		const imageBounds: GeoBounds = { minLat, maxLat, minLon, maxLon };
		const overlap = intersectBounds(imageBounds, bounds);
		if (!overlap) {
			continue;
		}

		const [outputX1, outputY1, outputX2, outputY2] = computeOutputWindow(
			bounds,
			overlap,
			outputWidth,
			outputHeight,
		);
		const windowWidth = outputX2 - outputX1;
		const windowHeight = outputY2 - outputY1;
		if (windowWidth <= 0 || windowHeight <= 0) {
			continue;
		}

		const rasterWindow = computeRasterWindow(
			imageBounds,
			overlap,
			image.getWidth(),
			image.getHeight(),
		);
		const raster = (await image.readRasters({
			window: rasterWindow,
			width: windowWidth,
			height: windowHeight,
			interleave: true,
			fillValue: WORLDCOVER_FILL_CLASS,
			resampleMethod: "nearest",
		})) as Uint8Array;

		for (let row = 0; row < windowHeight; row += 1) {
			const sourceOffset = row * windowWidth;
			const targetOffset = (outputY1 + row) * outputWidth + outputX1;
			outputClassCodes.set(
				raster.subarray(sourceOffset, sourceOffset + windowWidth),
				targetOffset,
			);
		}
	}

	const processedClassCodes =
		processing === "no-islands"
			? removeSmallClassIslands(outputClassCodes, outputWidth, outputHeight)
			: outputClassCodes;

	const canvas = createRasterCanvas(outputWidth, outputHeight);
	const context = getRasterContext(canvas);
	if (!context) {
		return null;
	}

	context.putImageData(
		new ImageData(
			colorizeClassCodes(processedClassCodes, outputWidth, outputHeight),
			outputWidth,
			outputHeight,
		),
		0,
		0,
	);

	return {
		kind: "worldcover",
		width: outputWidth,
		height: outputHeight,
		mimeType: "image/png",
		dataUrl: await canvasToDataUrl(canvas, "image/png"),
		sourceVersion: WORLDCOVER_SOURCE_VERSION,
	};
}
