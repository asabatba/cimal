import type * as ThreeType from "three";
import type { TerrainPayload } from "../types.ts";
import { resolveColorStops, sampleGradient } from "./colors.ts";
import { buildTerrainSideGeometry } from "./geometry.ts";
import type { ViewerTheme } from "./themes.ts";
import { detectWaterMask } from "./water.ts";

type TerrainLayer = {
	objects: ThreeType.Object3D[];
	waterMaterial: ThreeType.MeshStandardMaterial | null;
	applyBakedTexture(texture: ThreeType.Texture): void;
	dispose(): void;
};

function computeShoreStrength(
	THREE: typeof ThreeType,
	column: number,
	row: number,
	width: number,
	height: number,
	waterMask: Uint8Array,
	shoreWidth: number,
): number {
	if (waterMask[row * width + column] !== 1 || shoreWidth <= 0) {
		return 0;
	}

	let closest = Number.POSITIVE_INFINITY;
	for (let rowOffset = -shoreWidth; rowOffset <= shoreWidth; rowOffset += 1) {
		for (
			let columnOffset = -shoreWidth;
			columnOffset <= shoreWidth;
			columnOffset += 1
		) {
			const nextRow = row + rowOffset;
			const nextColumn = column + columnOffset;
			if (
				nextRow < 0 ||
				nextColumn < 0 ||
				nextRow >= height ||
				nextColumn >= width
			) {
				continue;
			}
			if (waterMask[nextRow * width + nextColumn] === 0) {
				closest = Math.min(
					closest,
					Math.max(Math.abs(rowOffset), Math.abs(columnOffset)),
				);
			}
		}
	}

	if (!Number.isFinite(closest)) {
		return 0;
	}

	return THREE.MathUtils.clamp(
		1 - (closest - 1) / Math.max(shoreWidth, 1),
		0,
		1,
	);
}

function createTerrainAppearanceSampler(
	THREE: typeof ThreeType,
	activeTheme: ViewerTheme,
): (
	normalized: number,
	normalY: number,
	normalX: number,
	normalZ: number,
) => {
	color: ThreeType.Color;
	reliefShade: number;
} {
	const terrainStops = resolveColorStops(
		THREE,
		activeTheme.terrain.elevationStops,
	);
	const slopeLow = new THREE.Color(activeTheme.terrain.slopeTint.low);
	const slopeHigh = new THREE.Color(activeTheme.terrain.slopeTint.high);
	const aspectCool = new THREE.Color(activeTheme.terrain.aspectTint.cool);
	const aspectWarm = new THREE.Color(activeTheme.terrain.aspectTint.warm);
	const warmAspectDirection = new THREE.Vector2(-0.78, 0.62).normalize();
	const coolAspectDirection = warmAspectDirection.clone().negate();

	return (normalized, normalY, normalX, normalZ) => {
		const baseColor = sampleGradient(THREE, terrainStops, normalized ** 0.92);
		const steepness = THREE.MathUtils.clamp(1 - normalY, 0, 1);
		const slopeMix =
			steepness ** activeTheme.terrain.slopeTint.curve *
			activeTheme.terrain.slopeTint.strength;
		const slopeColor = slopeLow.clone().lerp(slopeHigh, steepness);
		baseColor.lerp(slopeColor, THREE.MathUtils.clamp(slopeMix, 0, 0.8));

		const horizontalNormal = new THREE.Vector2(normalX, normalZ);
		let reliefOrientation = normalized;
		if (horizontalNormal.lengthSq() > 1e-6) {
			horizontalNormal.normalize();
			const warmMix =
				Math.max(0, horizontalNormal.dot(warmAspectDirection)) *
				activeTheme.terrain.aspectTint.strength *
				(0.25 + steepness * 0.75);
			const coolMix =
				Math.max(0, horizontalNormal.dot(coolAspectDirection)) *
				activeTheme.terrain.aspectTint.strength *
				(0.25 + steepness * 0.75);
			baseColor.lerp(aspectWarm, warmMix);
			baseColor.lerp(aspectCool, coolMix);
			reliefOrientation =
				normalized * 0.68 +
				THREE.MathUtils.clamp(1 - steepness * 0.85, 0, 1) * 0.32;
		}

		const reliefValue = THREE.MathUtils.lerp(
			activeTheme.terrain.reliefShading.shadow,
			activeTheme.terrain.reliefShading.highlight,
			reliefOrientation ** activeTheme.terrain.reliefShading.curve,
		);
		const reliefStrength = activeTheme.terrain.reliefShading.strength;
		baseColor.multiplyScalar(
			THREE.MathUtils.lerp(
				1,
				reliefValue,
				THREE.MathUtils.clamp(reliefStrength, 0, 1),
			),
		);

		return {
			color: baseColor,
			reliefShade: THREE.MathUtils.clamp(reliefValue, 0.64, 1.18),
		};
	};
}

