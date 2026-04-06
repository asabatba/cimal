import type { GeoBounds, GeoPoint } from "./types.ts";

const EARTH_RADIUS_METERS = 6_371_000;

export function clamp(value: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, value));
}

export function lerp(start: number, end: number, t: number): number {
	return start + (end - start) * t;
}

export function toRadians(value: number): number {
	return (value * Math.PI) / 180;
}

export function computeDistanceMeters(a: GeoPoint, b: GeoPoint): number {
	const lat1 = toRadians(a.lat);
	const lat2 = toRadians(b.lat);
	const deltaLat = toRadians(b.lat - a.lat);
	const deltaLon = toRadians(b.lon - a.lon);

	const sinHalfLat = Math.sin(deltaLat / 2);
	const sinHalfLon = Math.sin(deltaLon / 2);
	const haversine =
		sinHalfLat * sinHalfLat +
		Math.cos(lat1) * Math.cos(lat2) * sinHalfLon * sinHalfLon;

	return 2 * EARTH_RADIUS_METERS * Math.asin(Math.min(1, Math.sqrt(haversine)));
}

export function computeBounds(points: GeoPoint[]): GeoBounds {
	if (points.length === 0) {
		throw new Error("Cannot compute bounds for an empty point set.");
	}

	let minLat = Number.POSITIVE_INFINITY;
	let maxLat = Number.NEGATIVE_INFINITY;
	let minLon = Number.POSITIVE_INFINITY;
	let maxLon = Number.NEGATIVE_INFINITY;

	for (const point of points) {
		minLat = Math.min(minLat, point.lat);
		maxLat = Math.max(maxLat, point.lat);
		minLon = Math.min(minLon, point.lon);
		maxLon = Math.max(maxLon, point.lon);
	}

	return { minLat, maxLat, minLon, maxLon };
}

export function boundsWidth(bounds: GeoBounds): number {
	return Math.max(0, bounds.maxLon - bounds.minLon);
}

export function boundsHeight(bounds: GeoBounds): number {
	return Math.max(0, bounds.maxLat - bounds.minLat);
}

export function expandBounds(
	bounds: GeoBounds,
	latPadding: number,
	lonPadding: number,
): GeoBounds {
	return {
		minLat: bounds.minLat - latPadding,
		maxLat: bounds.maxLat + latPadding,
		minLon: bounds.minLon - lonPadding,
		maxLon: bounds.maxLon + lonPadding,
	};
}

export function getBoundsCenter(bounds: GeoBounds): {
	lat: number;
	lon: number;
} {
	return {
		lat: (bounds.minLat + bounds.maxLat) / 2,
		lon: (bounds.minLon + bounds.maxLon) / 2,
	};
}

export function metersPerDegreeAtLatitude(latitude: number): {
	lat: number;
	lon: number;
} {
	const latRad = toRadians(latitude);
	const metersPerDegreeLat =
		111_132.92 - 559.82 * Math.cos(2 * latRad) + 1.175 * Math.cos(4 * latRad);
	const metersPerDegreeLon =
		111_412.84 * Math.cos(latRad) - 93.5 * Math.cos(3 * latRad);

	return {
		lat: metersPerDegreeLat,
		lon: Math.max(1, metersPerDegreeLon),
	};
}

export function intersectBounds(a: GeoBounds, b: GeoBounds): GeoBounds | null {
	const minLat = Math.max(a.minLat, b.minLat);
	const maxLat = Math.min(a.maxLat, b.maxLat);
	const minLon = Math.max(a.minLon, b.minLon);
	const maxLon = Math.min(a.maxLon, b.maxLon);

	if (minLat >= maxLat || minLon >= maxLon) {
		return null;
	}

	return { minLat, maxLat, minLon, maxLon };
}

export function projectToLocalMeters(
	point: GeoPoint,
	center: { lat: number; lon: number },
	metersPerDegree: { lat: number; lon: number },
): { x: number; z: number } {
	return {
		x: (point.lon - center.lon) * metersPerDegree.lon,
		z: (point.lat - center.lat) * -metersPerDegree.lat,
	};
}

export function computeRasterWindow(
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
