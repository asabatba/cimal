import type * as ThreeType from "three";
import type { TerrainPayload } from "../types.ts";

export function buildTrackRibbon(
	THREE: typeof ThreeType,
	points: TerrainPayload["track"],
	width: number,
	heightOffset: number,
	minElevation: number,
): ThreeType.BufferGeometry | null {
	if (points.length < 2) {
		return null;
	}

	const halfWidth = width / 2;
	const up = new THREE.Vector3(0, 1, 0);
	const centerPoints = points.map(
		(point) =>
			new THREE.Vector3(
				point.x,
				point.y - minElevation + heightOffset,
				point.z,
			),
	);

	const positions = new Float32Array(centerPoints.length * 2 * 3);
	const indices: number[] = [];
	const tangent = new THREE.Vector3();
	const side = new THREE.Vector3();
	const lateral = new THREE.Vector3();

	for (let index = 0; index < centerPoints.length; index += 1) {
		const previous = centerPoints[Math.max(0, index - 1)];
		const next = centerPoints[Math.min(centerPoints.length - 1, index + 1)];

		tangent.subVectors(next, previous);
		tangent.y = 0;
		if (tangent.lengthSq() < 1e-6) {
			tangent.set(0, 0, -1);
		} else {
			tangent.normalize();
		}

		side.crossVectors(up, tangent);
		if (side.lengthSq() < 1e-6) {
			side.set(1, 0, 0);
		} else {
			side.normalize();
		}

		const center = centerPoints[index];
		lateral.copy(side).multiplyScalar(halfWidth);
		const left = center.clone().add(lateral);
		const right = center.clone().sub(lateral);

		const baseOffset = index * 6;
		positions[baseOffset] = left.x;
		positions[baseOffset + 1] = left.y;
		positions[baseOffset + 2] = left.z;
		positions[baseOffset + 3] = right.x;
		positions[baseOffset + 4] = right.y;
		positions[baseOffset + 5] = right.z;

		if (index < centerPoints.length - 1) {
			const baseIndex = index * 2;
			indices.push(baseIndex, baseIndex + 1, baseIndex + 2);
			indices.push(baseIndex + 2, baseIndex + 1, baseIndex + 3);
		}
	}

	const ribbonGeometry = new THREE.BufferGeometry();
	ribbonGeometry.setIndex(indices);
	ribbonGeometry.setAttribute(
		"position",
		new THREE.BufferAttribute(positions, 3),
	);
	ribbonGeometry.computeVertexNormals();
	return ribbonGeometry;
}

export function buildTerrainSideGeometry(
	THREE: typeof ThreeType,
	topPositions: Float32Array,
	width: number,
	height: number,
	bottomY: number,
): ThreeType.BufferGeometry {
	const vertices: number[] = [];
	type EdgePoint = InstanceType<typeof THREE.Vector3>;

	function pushQuad(
		a: EdgePoint,
		b: EdgePoint,
		c: EdgePoint,
		d: EdgePoint,
	): void {
		vertices.push(
			a.x,
			a.y,
			a.z,
			b.x,
			b.y,
			b.z,
			c.x,
			c.y,
			c.z,
			c.x,
			c.y,
			c.z,
			b.x,
			b.y,
			b.z,
			d.x,
			d.y,
			d.z,
		);
	}

	function addStrip(points: EdgePoint[]): void {
		for (let index = 0; index < points.length - 1; index += 1) {
			const start = points[index];
			const end = points[index + 1];
			const bottomStart = new THREE.Vector3(start.x, bottomY, start.z);
			const bottomEnd = new THREE.Vector3(end.x, bottomY, end.z);
			pushQuad(start, bottomStart, end, bottomEnd);
		}
	}

	const topEdge: EdgePoint[] = [];
	const bottomEdge: EdgePoint[] = [];
	const leftEdge: EdgePoint[] = [];
	const rightEdge: EdgePoint[] = [];

	for (let column = 0; column < width; column += 1) {
		const topIndex = column * 3;
		const bottomIndex = ((height - 1) * width + column) * 3;
		topEdge.push(
			new THREE.Vector3(
				topPositions[topIndex],
				topPositions[topIndex + 1],
				topPositions[topIndex + 2],
			),
		);
		bottomEdge.push(
			new THREE.Vector3(
				topPositions[bottomIndex],
				topPositions[bottomIndex + 1],
				topPositions[bottomIndex + 2],
			),
		);
	}

	for (let row = 0; row < height; row += 1) {
		const leftIndex = row * width * 3;
		const rightIndex = (row * width + (width - 1)) * 3;
		leftEdge.push(
			new THREE.Vector3(
				topPositions[leftIndex],
				topPositions[leftIndex + 1],
				topPositions[leftIndex + 2],
			),
		);
		rightEdge.push(
			new THREE.Vector3(
				topPositions[rightIndex],
				topPositions[rightIndex + 1],
				topPositions[rightIndex + 2],
			),
		);
	}

	addStrip(topEdge);
	addStrip([...rightEdge].reverse());
	addStrip([...bottomEdge].reverse());
	addStrip(leftEdge);

	const sideGeometry = new THREE.BufferGeometry();
	sideGeometry.setAttribute(
		"position",
		new THREE.Float32BufferAttribute(vertices, 3),
	);
	sideGeometry.computeVertexNormals();
	return sideGeometry;
}
