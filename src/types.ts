export type GeoPoint = {
	lat: number;
	lon: number;
	ele?: number | null;
};

export type GeoBounds = {
	minLat: number;
	maxLat: number;
	minLon: number;
	maxLon: number;
};

export type TrackData = {
	sourceUrl: string;
	points: GeoPoint[];
	bounds: GeoBounds;
	distanceMeters: number;
	totalAscent: number;
	totalDescent: number;
};

export type LocalPoint = {
	x: number;
	z: number;
	y: number;
	lat?: number;
	lon?: number;
	elevation: number;
};

export type TerrainGrid = {
	width: number;
	height: number;
	elevations: number[];
	minElevation: number;
	maxElevation: number;
};

export type BakedImageryKind = "hiking-map" | "worldcover";

export type BakedImagery = {
	kind: BakedImageryKind;
	width: number;
	height: number;
	mimeType: string;
	dataUrl: string;
	sourceVersion: string;
	resolution?: HikingMapResolution;
};

export type TerrainPayload = {
	title: string;
	sourceUrl: string;
	warning?: string;
	bounds: GeoBounds;
	center: {
		lat: number;
		lon: number;
	};
	metersPerDegree: {
		lat: number;
		lon: number;
	};
	grid: TerrainGrid;
	track: LocalPoint[];
	bakedImagery?: BakedImagery;
	stats: {
		distanceKm: number;
		totalAscent: number;
		totalDescent: number;
		pointCount: number;
		tileCount: number;
	};
};

export type ViewerStyle =
	| "classic"
	| "hiking-map"
	| "worldcover"
	| "vaporwave"
	| "lava"
	| "water-world"
	| "dracula"
	| "pastel"
	| "rainbow";
export type HikingMapResolution = "low" | "standard" | "high" | "ultra";
export type TerrainShape = "smooth" | "triangular";
export type WorldCoverProcessing = "raw" | "no-islands";

export type ViewerConfig = {
	style: ViewerStyle;
	hikingMapResolution: HikingMapResolution;
	terrainShape: TerrainShape;
	worldcoverProcessing: WorldCoverProcessing;
};

export type ParsedWidgetConfig = ViewerConfig & {
	source: string;
	hasExplicitHikingMapResolution: boolean;
	hasExplicitTerrainShape: boolean;
	hasExplicitWorldcoverProcessing: boolean;
};

export type ErrorPayload = {
	title: string;
	message: string;
	details?: string;
};

export type TileIndex = {
	southLat: number;
	westLon: number;
};

export type SampledTile = {
	bounds: GeoBounds;
	width: number;
	height: number;
	values: Float32Array;
	noDataValue: number | null;
};

export type TerrainCacheIndexEntry = {
	key: string;
	path: string;
	size: number;
	lastUsed: number;
};

export type TerrainCacheIndex = {
	version: number;
	entries: Record<string, TerrainCacheIndexEntry>;
};

export type CimalPackHeader = {
	version: number;
	title: string;
	sourceUrl: string;
	bounds: GeoBounds;
	center: {
		lat: number;
		lon: number;
	};
	metersPerDegree: {
		lat: number;
		lon: number;
	};
	grid: {
		width: number;
		height: number;
		minElevation: number;
		maxElevation: number;
	};
	stats: TerrainPayload["stats"];
	trackPointCount: number;
	bakedImagery?: {
		kind: BakedImageryKind;
		width: number;
		height: number;
		mimeType: string;
		sourceVersion: string;
		resolution?: HikingMapResolution;
		byteLength: number;
	};
	bakedHikingMap?: {
		width: number;
		height: number;
		mimeType: string;
		resolution: HikingMapResolution;
		byteLength: number;
	};
};
