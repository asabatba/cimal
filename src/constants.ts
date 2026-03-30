import type { GeoBounds } from "./types.ts";

export const GPX_WIDGET_LANGUAGE = "gpx-terrain";
export const COPERNICUS_S3_ROOT = "s3://copernicus-dem-30m/";
export const COPERNICUS_HTTP_ROOT = "https://copernicus-dem-30m.s3.amazonaws.com";
export const COPERNICUS_RESOLUTION_ARC_SECONDS = 10;

export const MAX_GRID_CELLS = 160;
export const MIN_GRID_CELLS = 72;
export const MAX_TRACK_POINTS = 1200;
export const MIN_PADDING_METERS = 900;
export const MAX_PADDING_METERS = 5000;
export const MAX_COPERNICUS_TILES = 16;
export const MAX_TILE_SAMPLE_SIZE = 640;
export const TILE_FETCH_TIMEOUT_MS = 45000;
export const THREE_JS_VERSION = "0.180.0";

export const DEFAULT_BOUNDS: GeoBounds = {
  minLat: 0,
  maxLat: 0,
  minLon: 0,
  maxLon: 0,
};
