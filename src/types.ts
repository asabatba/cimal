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
  lat: number;
  lon: number;
  elevation: number;
};

export type TerrainGrid = {
  width: number;
  height: number;
  elevations: number[];
  minElevation: number;
  maxElevation: number;
};

export type TerrainPayload = {
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
  grid: TerrainGrid;
  track: LocalPoint[];
  stats: {
    distanceKm: number;
    totalAscent: number;
    totalDescent: number;
    pointCount: number;
    tileCount: number;
  };
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
