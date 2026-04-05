import {
	MAX_COPERNICUS_TILES,
	MAX_GRID_CELLS,
	MAX_PADDING_METERS,
	MIN_GRID_CELLS,
	MIN_PADDING_METERS,
} from "./constants.ts";
import { enumerateTiles, loadTile, sampleElevation } from "./copernicus.ts";
import { fetchTrackData, parseTrackData } from "./gpx.ts";
import { bakeHikingMapTexture } from "./hikingMap.ts";
import {
	boundsHeight,
	boundsWidth,
	clamp,
	computeDistanceMeters,
	expandBounds,
	getBoundsCenter,
	lerp,
	metersPerDegreeAtLatitude,
	projectToLocalMeters,
} from "./math.ts";
import { computeTrackMetrics } from "./trackMetrics.ts";
import type {
	GeoBounds,
	GeoPoint,
	HikingMapResolution,
	LocalPoint,
	TerrainPayload,
} from "./types.ts";
import { DEFAULT_HIKING_MAP_RESOLUTION } from "./viewerConfig.ts";

const TRACK_RESAMPLE_SPACING_METERS = 50;
const TRACK_VISUAL_MARGIN_METERS = 180;

type TerrainBuildOptions = {
	hikingMapResolution?: HikingMapResolution;
};

function padTrackBounds(bounds: GeoBounds, distanceMeters: number): GeoBounds {
	const center = getBoundsCenter(bounds);
	const metersPerDegree = metersPerDegreeAtLatitude(center.lat);
	const paddingMeters = clamp(
		distanceMeters * 0.08,
		MIN_PADDING_METERS,
		MAX_PADDING_METERS,
	);
	const latPadding = paddingMeters / metersPerDegree.lat;
	const lonPadding = paddingMeters / metersPerDegree.lon;
	const spanLatPadding = Math.max(boundsHeight(bounds) * 0.18, latPadding);
	const spanLonPadding = Math.max(boundsWidth(bounds) * 0.18, lonPadding);
	const visualLatPadding = TRACK_VISUAL_MARGIN_METERS / metersPerDegree.lat;
	const visualLonPadding = TRACK_VISUAL_MARGIN_METERS / metersPerDegree.lon;

	return expandBounds(
		bounds,
		spanLatPadding + visualLatPadding,
		spanLonPadding + visualLonPadding,
	);
}

function pickGridSize(
	bounds: GeoBounds,
	metersPerDegree: { lat: number; lon: number },
): {
	width: number;
	height: number;
} {
	const widthMeters = Math.max(1, boundsWidth(bounds) * metersPerDegree.lon);
	const heightMeters = Math.max(1, boundsHeight(bounds) * metersPerDegree.lat);
	const aspect = widthMeters / heightMeters;

	if (aspect >= 1) {
		return {
			width: MAX_GRID_CELLS,
			height: clamp(
				Math.round(MAX_GRID_CELLS / aspect),
				MIN_GRID_CELLS,
				MAX_GRID_CELLS,
			),
		};
	}

	return {
		width: clamp(
			Math.round(MAX_GRID_CELLS * aspect),
			MIN_GRID_CELLS,
			MAX_GRID_CELLS,
		),
		height: MAX_GRID_CELLS,
	};
}

function lerpGeoPoint(start: GeoPoint, end: GeoPoint, t: number): GeoPoint {
	return {
		lat: lerp(start.lat, end.lat, t),
		lon: lerp(start.lon, end.lon, t),
		ele:
			start.ele != null && end.ele != null
				? lerp(start.ele, end.ele, t)
				: (start.ele ?? end.ele ?? null),
	};
}

function resampleTrack(points: GeoPoint[], spacingMeters: number): GeoPoint[] {
	if (points.length <= 2) {
		return points;
	}

	const resampled: GeoPoint[] = [points[0]];
	let nextSampleDistance = spacingMeters;
	let traveledDistance = 0;

	for (let index = 1; index < points.length; index += 1) {
		const previous = points[index - 1];
		const current = points[index];
		const segmentDistance = computeDistanceMeters(previous, current);

		if (segmentDistance <= 0) {
			continue;
		}

		while (traveledDistance + segmentDistance >= nextSampleDistance) {
			const segmentRatio =
				(nextSampleDistance - traveledDistance) / segmentDistance;
			resampled.push(lerpGeoPoint(previous, current, segmentRatio));
			nextSampleDistance += spacingMeters;
		}

		traveledDistance += segmentDistance;
	}

	const lastPoint = points[points.length - 1];
	const previousPoint = resampled[resampled.length - 1];
	if (
		previousPoint.lat !== lastPoint.lat ||
		previousPoint.lon !== lastPoint.lon
	) {
		resampled.push(lastPoint);
	}

	return resampled;
}

function snapTrackToTerrain(
	points: GeoPoint[],
	loadedTiles: Awaited<ReturnType<typeof loadTile>>[],
	minElevation: number,
	center: { lat: number; lon: number },
	metersPerDegree: { lat: number; lon: number },
): LocalPoint[] {
	let lastResolvedElevation: number | null = null;

	return points.map<LocalPoint>((point) => {
		const sampledElevation = sampleElevation(loadedTiles, point.lat, point.lon);
		const elevation = sampledElevation ?? lastResolvedElevation ?? minElevation;
		lastResolvedElevation = elevation;

		const projected = projectToLocalMeters(point, center, metersPerDegree);
		return {
			x: projected.x,
			z: projected.z,
			y: elevation,
			lat: point.lat,
			lon: point.lon,
			elevation,
		};
	});
}