export function createTerrainLayer(
	THREE: typeof ThreeType,
	payload: TerrainPayload,
	activeTheme: ViewerTheme,
	options: {
		spanX: number;
		spanZ: number;
		sceneSpan: number;
		elevationRange: number;
	},
): TerrainLayer {
	const { grid } = payload;
	const { spanX, spanZ, sceneSpan, elevationRange } = options;
	const appearanceForNormal = createTerrainAppearanceSampler(
		THREE,
		activeTheme,
	);
	const waterStops = resolveColorStops(THREE, activeTheme.water.surfaceStops);
	const shoreTint = activeTheme.water.shoreTint
		? new THREE.Color(activeTheme.water.shoreTint)
		: null;

	const geometry = new THREE.BufferGeometry();
	const vertexCount = grid.width * grid.height;
	const positions = new Float32Array(vertexCount * 3);
	const terrainColors = new Float32Array(vertexCount * 3);
	const hikingTextureBlendColors = new Float32Array(vertexCount * 3);
	const uvs = new Float32Array(vertexCount * 2);
	const indices: number[] = [];
	const waterMask = detectWaterMask(
		grid.width,
		grid.height,
		grid.elevations,
		activeTheme.useWaterTint,
	);
	const shoreStrengths = new Float32Array(vertexCount);

	let positionPointer = 0;
	let uvPointer = 0;
	for (let row = 0; row < grid.height; row += 1) {
		const rowRatio = grid.height === 1 ? 0.5 : row / (grid.height - 1);
		const z = (rowRatio - 0.5) * spanZ;
		for (let column = 0; column < grid.width; column += 1) {
			const columnRatio = grid.width === 1 ? 0.5 : column / (grid.width - 1);
			const x = (columnRatio - 0.5) * spanX;
			const elevation = grid.elevations[row * grid.width + column];
			const y = elevation - grid.minElevation;

			positions[positionPointer] = x;
			positions[positionPointer + 1] = y;
			positions[positionPointer + 2] = z;
			uvs[uvPointer] = columnRatio;
			uvs[uvPointer + 1] = 1 - rowRatio;
			shoreStrengths[row * grid.width + column] = computeShoreStrength(
				THREE,
				column,
				row,
				grid.width,
				grid.height,
				waterMask,
				activeTheme.water.shoreWidth,
			);

			positionPointer += 3;
			uvPointer += 2;
		}
	}

	for (let row = 0; row < grid.height - 1; row += 1) {
		for (let column = 0; column < grid.width - 1; column += 1) {
			const topLeft = row * grid.width + column;
			const topRight = topLeft + 1;
			const bottomLeft = topLeft + grid.width;
			const bottomRight = bottomLeft + 1;
			indices.push(topLeft, bottomLeft, topRight);
			indices.push(topRight, bottomLeft, bottomRight);
		}
	}

	geometry.setIndex(indices);
	geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
	geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
	geometry.computeVertexNormals();

	const normals = geometry.getAttribute("normal");
	for (let index = 0; index < vertexCount; index += 1) {
		const colorPointer = index * 3;
		const elevation = grid.elevations[index];
		const normalized = (elevation - grid.minElevation) / elevationRange;
		const appearance = appearanceForNormal(
			normalized,
			normals.getY(index),
			normals.getX(index),
			normals.getZ(index),
		);

		terrainColors[colorPointer] = appearance.color.r;
		terrainColors[colorPointer + 1] = appearance.color.g;
		terrainColors[colorPointer + 2] = appearance.color.b;
		hikingTextureBlendColors[colorPointer] = appearance.reliefShade;
		hikingTextureBlendColors[colorPointer + 1] = appearance.reliefShade;
		hikingTextureBlendColors[colorPointer + 2] = appearance.reliefShade;
	}

	const terrainColorAttribute = new THREE.BufferAttribute(terrainColors, 3);
	const hikingBlendAttribute = new THREE.BufferAttribute(
		hikingTextureBlendColors,
		3,
	);
	geometry.setAttribute("color", terrainColorAttribute);

	const terrainMaterial = new THREE.MeshStandardMaterial({
		vertexColors: true,
		roughness: activeTheme.terrain.roughness,
		metalness: activeTheme.terrain.metalness,
	});
	const terrain = new THREE.Mesh(geometry, terrainMaterial);

	const terrainDepth = Math.max(90, elevationRange * 0.42, sceneSpan * 0.08);
	const terrainBottomY = -terrainDepth;
	const sideGeometry = buildTerrainSideGeometry(
		THREE,
		positions,
		grid.width,
		grid.height,
		terrainBottomY,
	);
	const sideMaterial = new THREE.MeshStandardMaterial({
		color: activeTheme.terrain.sideColor,
		roughness: 0.98,
		metalness: 0.02,
		side: THREE.DoubleSide,
	});
	const terrainSides = new THREE.Mesh(sideGeometry, sideMaterial);

	const bottomGeometry = new THREE.PlaneGeometry(spanX, spanZ);
	bottomGeometry.rotateX(-Math.PI / 2);
	const bottomMaterial = new THREE.MeshStandardMaterial({
		color: activeTheme.terrain.bottomColor,
		roughness: 1,
		metalness: 0,
		side: THREE.DoubleSide,
	});
	const terrainBottom = new THREE.Mesh(bottomGeometry, bottomMaterial);
	terrainBottom.position.y = terrainBottomY;

	let waterGeometry: ThreeType.BufferGeometry | null = null;
	let waterMaterial: ThreeType.MeshStandardMaterial | null = null;
	let waterOverlay: ThreeType.Mesh | null = null;
	if (activeTheme.useWaterTint) {
		const waterPositions: number[] = [];
		const waterColors: number[] = [];
		const waterIndices: number[] = [];
		const overlayHeight = Math.max(1.25, sceneSpan * 0.00008);

		for (let row = 0; row < grid.height - 1; row += 1) {
			for (let column = 0; column < grid.width - 1; column += 1) {
				const topLeft = row * grid.width + column;
				const topRight = topLeft + 1;
				const bottomLeft = topLeft + grid.width;
				const bottomRight = bottomLeft + 1;
				const triangles = [
					[topLeft, bottomLeft, topRight],
					[topRight, bottomLeft, bottomRight],
				];

				for (const triangle of triangles) {
					if (!triangle.every((vertex) => waterMask[vertex] === 1)) {
						continue;
					}

					const baseIndex = waterPositions.length / 3;
					for (const vertex of triangle) {
						const normalized =
							(grid.elevations[vertex] - grid.minElevation) / elevationRange;
						const waterColor = sampleGradient(THREE, waterStops, normalized);
						if (shoreTint) {
							waterColor.lerp(shoreTint, shoreStrengths[vertex] * 0.7);
						}
						waterPositions.push(
							positions[vertex * 3],
							positions[vertex * 3 + 1] + overlayHeight,
							positions[vertex * 3 + 2],
						);
						waterColors.push(waterColor.r, waterColor.g, waterColor.b);
					}
					waterIndices.push(baseIndex, baseIndex + 1, baseIndex + 2);
				}
			}
		}

		if (waterPositions.length > 0) {
			waterGeometry = new THREE.BufferGeometry();
			waterGeometry.setIndex(waterIndices);
			waterGeometry.setAttribute(
				"position",
				new THREE.Float32BufferAttribute(waterPositions, 3),
			);
			waterGeometry.setAttribute(
				"color",
				new THREE.Float32BufferAttribute(waterColors, 3),
			);
			waterGeometry.computeVertexNormals();
			waterMaterial = new THREE.MeshStandardMaterial({
				vertexColors: true,
				transparent: true,
				opacity: activeTheme.water.opacity,
				roughness: THREE.MathUtils.clamp(
					1 - activeTheme.water.specularStrength * 0.82,
					0.08,
					0.95,
				),
				metalness: THREE.MathUtils.clamp(
					activeTheme.water.specularStrength * 0.38,
					0,
					0.45,
				),
				polygonOffset: true,
				polygonOffsetFactor: -1,
				polygonOffsetUnits: -1,
			});
			waterOverlay = new THREE.Mesh(waterGeometry, waterMaterial);
		}
	}

	return {
		objects: [terrainSides, terrainBottom, terrain, waterOverlay].filter(
			Boolean,
		) as ThreeType.Object3D[],
		waterMaterial,
		applyBakedTexture(texture) {
			geometry.setAttribute("color", hikingBlendAttribute);
			geometry.attributes.color.needsUpdate = true;
			terrainMaterial.map = texture;
			terrainMaterial.needsUpdate = true;
		},
		dispose() {
			waterGeometry?.dispose();
			waterMaterial?.dispose();
			geometry.dispose();
			sideGeometry.dispose();
			bottomGeometry.dispose();
			terrainMaterial.dispose();
			sideMaterial.dispose();
			bottomMaterial.dispose();
		},
	};
}
