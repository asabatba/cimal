import { XMLParser } from "fast-xml-parser";
import { computeBounds, computeDistanceMeters } from "./math.ts";
import type { GeoPoint, TrackData } from "./types.ts";

type XmlNode = Record<string, any>;

const parser = new XMLParser({
  attributeNamePrefix: "",
  ignoreAttributes: false,
  parseTagValue: false,
  removeNSPrefix: true,
  trimValues: true,
});

function asArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function parsePoint(rawPoint: XmlNode): GeoPoint | null {
  const lat = Number(rawPoint.lat);
  const lon = Number(rawPoint.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return null;
  }

  const ele = rawPoint.ele !== undefined ? Number(rawPoint.ele) : null;
  return {
    lat,
    lon,
    ele: Number.isFinite(ele) ? ele : null,
  };
}

function extractTrackPoints(gpxRoot: XmlNode): GeoPoint[] {
  const tracks = asArray(gpxRoot.trk);
  const routePoints = asArray(gpxRoot.rte).flatMap((route) =>
    asArray(route.rtept).map(parsePoint).filter(Boolean) as GeoPoint[]
  );

  const trackPoints = tracks.flatMap((track) =>
    asArray(track.trkseg).flatMap((segment) =>
      asArray(segment.trkpt).map(parsePoint).filter(Boolean) as GeoPoint[]
    )
  );

  return trackPoints.length > 0 ? trackPoints : routePoints;
}

export async function fetchTrackData(gpxUrl: string): Promise<TrackData> {
  const response = await fetch(gpxUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch GPX file: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  const parsed = parser.parse(xml);
  const gpxRoot = parsed.gpx ?? parsed;
  const points = extractTrackPoints(gpxRoot);

  if (points.length < 2) {
    throw new Error("The GPX file did not contain a usable track or route.");
  }

  const bounds = computeBounds(points);
  let distanceMeters = 0;
  let totalAscent = 0;
  let totalDescent = 0;

  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    distanceMeters += computeDistanceMeters(previous, current);

    if (previous.ele != null && current.ele != null) {
      const delta = current.ele - previous.ele;
      if (delta > 0) {
        totalAscent += delta;
      } else {
        totalDescent += Math.abs(delta);
      }
    }
  }

  return {
    sourceUrl: gpxUrl,
    points,
    bounds,
    distanceMeters,
    totalAscent,
    totalDescent,
  };
}
