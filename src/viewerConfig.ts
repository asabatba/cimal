import type {
	HikingMapResolution,
	TerrainShape,
	ViewerConfig,
	ViewerStyle,
} from "./types.ts";

export const DEFAULT_VIEWER_STYLE: ViewerStyle = "classic";
export const DEFAULT_HIKING_MAP_RESOLUTION: HikingMapResolution = "standard";
export const DEFAULT_TERRAIN_SHAPE: TerrainShape = "smooth";
export const SUPPORTED_VIEWER_STYLES: ViewerStyle[] = [
	"classic",
	"hiking-map",
	"worldcover",
	"vaporwave",
	"lava",
	"water-world",
	"dracula",
	"pastel",
	"rainbow",
];
export const SUPPORTED_HIKING_MAP_RESOLUTIONS: HikingMapResolution[] = [
	"low",
	"standard",
	"high",
	"ultra",
];
export const SUPPORTED_TERRAIN_SHAPES: TerrainShape[] = [
	"smooth",
	"triangular",
];

export const DEFAULT_VIEWER_CONFIG: ViewerConfig = {
	style: DEFAULT_VIEWER_STYLE,
	hikingMapResolution: DEFAULT_HIKING_MAP_RESOLUTION,
	terrainShape: DEFAULT_TERRAIN_SHAPE,
};
