import {
  MAX_COPERNICUS_TILES,
  MAX_GRID_CELLS,
  MAX_PADDING_METERS,
  MAX_TRACK_POINTS,
  MIN_GRID_CELLS,
  MIN_PADDING_METERS,
} from "./constants.ts";
import { enumerateTiles, loadTile, sampleElevation } from "./copernicus.ts";
import { fetchTrackData } from "./gpx.ts";
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
import type { GeoBounds, GeoPoint, LocalPoint, TerrainPayload } from "./types.ts";

function padTrackBounds(bounds: GeoBounds, distanceMeters: number): GeoBounds {
  const center = getBoundsCenter(bounds);
  const metersPerDegree = metersPerDegreeAtLatitude(center.lat);
  const paddingMeters = clamp(distanceMeters * 0.08, MIN_PADDING_METERS, MAX_PADDING_METERS);
  const latPadding = paddingMeters / metersPerDegree.lat;
  const lonPadding = paddingMeters / metersPerDegree.lon;
  const spanLatPadding = Math.max(boundsHeight(bounds) * 0.18, latPadding);
  const spanLonPadding = Math.max(boundsWidth(bounds) * 0.18, lonPadding);

  return expandBounds(bounds, spanLatPadding, spanLonPadding);
}

function pickGridSize(bounds: GeoBounds, metersPerDegree: { lat: number; lon: number }): {
  width: number;
  height: number;
} {
  const widthMeters = Math.max(1, boundsWidth(bounds) * metersPerDegree.lon);
  const heightMeters = Math.max(1, boundsHeight(bounds) * metersPerDegree.lat);
  const aspect = widthMeters / heightMeters;

  if (aspect >= 1) {
    return {
      width: MAX_GRID_CELLS,
      height: clamp(Math.round(MAX_GRID_CELLS / aspect), MIN_GRID_CELLS, MAX_GRID_CELLS),
    };
  }

  return {
    width: clamp(Math.round(MAX_GRID_CELLS * aspect), MIN_GRID_CELLS, MAX_GRID_CELLS),
    height: MAX_GRID_CELLS,
  };
}

function decimateTrack(points: GeoPoint[]): GeoPoint[] {
  if (points.length <= MAX_TRACK_POINTS) {
    return points;
  }

  const step = Math.ceil(points.length / MAX_TRACK_POINTS);
  const reduced = points.filter((_, index) => index % step === 0);
  const lastPoint = points[points.length - 1];
  if (reduced[reduced.length - 1] !== lastPoint) {
    reduced.push(lastPoint);
  }
  return reduced;
}

function computeTrackElevationStats(points: LocalPoint[]): {
  totalAscent: number;
  totalDescent: number;
  distanceKm: number;
} {
  let totalAscent = 0;
  let totalDescent = 0;
  let distanceMeters = 0;

  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    distanceMeters += computeDistanceMeters(previous, current);
    const delta = current.elevation - previous.elevation;
    if (delta > 0) {
      totalAscent += delta;
    } else {
      totalDescent += Math.abs(delta);
    }
  }

  return {
    totalAscent,
    totalDescent,
    distanceKm: distanceMeters / 1000,
  };
}

export async function buildTerrainPayload(gpxUrl: string): Promise<TerrainPayload> {
  const track = await fetchTrackData(gpxUrl);
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
    .filter((result): result is PromiseFulfilledResult<Awaited<ReturnType<typeof loadTile>>> =>
      result.status === "fulfilled"
    )
    .map((result) => result.value)
    .filter(Boolean);

  if (loadedTiles.length === 0) {
    throw new Error("No Copernicus DEM tiles were available for the GPX area.");
  }

  const elevations: number[] = [];
  let minElevation = Number.POSITIVE_INFINITY;
  let maxElevation = Number.NEGATIVE_INFINITY;

  for (let row = 0; row < gridSize.height; row += 1) {
    const rowRatio = gridSize.height === 1 ? 0 : row / (gridSize.height - 1);
    const lat = lerp(paddedBounds.maxLat, paddedBounds.minLat, rowRatio);
    for (let column = 0; column < gridSize.width; column += 1) {
      const columnRatio = gridSize.width === 1 ? 0 : column / (gridSize.width - 1);
      const lon = lerp(paddedBounds.minLon, paddedBounds.maxLon, columnRatio);
      const elevation = sampleElevation(loadedTiles, lat, lon) ?? 0;
      elevations.push(elevation);
      minElevation = Math.min(minElevation, elevation);
      maxElevation = Math.max(maxElevation, elevation);
    }
  }

  const renderedTrack = decimateTrack(track.points).map<LocalPoint>((point) => {
    const elevation = sampleElevation(loadedTiles, point.lat, point.lon) ?? point.ele ?? minElevation;
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

  const elevationStats = computeTrackElevationStats(renderedTrack);
  const title = gpxUrl.split("/").filter(Boolean).pop() ?? "GPX track";

  return {
    title,
    sourceUrl: gpxUrl,
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
    stats: {
      distanceKm: elevationStats.distanceKm || track.distanceMeters / 1000,
      totalAscent: elevationStats.totalAscent || track.totalAscent,
      totalDescent: elevationStats.totalDescent || track.totalDescent,
      pointCount: track.points.length,
      tileCount: loadedTiles.length,
    },
  };
}
