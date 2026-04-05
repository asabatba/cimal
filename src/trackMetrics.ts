import { computeDistanceMeters } from "./math.ts";

type CoordinatePoint = {
	lat: number;
	lon: number;
};

export function computeTrackMetrics<T extends CoordinatePoint>(
	points: T[],
	getElevation: (point: T) => number | null | undefined,
): {
	distanceMeters: number;
	totalAscent: number;
	totalDescent: number;
} {
	let totalAscent = 0;
	let totalDescent = 0;
	let distanceMeters = 0;

	for (let index = 1; index < points.length; index += 1) {
		const previous = points[index - 1];
		const current = points[index];
		distanceMeters += computeDistanceMeters(previous, current);

		const previousElevation = getElevation(previous);
		const currentElevation = getElevation(current);
		if (previousElevation == null || currentElevation == null) {
			continue;
		}

		const delta = currentElevation - previousElevation;
		if (delta > 0) {
			totalAscent += delta;
		} else {
			totalDescent += Math.abs(delta);
		}
	}

	return {
		distanceMeters,
		totalAscent,
		totalDescent,
	};
}
