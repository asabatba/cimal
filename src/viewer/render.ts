import { COPERNICUS_S3_ROOT, THREE_JS_VERSION } from "../constants.ts";
import { OPEN_HIKING_ATTRIBUTION, OPEN_HIKING_FALLBACK } from "../hikingMap.ts";
import type { TerrainPayload } from "../types.ts";
import { bindKeyboardControls } from "./controls.ts";
import { escapeText, requireElement } from "./dom.ts";
import { buildTerrainSideGeometry, buildTrackRibbon } from "./geometry.ts";
import type { ViewerTheme } from "./themes.ts";
import { detectWaterMask } from "./water.ts";

type ColorStop = {
	t: number;
	color: InstanceType<typeof import("three")["Color"]>;
};

export async function renderTerrainViewer(
	app: HTMLDivElement,
	payload: TerrainPayload,
	activeTheme: ViewerTheme,
): Promise<void> {
	const [THREE, { OrbitControls }] = await Promise.all([
		import(`https://esm.sh/three@${THREE_JS_VERSION}`),
		import(
			`https://esm.sh/three@${THREE_JS_VERSION}/examples/jsm/controls/OrbitControls.js`
		),
	]);

	const { title, sourceUrl, warning, bounds, metersPerDegree, grid, track } =
		payload;
	const spanX = (bounds.maxLon - bounds.minLon) * metersPerDegree.lon;
	const spanZ = (bounds.maxLat - bounds.minLat) * metersPerDegree.lat;
	const sceneSpan = Math.max(spanX, spanZ);
	const elevationRange = Math.max(1, grid.maxElevation - grid.minElevation);
	const exaggeration = Math.min(
		6,
		Math.max(1.6, Math.max(spanX, spanZ) / (elevationRange * 18)),
	);
	const fogDensity = THREE.MathUtils.clamp(
		0.075 / Math.max(sceneSpan, 1),
		0.000045,
		0.00014,
	);

	app.innerHTML = `
    <canvas id="scene"></canvas>
    <aside class="hud">
      <h1>${escapeText(title)}</h1>
      <p>${escapeText(sourceUrl)}</p>
    </aside>
    ${warning ? `<aside class="warning">${escapeText(warning)}</aside>` : ""}
    <footer class="attribution">
      <p id="style-attribution"></p>
      <p>Terrain: <a href="https://copernicus-dem-30m.s3.amazonaws.com/readme.html" target="_blank" rel="noreferrer">${COPERNICUS_S3_ROOT}</a>.</p>
      <p>Click the map to focus it. Drag to orbit, wheel to zoom, right-click to pan. Keyboard: arrows orbit, WASD pan, R/F zoom.</p>
    </footer>
  `;

	const canvas = requireElement("scene", HTMLCanvasElement);
	const styleAttribution = requireElement(
		"style-attribution",
		HTMLParagraphElement,
	);
	canvas.tabIndex = 0;
	canvas.setAttribute("aria-label", "3D terrain map");

	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true,
		alpha: true,
	});
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.outputColorSpace = THREE.SRGBColorSpace;

	const scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2(activeTheme.fogColor, fogDensity);

	const camera = new THREE.PerspectiveCamera(52, 1, 1, 200000);
	camera.position.set(spanX * 0.6, Math.max(spanX, spanZ) * 0.45, spanZ * 0.8);

	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = false;
	controls.rotateSpeed = 0.9;
	controls.zoomSpeed = 1;
	controls.panSpeed = 0.9;
	controls.screenSpacePanning = false;
	controls.target.set(0, elevationRange * exaggeration * 0.18, 0);
	controls.keyPanSpeed = Math.max(20, Math.min(spanX, spanZ) * 0.03);

	const minCameraDistance = 80;
	const maxCameraDistance = Math.max(sceneSpan * 4, minCameraDistance * 6);
	controls.minDistance = minCameraDistance;
	controls.maxDistance = maxCameraDistance;

	const keyboardControls = bindKeyboardControls({
		THREE,
		camera,
		controls,
		canvas,
		sceneSpan,
		minCameraDistance,
		maxCameraDistance,
	});

	scene.add(
		new THREE.HemisphereLight(
			activeTheme.hemisphereSky,
			activeTheme.hemisphereGround,
			activeTheme.hemisphereIntensity,
		),
	);
	const sun = new THREE.DirectionalLight(
		activeTheme.sunColor,
		activeTheme.sunIntensity,
	);
	sun.position.set(-spanX * 0.5, Math.max(spanX, spanZ), spanZ * 0.4);
	scene.add(sun);

	const terrainStops = activeTheme.terrain.elevationStops.map((stop) => ({
		t: stop.t,
		color: new THREE.Color(stop.color),
	}));
	const waterStops = activeTheme.water.surfaceStops.map((stop) => ({
		t: stop.t,
		color: new THREE.Color(stop.color),
	}));
	const trackStops = activeTheme.track.altitudeTintStops?.map((stop) => ({
		t: stop.t,
		color: new THREE.Color(stop.color),
	}));
	const slopeLow = new THREE.Color(activeTheme.terrain.slopeTint.low);
	const slopeHigh = new THREE.Color(activeTheme.terrain.slopeTint.high);
	const aspectCool = new THREE.Color(activeTheme.terrain.aspectTint.cool);
	const aspectWarm = new THREE.Color(activeTheme.terrain.aspectTint.warm);
	const baseTrackColor = new THREE.Color(activeTheme.track.baseColor);
	const shoreTint = activeTheme.water.shoreTint
		? new THREE.Color(activeTheme.water.shoreTint)
		: null;
	const warmAspectDirection = new THREE.Vector2(-0.78, 0.62).normalize();
	const coolAspectDirection = warmAspectDirection.clone().negate();

	function sampleGradient(stops: ColorStop[], normalized: number) {
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

	function computeShoreStrength(
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

	function sampleTerrainAppearance(
		normalized: number,
		normalY: number,
		normalX: number,
		normalZ: number,
	) {
		const baseColor = sampleGradient(terrainStops, normalized ** 0.92);
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
	}

	styleAttribution.textContent = activeTheme.styleDescription;

	function loadPackedTexture(dataUrl: string) {
		const loader = new THREE.TextureLoader();
		return loader.loadAsync(dataUrl).then((texture) => {
			texture.colorSpace = THREE.SRGBColorSpace;
			texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
			texture.wrapS = THREE.ClampToEdgeWrapping;
			texture.wrapT = THREE.ClampToEdgeWrapping;
			texture.needsUpdate = true;
			return texture;
		});
	}

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

	let pointer = 0;
	let uvPointer = 0;
	for (let row = 0; row < grid.height; row += 1) {
		const rowRatio = grid.height === 1 ? 0.5 : row / (grid.height - 1);
		const z = (rowRatio - 0.5) * spanZ;
		for (let column = 0; column < grid.width; column += 1) {
			const columnRatio = grid.width === 1 ? 0.5 : column / (grid.width - 1);
			const x = (columnRatio - 0.5) * spanX;
			const elevation = grid.elevations[row * grid.width + column];
			const y = (elevation - grid.minElevation) * exaggeration;

			positions[pointer] = x;
			positions[pointer + 1] = y;
			positions[pointer + 2] = z;
			uvs[uvPointer] = columnRatio;
			uvs[uvPointer + 1] = 1 - rowRatio;
			shoreStrengths[row * grid.width + column] = computeShoreStrength(
				column,
				row,
				grid.width,
				grid.height,
				waterMask,
				activeTheme.water.shoreWidth,
			);

			pointer += 3;
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
		const appearance = sampleTerrainAppearance(
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

	geometry.setAttribute("color", new THREE.BufferAttribute(terrainColors, 3));

	const terrainMaterial = new THREE.MeshStandardMaterial({
		vertexColors: true,
		roughness: activeTheme.terrain.roughness,
		metalness: activeTheme.terrain.metalness,
	});
	const terrainDepth = Math.max(
		90,
		elevationRange * exaggeration * 0.42,
		sceneSpan * 0.08,
	);
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
	scene.add(terrainSides);

	const bottomGeometry = new THREE.PlaneGeometry(spanX, spanZ);
	bottomGeometry.rotateX(-Math.PI / 2);
	const terrainBottom = new THREE.Mesh(
		bottomGeometry,
		new THREE.MeshStandardMaterial({
			color: activeTheme.terrain.bottomColor,
			roughness: 1,
			metalness: 0,
			side: THREE.DoubleSide,
		}),
	);
	terrainBottom.position.y = terrainBottomY;
	scene.add(terrainBottom);

	const terrain = new THREE.Mesh(geometry, terrainMaterial);
	scene.add(terrain);

	let waterOverlay: InstanceType<(typeof THREE)["Mesh"]> | null = null;
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
						const waterColor = sampleGradient(waterStops, normalized);
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
			const waterGeometry = new THREE.BufferGeometry();
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
			waterOverlay = new THREE.Mesh(
				waterGeometry,
				new THREE.MeshStandardMaterial({
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
				}),
			);
			scene.add(waterOverlay);
		}
	}

	if (activeTheme.useHikingMap) {
		if (payload.bakedHikingMap) {
			loadPackedTexture(payload.bakedHikingMap.dataUrl)
				.then((texture) => {
					geometry.setAttribute(
						"color",
						new THREE.BufferAttribute(hikingTextureBlendColors, 3),
					);
					geometry.attributes.color.needsUpdate = true;
					terrainMaterial.map = texture;
					terrainMaterial.needsUpdate = true;
					styleAttribution.innerHTML = `${OPEN_HIKING_ATTRIBUTION} <span>Baked ${escapeText(payload.bakedHikingMap?.resolution ?? "standard")} texture.</span>`;
				})
				.catch((error) => {
					console.warn(error);
					styleAttribution.textContent = OPEN_HIKING_FALLBACK;
				});
		} else {
			styleAttribution.textContent = OPEN_HIKING_FALLBACK;
		}
	}

	const trackRibbonWidth = THREE.MathUtils.clamp(sceneSpan * 0.012, 14, 60);
	const trackHeightOffset = THREE.MathUtils.clamp(sceneSpan * 0.0035, 12, 24);
	const trackGeometry = buildTrackRibbon(
		THREE,
		track,
		trackRibbonWidth,
		trackHeightOffset,
		grid.minElevation,
		exaggeration,
	);
	if (trackGeometry) {
		const trackColorBuffer = new Float32Array(track.length * 2 * 3);
		for (let index = 0; index < track.length; index += 1) {
			const normalized = THREE.MathUtils.clamp(
				(track[index].y - grid.minElevation) / elevationRange,
				0,
				1,
			);
			const trackColor = trackStops
				? sampleGradient(trackStops, normalized)
				: baseTrackColor.clone();
			const pointerBase = index * 6;
			trackColorBuffer[pointerBase] = trackColor.r;
			trackColorBuffer[pointerBase + 1] = trackColor.g;
			trackColorBuffer[pointerBase + 2] = trackColor.b;
			trackColorBuffer[pointerBase + 3] = trackColor.r;
			trackColorBuffer[pointerBase + 4] = trackColor.g;
			trackColorBuffer[pointerBase + 5] = trackColor.b;
		}
		trackGeometry.setAttribute(
			"color",
			new THREE.BufferAttribute(trackColorBuffer, 3),
		);
		const trackRibbon = new THREE.Mesh(
			trackGeometry,
			new THREE.MeshStandardMaterial({
				vertexColors: true,
				roughness: activeTheme.track.roughness,
				metalness: activeTheme.track.metalness,
				emissive: activeTheme.track.emissive,
				emissiveIntensity: activeTheme.track.emissiveIntensity,
				side: THREE.DoubleSide,
			}),
		);
		scene.add(trackRibbon);
	}

	const markerGeometry = new THREE.SphereGeometry(
		Math.max(6, Math.min(spanX, spanZ) * 0.008),
		18,
		18,
	);
	const startMaterial = new THREE.MeshStandardMaterial({
		color: activeTheme.markers.startColor,
		emissive: activeTheme.markers.ringEmissive,
		emissiveIntensity: 0.1,
	});
	const finishMaterial = new THREE.MeshStandardMaterial({
		color: activeTheme.markers.finishColor,
		emissive: activeTheme.markers.ringEmissive,
		emissiveIntensity: 0.12,
	});
	const start = track[0];
	const end = track[track.length - 1];

	const startMarker = new THREE.Mesh(markerGeometry, startMaterial);
	startMarker.position.set(
		start.x,
		(start.y - grid.minElevation) * exaggeration + trackHeightOffset + 10,
		start.z,
	);
	scene.add(startMarker);

	const endMarker = new THREE.Mesh(markerGeometry, finishMaterial);
	endMarker.position.set(
		end.x,
		(end.y - grid.minElevation) * exaggeration + trackHeightOffset + 10,
		end.z,
	);
	scene.add(endMarker);

	const ringGeometry = new THREE.RingGeometry(
		Math.max(10, Math.min(spanX, spanZ) * 0.01),
		Math.max(16, Math.min(spanX, spanZ) * 0.016),
		48,
	);
	const ringMaterial = new THREE.MeshStandardMaterial({
		color: activeTheme.markers.ringColor,
		emissive: activeTheme.markers.ringEmissive,
		emissiveIntensity: 0.45,
		transparent: true,
		opacity: activeTheme.markers.ringOpacity,
		side: THREE.DoubleSide,
		roughness: 0.32,
		metalness: 0.12,
	});
	const ring = new THREE.Mesh(ringGeometry, ringMaterial);
	ring.rotation.x = -Math.PI / 2;
	ring.position.y = 2;
	scene.add(ring);

	function resize(): void {
		const width = canvas.clientWidth || window.innerWidth;
		const height = canvas.clientHeight || window.innerHeight;
		renderer.setSize(width, height, false);
		camera.aspect = width / Math.max(height, 1);
		camera.updateProjectionMatrix();
	}

	let lastFrameTime = performance.now();

	function animate(frameTime: number): void {
		requestAnimationFrame(animate);
		const deltaSeconds = Math.max(0, (frameTime - lastFrameTime) / 1000);
		lastFrameTime = frameTime;
		keyboardControls.applyKeyboardMotion(deltaSeconds);
		const pulse =
			0.72 +
			0.28 *
				(0.5 +
					0.5 *
						Math.sin(frameTime * 0.001 * activeTheme.markers.ringPulseSpeed));
		ring.rotation.z += 0.0025;
		ringMaterial.opacity = THREE.MathUtils.clamp(
			activeTheme.markers.ringOpacity * pulse,
			0.08,
			0.95,
		);
		ringMaterial.emissiveIntensity = 0.28 + pulse * 0.5;
		if (waterOverlay?.material instanceof THREE.MeshStandardMaterial) {
			waterOverlay.material.emissiveIntensity =
				activeTheme.water.specularStrength * 0.08 * pulse;
		}
		controls.update();
		renderer.render(scene, camera);
	}

	window.addEventListener("resize", resize);
	resize();
	animate();
}
