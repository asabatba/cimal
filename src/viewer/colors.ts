import type * as ThreeType from "three";

type NumericColorStop = {
	t: number;
	color: number;
};

export type ResolvedColorStop = {
	t: number;
	color: ThreeType.Color;
};

export function resolveColorStops(
	THREE: typeof ThreeType,
	stops: NumericColorStop[],
): ResolvedColorStop[] {
	return stops.map((stop) => ({
		t: stop.t,
		color: new THREE.Color(stop.color),
	}));
}

export function sampleGradient(
	THREE: typeof ThreeType,
	stops: ResolvedColorStop[],
	normalized: number,
): ThreeType.Color {
	if (normalized <= stops[0].t) {
		return stops[0].color.clone();
	}

	for (let index = 1; index < stops.length; index += 1) {
		const previous = stops[index - 1];
		const current = stops[index];
		if (normalized <= current.t) {
			const localT =
				(normalized - previous.t) / Math.max(0.0001, current.t - previous.t);
			return previous.color
				.clone()
				.lerp(current.color, THREE.MathUtils.smoothstep(localT, 0, 1));
		}
	}

	return stops[stops.length - 1].color.clone();
}
