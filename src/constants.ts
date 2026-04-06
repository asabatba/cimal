export const GPX_WIDGET_LANGUAGE = "cimal";
export const COPERNICUS_S3_ROOT = "s3://copernicus-dem-30m/";
export const COPERNICUS_HTTP_ROOT =
	"https://copernicus-dem-30m.s3.amazonaws.com";
export const COPERNICUS_RESOLUTION_ARC_SECONDS = 10;

export const MAX_GRID_CELLS = 160;
export const MIN_GRID_CELLS = 72;
export const MIN_PADDING_METERS = 900;
export const MAX_PADDING_METERS = 5000;
export const MAX_COPERNICUS_TILES = 16;
export const MAX_TILE_SAMPLE_SIZE = 640;
export const TILE_FETCH_TIMEOUT_MS = 45000;
export const THREE_JS_VERSION = "0.180";
export const CIMAL_PACK_VERSION = 4;
export const TERRAIN_CACHE_VERSION = 2;
export const TERRAIN_CACHE_ROOT = "Library/.cache/cimal";
export const TERRAIN_CACHE_INDEX_PATH = `${TERRAIN_CACHE_ROOT}/v${TERRAIN_CACHE_VERSION}/index.json`;
export const TERRAIN_CACHE_MAX_BYTES = 250 * 1024 * 1024;
export const HIKING_MAP_TILE_CACHE_VERSION = 1;
export const HIKING_MAP_TILE_CACHE_ROOT = `${TERRAIN_CACHE_ROOT}/hiking-map`;
export const HIKING_MAP_TILE_CACHE_INDEX_PATH = `${HIKING_MAP_TILE_CACHE_ROOT}/v${HIKING_MAP_TILE_CACHE_VERSION}/index.json`;
export const HIKING_MAP_TILE_CACHE_MAX_BYTES = 150 * 1024 * 1024;
export const CIMAL_PACK_CACHE_VERSION = 4;
export const CIMAL_PACK_CACHE_ROOT = `${TERRAIN_CACHE_ROOT}/packs`;
export const CIMAL_PACK_CACHE_INDEX_PATH = `${CIMAL_PACK_CACHE_ROOT}/v${CIMAL_PACK_CACHE_VERSION}/index.json`;
export const CIMAL_PACK_CACHE_MAX_BYTES = 100 * 1024 * 1024;
