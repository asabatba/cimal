import { COPERNICUS_S3_ROOT, THREE_JS_VERSION } from "../constants.ts";
import { OPEN_HIKING_ATTRIBUTION, OPEN_HIKING_FALLBACK } from "../hikingMap.ts";
import type { TerrainPayload } from "../types.ts";
import { bindKeyboardControls } from "./controls.ts";
import { escapeText, requireElement } from "./dom.ts";
import { buildTerrainSideGeometry, buildTrackRibbon } from "./geometry.ts";
import type { ViewerTheme } from "./themes.ts";
import { detectWaterMask } from "./water.ts";

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

	const terrainStops = activeTheme.terrainStops.map((stop) => ({
		t: stop.t,
		color: new THREE.Color(stop.color),
	}));

	function sampleTerrainColor(normalized: number) {
		if (normalized <= terrainStops[0].t) {
			return terrainStops[0].color.clone();
		}

		for (let index = 1; index < terrainStops.length; index += 1) {
			const previous = terrainStops[index - 1];
			const current = terrainStops[index];
			if (normalized <= current.t) {
				const localT =
					(normalized - previous.t) / Math.max(0.0001, current.t - previous.t);
				return previous.color
					.clone()
					.lerp(current.color, THREE.MathUtils.smoothstep(localT, 0, 1));
			}
		}

		return terrainStops[terrainStops.length - 1].color.clone();
	}

	const waterLowColor = new THREE.Color(activeTheme.waterColorLow);
	const waterHighColor = new THREE.Color(activeTheme.waterColorHigh);

	function sampleWaterColor(normalized: number) {
		const waterT = THREE.MathUtils.smoothstep(normalized, 0, 1);
		return waterLowColor.clone().lerp(waterHighColor, waterT);
	}

	function sampleSurfaceColor(normalized: number, isWater: boolean) {
		if (isWater && activeTheme.useWaterTint) {
			return sampleWaterColor(normalized);
		}

		return sampleTerrainColor(normalized ** 0.92);
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

	let pointer = 0;
	let uvPointer = 0;
	for (let row = 0; row < grid.height; row += 1) {
		const rowRatio = grid.height === 1 ? 0.5 : row / (grid.height - 1);
		const z = (rowRatio - 0.5) * spanZ;
		for (let column = 0; column < grid.width; column += 1) {
			const columnRatio = grid.width === 1 ? 0.5 : column / (grid.width - 1);
			const x = (columnRatio - 0.5) * spanX;
			const elevation = grid.elevations[row * grid.width + column];
			const normalized = (elevation - grid.minElevation) / elevationRange;
			const y = (elevation - grid.minElevation) * exaggeration;

			positions[pointer] = x;
			positions[pointer + 1] = y;
			positions[pointer + 2] = z;

			const fallbackColor = sampleSurfaceColor(
				normalized,
				waterMask[row * grid.width + column] === 1,
			);
			terrainColors[pointer] = fallbackColor.r;
			terrainColors[pointer + 1] = fallbackColor.g;
			terrainColors[pointer + 2] = fallbackColor.b;

			const reliefShade = THREE.MathUtils.lerp(0.82, 0.98, normalized ** 0.85);
			hikingTextureBlendColors[pointer] = reliefShade;
			hikingTextureBlendColors[pointer + 1] = reliefShade;
			hikingTextureBlendColors[pointer + 2] = reliefShade;

			uvs[uvPointer] = columnRatio;
			uvs[uvPointer + 1] = 1 - rowRatio;

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
	geometry.setAttribute("color", new THREE.BufferAttribute(terrainColors, 3));
	geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
	geometry.computeVertexNormals();

	const terrainMaterial = new THREE.MeshStandardMaterial({
		vertexColors: true,
		roughness: activeTheme.terrainRoughness,
		metalness: activeTheme.terrainMetalness,
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
		color: activeTheme.sideColor,
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
			color: activeTheme.bottomColor,
			roughness: 1,
			metalness: 0,
			side: THREE.DoubleSide,
		}),
	);
	terrainBottom.position.y = terrainBottomY;
	scene.add(terrainBottom);

	const terrain = new THREE.Mesh(geometry, terrainMaterial);
	scene.add(terrain);

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
		const trackRibbon = new THREE.Mesh(
			trackGeometry,
			new THREE.MeshStandardMaterial({
				color: activeTheme.trackColor,
				roughness: 0.42,
				metalness: 0.05,
				emissive: activeTheme.trackEmissive,
				emissiveIntensity: activeTheme.trackEmissiveIntensity,
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
		color: activeTheme.startColor,
	});
	const finishMaterial = new THREE.MeshStandardMaterial({
		color: activeTheme.finishColor,
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
	const ring = new THREE.Mesh(
		ringGeometry,
		new THREE.MeshBasicMaterial({
			color: activeTheme.ringColor,
			transparent: true,
			opacity: activeTheme.ringOpacity,
			side: THREE.DoubleSide,
		}),
	);
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
		ring.rotation.z += 0.0025;
		controls.update();
		renderer.render(scene, camera);
	}

	window.addEventListener("resize", resize);
	resize();
	animate();
}