export async function buildTerrainPayloadFromTrackData(
	track: Awaited<ReturnType<typeof fetchTrackData>>,
	options: TerrainBuildOptions = {},
): Promise<TerrainPayload> {
	const gpxUrl = track.sourceUrl;
	const paddedBounds = padTrackBounds(track.bounds, track.distanceMeters);
	const center = getBoundsCenter(paddedBounds);
	const metersPerDegree = metersPerDegreeAtLatitude(center.lat);
	const gridSize = pickGridSize(paddedBounds, metersPerDegree);
	const tiles = enumerateTiles(paddedBounds);

	if (tiles.length > MAX_COPERNICUS_TILES) {
		throw new Error(
			`The track spans ${tiles.length} Copernicus tiles. This preview caps builds at ${MAX_COPERNICUS_TILES} tiles.`,
		);
	}

	const density = {
		lon: gridSize.width / Math.max(boundsWidth(paddedBounds), 0.01),
		lat: gridSize.height / Math.max(boundsHeight(paddedBounds), 0.01),
	};

	const tileResults = await Promise.allSettled(
		tiles.map((tile) => loadTile(tile, paddedBounds, density)),
	);
	const loadedTiles = tileResults
		.filter(
			(
				result,
			): result is PromiseFulfilledResult<
				Awaited<ReturnType<typeof loadTile>>
			> => result.status === "fulfilled",
		)
		.map((result) => result.value)
		.filter(Boolean);

	if (loadedTiles.length === 0) {
		throw new Error("No Copernicus DEM tiles were available for the GPX area.");
	}

	const unavailableTileCount = tiles.length - loadedTiles.length;

	const partialDemWarning =
		unavailableTileCount > 0
			? `Terrain preview may be incomplete because ${unavailableTileCount} of ${tiles.length} Copernicus DEM tiles failed to load.`
			: undefined;

	const elevations: number[] = [];
	let minElevation = Number.POSITIVE_INFINITY;
	let maxElevation = Number.NEGATIVE_INFINITY;

	for (let row = 0; row < gridSize.height; row += 1) {
		const rowRatio = gridSize.height === 1 ? 0 : row / (gridSize.height - 1);
		const lat = lerp(paddedBounds.maxLat, paddedBounds.minLat, rowRatio);
		for (let column = 0; column < gridSize.width; column += 1) {
			const columnRatio =
				gridSize.width === 1 ? 0 : column / (gridSize.width - 1);
			const lon = lerp(paddedBounds.minLon, paddedBounds.maxLon, columnRatio);
			const elevation = sampleElevation(loadedTiles, lat, lon) ?? 0;
			elevations.push(elevation);
			minElevation = Math.min(minElevation, elevation);
			maxElevation = Math.max(maxElevation, elevation);
		}
	}

	const resampledTrack = resampleTrack(
		track.points,
		TRACK_RESAMPLE_SPACING_METERS,
	);
	const renderedTrack = snapTrackToTerrain(
		resampledTrack,
		loadedTiles,
		minElevation,
		center,
		metersPerDegree,
	);

	const elevationStats = computeTrackMetrics(
		renderedTrack,
		(point) => point.elevation,
	);
	const title = gpxUrl.split("/").filter(Boolean).pop() ?? "GPX track";
	let bakedHikingMap: TerrainPayload["bakedHikingMap"];

	try {
		bakedHikingMap =
			(await bakeHikingMapTexture(
				paddedBounds,
				options.hikingMapResolution ?? DEFAULT_HIKING_MAP_RESOLUTION,
			)) ?? undefined;
	} catch (error) {
		console.warn(
			"Unable to bake OpenHikingMap imagery into .cimal pack.",
			error,
		);
		bakedHikingMap = undefined;
	}

	return {
		title,
		sourceUrl: gpxUrl,
		warning: partialDemWarning,
		bounds: paddedBounds,
		center,
		metersPerDegree,
		grid: {
			width: gridSize.width,
			height: gridSize.height,
			elevations,
			minElevation,
			maxElevation,
		},
		track: renderedTrack,
		bakedHikingMap,
		stats: {
			distanceKm:
				elevationStats.distanceMeters / 1000 || track.distanceMeters / 1000,
			totalAscent: elevationStats.totalAscent || track.totalAscent,
			totalDescent: elevationStats.totalDescent || track.totalDescent,
			pointCount: track.points.length,
			tileCount: loadedTiles.length,
		},
	};
}

export async function buildTerrainPayload(
	gpxUrl: string,
	options: TerrainBuildOptions = {},
): Promise<TerrainPayload> {
	const track = await fetchTrackData(gpxUrl);
	return buildTerrainPayloadFromTrackData(track, options);
}

export async function buildTerrainPayloadFromGpxXml(
	gpxUrl: string,
	xml: string,
	options: TerrainBuildOptions = {},
): Promise<TerrainPayload> {
	return buildTerrainPayloadFromTrackData(parseTrackData(gpxUrl, xml), options);
}
