import { space } from "@silverbulletmd/silverbullet/syscalls";
import { XMLParser } from "fast-xml-parser";
import { computeBounds } from "./math.ts";
import { computeTrackMetrics } from "./trackMetrics.ts";
import type { GeoPoint, TrackData } from "./types.ts";

type XmlNode = Record<string, unknown>;

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
	const routePoints = asArray(gpxRoot.rte).flatMap(
		(route) =>
			asArray(route.rtept).map(parsePoint).filter(Boolean) as GeoPoint[],
	);

	const trackPoints = tracks.flatMap((track) =>
		asArray(track.trkseg).flatMap(
			(segment) =>
				asArray(segment.trkpt).map(parsePoint).filter(Boolean) as GeoPoint[],
		),
	);

	return trackPoints.length > 0 ? trackPoints : routePoints;
}

function isRemoteUrl(source: string): boolean {
	return /^https?:\/\//i.test(source);
}

export async function readGpxXml(source: string): Promise<string> {
	if (isRemoteUrl(source)) {
		const response = await fetch(source);
		if (!response.ok) {
			throw new Error(
				`Failed to fetch GPX file: ${response.status} ${response.statusText}`,
			);
		}
		return await response.text();
	}

	const candidates = source.endsWith(".gpx")
		? [source]
		: [source, `${source}.gpx`];
	for (const candidate of candidates) {
		if (await space.fileExists(candidate)) {
			const data = await space.readFile(candidate);
			return new TextDecoder().decode(data);
		}
	}

	throw new Error(`GPX file not found in space: ${source}`);
}

export function parseTrackData(gpxSource: string, xml: string): TrackData {
	const parsed = parser.parse(xml);
	const gpxRoot = parsed.gpx ?? parsed;
	const points = extractTrackPoints(gpxRoot);

	if (points.length < 2) {
		throw new Error("The GPX file did not contain a usable track or route.");
	}

	const bounds = computeBounds(points);
	const metrics = computeTrackMetrics(points, (point) => point.ele);

	return {
		sourceUrl: gpxSource,
		points,
		bounds,
		distanceMeters: metrics.distanceMeters,
		totalAscent: metrics.totalAscent,
		totalDescent: metrics.totalDescent,
	};
}

export async function fetchTrackData(gpxSource: string): Promise<TrackData> {
	const xml = await readGpxXml(gpxSource);
	return parseTrackData(gpxSource, xml);
}
