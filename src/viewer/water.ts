const WATER_NEIGHBOR_TOLERANCE = 0.8;
const WATER_COMPONENT_RANGE_MAX = 1.2;
const WATER_MIN_COMPONENT_CELLS = 36;
const WATER_MIN_COMPONENT_RATIO = 0.015;

export function detectWaterMask(
	width: number,
	height: number,
	elevations: number[],
	useWaterTint: boolean,
): Uint8Array {
	const cellCount = width * height;
	const waterMask = new Uint8Array(cellCount);
	if (!useWaterTint || cellCount === 0) {
		return waterMask;
	}

	const visited = new Uint8Array(cellCount);
	const minComponentSize = Math.max(
		WATER_MIN_COMPONENT_CELLS,
		Math.ceil(cellCount * WATER_MIN_COMPONENT_RATIO),
	);

	function maybeVisitNeighbor(
		currentIndex: number,
		neighborIndex: number,
		queue: number[],
		component: number[],
		componentState: { minElevation: number; maxElevation: number },
	): void {
		if (visited[neighborIndex]) {
			return;
		}

		const currentElevation = elevations[currentIndex];
		const neighborElevation = elevations[neighborIndex];
		if (
			Math.abs(neighborElevation - currentElevation) > WATER_NEIGHBOR_TOLERANCE
		) {
			return;
		}

		const nextMinElevation = Math.min(
			componentState.minElevation,
			neighborElevation,
		);
		const nextMaxElevation = Math.max(
			componentState.maxElevation,
			neighborElevation,
		);
		if (nextMaxElevation - nextMinElevation > WATER_COMPONENT_RANGE_MAX) {
			return;
		}

		visited[neighborIndex] = 1;
		queue.push(neighborIndex);
		component.push(neighborIndex);
		componentState.minElevation = nextMinElevation;
		componentState.maxElevation = nextMaxElevation;
	}

	for (let startIndex = 0; startIndex < cellCount; startIndex += 1) {
		if (visited[startIndex]) {
			continue;
		}

		visited[startIndex] = 1;
		const component = [startIndex];
		const queue = [startIndex];
		const componentState = {
			minElevation: elevations[startIndex],
			maxElevation: elevations[startIndex],
		};

		while (queue.length > 0) {
			const currentIndex = queue.pop();
			if (currentIndex == null) {
				continue;
			}

			const row = Math.floor(currentIndex / width);
			const column = currentIndex % width;

			if (column > 0) {
				maybeVisitNeighbor(
					currentIndex,
					currentIndex - 1,
					queue,
					component,
					componentState,
				);
			}
			if (column < width - 1) {
				maybeVisitNeighbor(
					currentIndex,
					currentIndex + 1,
					queue,
					component,
					componentState,
				);
			}
			if (row > 0) {
				maybeVisitNeighbor(
					currentIndex,
					currentIndex - width,
					queue,
					component,
					componentState,
				);
			}
			if (row < height - 1) {
				maybeVisitNeighbor(
					currentIndex,
					currentIndex + width,
					queue,
					component,
					componentState,
				);
			}
		}

		if (
			component.length >= minComponentSize &&
			componentState.maxElevation - componentState.minElevation <=
				WATER_COMPONENT_RANGE_MAX
		) {
			for (const index of component) {
				waterMask[index] = 1;
			}
		}
	}

	return waterMask;
}
