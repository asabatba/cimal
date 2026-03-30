import { fromArrayBuffer } from "geotiff";
import {
	COPERNICUS_HTTP_ROOT,
	COPERNICUS_RESOLUTION_ARC_SECONDS,
	MAX_TILE_SAMPLE_SIZE,
	TILE_FETCH_TIMEOUT_MS,
} from "./constants.ts";
import { clamp, intersectBounds } from "./math.ts";
import type { GeoBounds, TileIndex } from "./types.ts";
import {space} from "@silverbulletmd/silverbullet/syscalls"


type SampleDensity = {
	lat: number;
	lon: number;
};

type LoadedTile = {
	bounds: GeoBounds;
	width: number;
	height: number;
	values: Float32Array;
	noDataValue: number | null;
};

function padDegrees(value: number, width: number): string {
	return Math.abs(value).toString().padStart(width, "0");
}

function formatLatitudePart(southLat: number): string {
	return `${southLat >= 0 ? "N" : "S"}${padDegrees(southLat, 2)}_00`;
}

function formatLongitudePart(westLon: number): string {
	return `${westLon >= 0 ? "E" : "W"}${padDegrees(westLon, 3)}_00`;
}

function tileId(tile: TileIndex): string {
	return `Copernicus_DSM_COG_${COPERNICUS_RESOLUTION_ARC_SECONDS}_${formatLatitudePart(
		tile.southLat,
	)}_${formatLongitudePart(tile.westLon)}_DEM`;
}

function tileUrl(tile: TileIndex): string {
	const id = tileId(tile);
	return `${COPERNICUS_HTTP_ROOT}/${id}/${id}.tif`;
}

export function enumerateTiles(bounds: GeoBounds): TileIndex[] {
	const startLat = Math.floor(bounds.minLat);
	const endLat = Math.ceil(bounds.maxLat) - 1;
	const startLon = Math.floor(bounds.minLon);
	const endLon = Math.ceil(bounds.maxLon) - 1;

	const tiles: TileIndex[] = [];
	for (let southLat = startLat; southLat <= endLat; southLat += 1) {
		for (let westLon = startLon; westLon <= endLon; westLon += 1) {
			tiles.push({ southLat, westLon });
		}
	}

	if (tiles.length === 0) {
		tiles.push({
			southLat: Math.floor(bounds.minLat),
			westLon: Math.floor(bounds.minLon),
		});
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

async function fetchArrayBuffer(url: string): Promise<ArrayBuffer> {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), TILE_FETCH_TIMEOUT_MS);
	try {
		const response = await fetch(url, { signal: controller.signal });
		if (!response.ok) {
			throw new Error(
				`Failed to fetch Copernicus tile ${url}: ${response.status} ${response.statusText}`,
			);
		}
		return await response.arrayBuffer();
	} finally {
		clearTimeout(timeout);
	}
}

export async function loadTile(
	tile: TileIndex,
	targetBounds: GeoBounds,
	density: SampleDensity,
): Promise<LoadedTile | null> {
	const tileBounds: GeoBounds = {
		minLat: tile.southLat,
		maxLat: tile.southLat + 1,
		minLon: tile.westLon,
		maxLon: tile.westLon + 1,
	};
	const overlap = intersectBounds(tileBounds, targetBounds);
	if (!overlap) {
		return null;
	}

	const arrayBuffer = await fetchArrayBuffer(tileUrl(tile));
	const tiff = await fromArrayBuffer(arrayBuffer);
	const image = await tiff.getImage();
	const [minLon, minLat, maxLon, maxLat] = image.getBoundingBox();
	const imageBounds: GeoBounds = { minLat, maxLat, minLon, maxLon };
	const imageOverlap = intersectBounds(imageBounds, targetBounds);
	if (!imageOverlap) {
		return null;
	}

	const rasterWindow = computeRasterWindow(
		imageBounds,
		imageOverlap,
		image.getWidth(),
		image.getHeight(),
	);

	const width = clamp(
		Math.ceil((imageOverlap.maxLon - imageOverlap.minLon) * density.lon) + 2,
		16,
		MAX_TILE_SAMPLE_SIZE,
	);
	const height = clamp(
		Math.ceil((imageOverlap.maxLat - imageOverlap.minLat) * density.lat) + 2,
		16,
		MAX_TILE_SAMPLE_SIZE,
	);

	const raster = (await image.readRasters({
		window: rasterWindow,
		width,
		height,
		interleave: true,
		fillValue: 0,
		resampleMethod: "bilinear",
	})) as Float32Array;

	return {
		bounds: imageOverlap,
		width,
		height,
		values: raster,
		noDataValue: image.getGDALNoData(),
	};
}

function resolveElevation(
	value: number,
	noDataValue: number | null,
): number | null {
	if (!Number.isFinite(value)) {
		return null;
	}
	if (noDataValue != null && value === noDataValue) {
		return null;
	}
	return value;
}

export function sampleTileElevation(
	tile: LoadedTile,
	lat: number,
	lon: number,
): number | null {
	const { bounds, width, height, values, noDataValue } = tile;
	if (
		lat < bounds.minLat ||
		lat > bounds.maxLat ||
		lon < bounds.minLon ||
		lon > bounds.maxLon
	) {
		return null;
	}

	const x =
		((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * (width - 1);
	const y =
		((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * (height - 1);

	const x0 = Math.floor(x);
	const y0 = Math.floor(y);
	const x1 = Math.min(width - 1, x0 + 1);
	const y1 = Math.min(height - 1, y0 + 1);
	const tx = x - x0;
	const ty = y - y0;

	const topLeft = resolveElevation(values[y0 * width + x0], noDataValue);
	const topRight = resolveElevation(values[y0 * width + x1], noDataValue);
	const bottomLeft = resolveElevation(values[y1 * width + x0], noDataValue);
	const bottomRight = resolveElevation(values[y1 * width + x1], noDataValue);

	const samples = [topLeft, topRight, bottomLeft, bottomRight].filter(
		(value): value is number => value != null,
	);
	if (samples.length === 0) {
		return null;
	}

	if (samples.length < 4) {
		return samples.reduce((sum, value) => sum + value, 0) / samples.length;
	}

	const top = topLeft! * (1 - tx) + topRight! * tx;
	const bottom = bottomLeft! * (1 - tx) + bottomRight! * tx;
	return top * (1 - ty) + bottom * ty;
}

export function sampleElevation(
	tiles: LoadedTile[],
	lat: number,
	lon: number,
): number | null {
	for (const tile of tiles) {
		const value = sampleTileElevation(tile, lat, lon);
		if (value != null) {
			return value;
		}
	}
	return null;
}
