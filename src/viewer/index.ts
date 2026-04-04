import { COPERNICUS_S3_ROOT, THREE_JS_VERSION } from "../constants.ts";
import { OPEN_HIKING_ATTRIBUTION, OPEN_HIKING_FALLBACK } from "../hikingMap.ts";
import type {
	ErrorPayload,
	TerrainPayload,
	ViewerConfig,
	ViewerStyle,
} from "../types.ts";
import { DEFAULT_VIEWER_CONFIG } from "../viewerConfig.ts";

type ViewerTheme = {
	cssVars: Record<string, string>;
	styleDescription: string;
	useHikingMap: boolean;
	useWaterTint: boolean;
	fogColor: number;
	hemisphereSky: number;
	hemisphereGround: number;
	hemisphereIntensity: number;
	sunColor: number;
	sunIntensity: number;
	terrainStops: Array<{ t: number; color: number }>;
	waterColorLow: number;
	waterColorHigh: number;
	sideColor: number;
	bottomColor: number;
	terrainRoughness: number;
	terrainMetalness: number;
	trackColor: number;
	trackEmissive: number;
	trackEmissiveIntensity: number;
	startColor: number;
	finishColor: number;
	ringColor: number;
	ringOpacity: number;
};

function escapeText(value: string): string {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

function requireElement<T extends Element>(
	id: string,
	constructor: { new (): T },
): T {
	const element = document.getElementById(id);
	if (!(element instanceof constructor)) {
		throw new Error(`Missing required element #${id}.`);
	}
	return element;
}

const payloadScript = requireElement("payload", HTMLScriptElement);
const viewerConfigScript = requireElement("viewer-config", HTMLScriptElement);
const app = requireElement("app", HTMLDivElement);

const payload = JSON.parse(payloadScript.textContent ?? "null") as
	| ErrorPayload
	| TerrainPayload;
const viewerConfig = {
	...DEFAULT_VIEWER_CONFIG,
	...(JSON.parse(
		viewerConfigScript.textContent ?? JSON.stringify(DEFAULT_VIEWER_CONFIG),
	) as Partial<ViewerConfig>),
} satisfies ViewerConfig;
const viewerStyle = viewerConfig.style;

const styleThemes: Record<ViewerStyle, ViewerTheme> = {
	classic: {
		cssVars: {
			"--bg-1": "#0d151b",
			"--bg-2": "#1d2c38",
			"--card": "rgba(11, 18, 23, 0.78)",
			"--card-border": "rgba(255, 255, 255, 0.12)",
			"--accent": "#ff7b32",
			"--accent-soft": "#ffd08f",
			"--text": "#eaf2f5",
			"--muted": "#9db0bb",
		},
		styleDescription: "Style: Classic relief tint.",
		useHikingMap: false,
		useWaterTint: true,
		fogColor: 0x102029,
		hemisphereSky: 0xdaf2ff,
		hemisphereGround: 0x1b272b,
		hemisphereIntensity: 1.2,
		sunColor: 0xfff1d6,
		sunIntensity: 1.2,
		terrainStops: [
			{ t: 0.0, color: 0x2f5a38 },
			{ t: 0.24, color: 0x5f8148 },
			{ t: 0.52, color: 0xae8d5a },
			{ t: 0.78, color: 0x757982 },
			{ t: 1.0, color: 0xe6e2d9 },
		],
		waterColorLow: 0x1e5a85,
		waterColorHigh: 0x5dbaf2,
		sideColor: 0x544d42,
		bottomColor: 0x403a31,
		terrainRoughness: 0.94,
		terrainMetalness: 0.04,
		trackColor: 0xff7b32,
		trackEmissive: 0x4a220c,
		trackEmissiveIntensity: 0.35,
		startColor: 0x9fe870,
		finishColor: 0xffd35a,
		ringColor: 0xffffff,
		ringOpacity: 0.18,
	},
	"hiking-map": {
		cssVars: {
			"--bg-1": "#0f1718",
			"--bg-2": "#21353a",
			"--card": "rgba(12, 20, 20, 0.78)",
			"--card-border": "rgba(255, 255, 255, 0.12)",
			"--accent": "#f18f43",
			"--accent-soft": "#ffe2a7",
			"--text": "#eaf2f5",
			"--muted": "#a2b7b0",
		},
		styleDescription: "Imagery: baked OpenHikingMap texture.",
		useHikingMap: true,
		useWaterTint: false,
		fogColor: 0x112326,
		hemisphereSky: 0xe0f0f6,
		hemisphereGround: 0x22302b,
		hemisphereIntensity: 1.25,
		sunColor: 0xfff2d2,
		sunIntensity: 1.25,
		terrainStops: [
			{ t: 0.0, color: 0x2f5a38 },
			{ t: 0.24, color: 0x5f8148 },
			{ t: 0.52, color: 0xae8d5a },
			{ t: 0.78, color: 0x757982 },
			{ t: 1.0, color: 0xe6e2d9 },
		],
		waterColorLow: 0x1e5a85,
		waterColorHigh: 0x5dbaf2,
		sideColor: 0x544d42,
		bottomColor: 0x403a31,
		terrainRoughness: 0.94,
		terrainMetalness: 0.04,
		trackColor: 0xff7b32,
		trackEmissive: 0x4a220c,
		trackEmissiveIntensity: 0.35,
		startColor: 0x9fe870,
		finishColor: 0xffd35a,
		ringColor: 0xffffff,
		ringOpacity: 0.18,
	},
	vaporwave: {
		cssVars: {
			"--bg-1": "#120621",
			"--bg-2": "#471565",
			"--card": "rgba(23, 10, 41, 0.76)",
			"--card-border": "rgba(255, 255, 255, 0.18)",
			"--accent": "#ff5fd1",
			"--accent-soft": "#7efcff",
			"--text": "#f8edff",
			"--muted": "#d3a9ea",
		},
		styleDescription: "Style: Vaporwave flavour.",
		useHikingMap: false,
		useWaterTint: true,
		fogColor: 0x1b0b2f,
		hemisphereSky: 0x8acfff,
		hemisphereGround: 0x25083b,
		hemisphereIntensity: 1.35,
		sunColor: 0xff8dd8,
		sunIntensity: 1.45,
		terrainStops: [
			{ t: 0.0, color: 0x16113f },
			{ t: 0.22, color: 0x4a1f7a },
			{ t: 0.48, color: 0xff4fd8 },
			{ t: 0.76, color: 0xffa26b },
			{ t: 1.0, color: 0x7efcff },
		],
		waterColorLow: 0x187bff,
		waterColorHigh: 0x72f7ff,
		sideColor: 0x31164f,
		bottomColor: 0x190826,
		terrainRoughness: 0.86,
		terrainMetalness: 0.08,
		trackColor: 0x7efcff,
		trackEmissive: 0x2f8cff,
		trackEmissiveIntensity: 0.55,
		startColor: 0x7efcff,
		finishColor: 0xffe36e,
		ringColor: 0xff5fd1,
		ringOpacity: 0.3,
	},
};

const activeTheme = styleThemes[viewerStyle] ?? styleThemes.classic;
for (const [name, value] of Object.entries(activeTheme.cssVars)) {
	document.documentElement.style.setProperty(name, value);
}

if ("message" in payload) {
	app.innerHTML = `
    <div class="error-shell">
      <article class="error-card">
        <h1>${escapeText(payload.title)}</h1>
        <p>${escapeText(payload.message)}</p>
        ${
					payload.details
						? `<p><code>${escapeText(payload.details)}</code></p>`
						: ""
				}
        <p>Use a <code>.cimal</code> pack path in the widget body, for example:</p>
        <p><code>Library/Cimal/track.cimal</code></p>
      </article>
    </div>
  `;
} else {
	await renderTerrainViewer(payload, activeTheme);
}

async function renderTerrainViewer(
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
	const pressedKeys = new Set<string>();
	const keyboardVector = new THREE.Vector3();
	const orbitOffset = new THREE.Vector3();
	const orbitForward = new THREE.Vector3();
	const orbitRight = new THREE.Vector3();
	const orbitSpherical = new THREE.Spherical();
	const minCameraDistance = 80;
	const maxCameraDistance = Math.max(sceneSpan * 4, minCameraDistance * 6);
	controls.minDistance = minCameraDistance;
	controls.maxDistance = maxCameraDistance;

	function isKeyboardAction(code: string): boolean {
		return (
			code === "ArrowLeft" ||
			code === "ArrowRight" ||
			code === "ArrowUp" ||
			code === "ArrowDown" ||
			code === "KeyW" ||
			code === "KeyA" ||
			code === "KeyS" ||
			code === "KeyD" ||
			code === "KeyR" ||
			code === "KeyF"
		);
	}

	function clearPressedKeys(): void {
		pressedKeys.clear();
	}

	function handleKeyboardDown(event: KeyboardEvent): void {
		if (
			event.defaultPrevented ||
			event.metaKey ||
			event.ctrlKey ||
			event.altKey
		) {
			return;
		}

		if (!isKeyboardAction(event.code)) {
			return;
		}

		pressedKeys.add(event.code);
		event.preventDefault();
	}

	function handleKeyboardUp(event: KeyboardEvent): void {
		pressedKeys.delete(event.code);
		if (isKeyboardAction(event.code)) {
			event.preventDefault();
		}
	}

	function applyKeyboardMotion(deltaSeconds: number): void {
		if (!pressedKeys.size || document.activeElement !== canvas) {
			return;
		}

		const clampedDelta = Math.min(deltaSeconds, 1 / 20);
		if (clampedDelta <= 0) {
			return;
		}

		const orbitSpeed = 1.65;
		const panSpeed = Math.max(90, sceneSpan * 0.55);
		const zoomSpeed = Math.max(140, sceneSpan * 0.95);
		let changed = false;

		if (
			pressedKeys.has("ArrowLeft") ||
			pressedKeys.has("ArrowRight") ||
			pressedKeys.has("ArrowUp") ||
			pressedKeys.has("ArrowDown")
		) {
			orbitOffset.subVectors(camera.position, controls.target);
			orbitSpherical.setFromVector3(orbitOffset);

			if (pressedKeys.has("ArrowLeft")) {
				orbitSpherical.theta += orbitSpeed * clampedDelta;
				changed = true;
			}
			if (pressedKeys.has("ArrowRight")) {
				orbitSpherical.theta -= orbitSpeed * clampedDelta;
				changed = true;
			}
			if (pressedKeys.has("ArrowUp")) {
				orbitSpherical.phi = Math.max(
					controls.minPolarAngle + 0.01,
					orbitSpherical.phi - orbitSpeed * 0.72 * clampedDelta,
				);
				changed = true;
			}
			if (pressedKeys.has("ArrowDown")) {
				orbitSpherical.phi = Math.min(
					controls.maxPolarAngle - 0.01,
					orbitSpherical.phi + orbitSpeed * 0.72 * clampedDelta,
				);
				changed = true;
			}

			orbitSpherical.makeSafe();
			orbitOffset.setFromSpherical(orbitSpherical);
			camera.position.copy(controls.target).add(orbitOffset);
		}

		if (
			pressedKeys.has("KeyW") ||
			pressedKeys.has("KeyA") ||
			pressedKeys.has("KeyS") ||
			pressedKeys.has("KeyD")
		) {
			camera.getWorldDirection(orbitForward);
			orbitForward.y = 0;
			if (orbitForward.lengthSq() < 1e-6) {
				orbitForward.set(0, 0, -1);
			} else {
				orbitForward.normalize();
			}

			orbitRight.crossVectors(orbitForward, camera.up);
			if (orbitRight.lengthSq() < 1e-6) {
				orbitRight.set(-1, 0, 0);
			} else {
				orbitRight.normalize();
			}

			keyboardVector.set(0, 0, 0);
			if (pressedKeys.has("KeyW")) {
				keyboardVector.add(orbitForward);
			}
			if (pressedKeys.has("KeyS")) {
				keyboardVector.sub(orbitForward);
			}
			if (pressedKeys.has("KeyA")) {
				keyboardVector.sub(orbitRight);
			}
			if (pressedKeys.has("KeyD")) {
				keyboardVector.add(orbitRight);
			}

			if (keyboardVector.lengthSq() > 0) {
				keyboardVector.normalize().multiplyScalar(panSpeed * clampedDelta);
				camera.position.add(keyboardVector);
				controls.target.add(keyboardVector);
				changed = true;
			}
		}

		if (pressedKeys.has("KeyR") || pressedKeys.has("KeyF")) {
			orbitOffset.subVectors(camera.position, controls.target);
			const currentDistance = orbitOffset.length();
			const zoomDirection =
				(pressedKeys.has("KeyF") ? 1 : 0) - (pressedKeys.has("KeyR") ? 1 : 0);
			const nextDistance = THREE.MathUtils.clamp(
				currentDistance + zoomDirection * zoomSpeed * clampedDelta,
				minCameraDistance,
				maxCameraDistance,
			);

			if (Math.abs(nextDistance - currentDistance) > 0.001) {
				orbitOffset.setLength(nextDistance);
				camera.position.copy(controls.target).add(orbitOffset);
				changed = true;
			}
		}

		if (changed) {
			camera.updateMatrixWorld();
		}
	}

	canvas.addEventListener("pointerdown", () => canvas.focus());
	canvas.addEventListener("keydown", handleKeyboardDown);
	canvas.addEventListener("keyup", handleKeyboardUp);
	canvas.addEventListener("blur", clearPressedKeys);
	window.addEventListener("blur", clearPressedKeys);

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
	const WATER_NEIGHBOR_TOLERANCE = 0.8;
	const WATER_COMPONENT_RANGE_MAX = 1.2;
	const WATER_MIN_COMPONENT_CELLS = 36;
	const WATER_MIN_COMPONENT_RATIO = 0.015;

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

	function detectWaterMask(
		width: number,
		height: number,
		elevations: number[],
	): Uint8Array {
		const cellCount = width * height;
		const waterMask = new Uint8Array(cellCount);
		if (!activeTheme.useWaterTint || cellCount === 0) {
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
				Math.abs(neighborElevation - currentElevation) >
				WATER_NEIGHBOR_TOLERANCE
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

	function buildTrackRibbon(
		points: TerrainPayload["track"],
		width: number,
		heightOffset: number,
	) {
		if (points.length < 2) {
			return null;
		}

		const halfWidth = width / 2;
		const up = new THREE.Vector3(0, 1, 0);
		const centerPoints = points.map(
			(point) =>
				new THREE.Vector3(
					point.x,
					(point.y - grid.minElevation) * exaggeration + heightOffset,
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

	function buildTerrainSideGeometry(
		topPositions: Float32Array,
		width: number,
		height: number,
		bottomY: number,
	) {
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

	const geometry = new THREE.BufferGeometry();
	const vertexCount = grid.width * grid.height;
	const positions = new Float32Array(vertexCount * 3);
	const terrainColors = new Float32Array(vertexCount * 3);
	const hikingTextureBlendColors = new Float32Array(vertexCount * 3);
	const uvs = new Float32Array(vertexCount * 2);
	const indices: number[] = [];
	const waterMask = detectWaterMask(grid.width, grid.height, grid.elevations);

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
		track,
		trackRibbonWidth,
		trackHeightOffset,
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
		applyKeyboardMotion(deltaSeconds);
		ring.rotation.z += 0.0025;
		controls.update();
		renderer.render(scene, camera);
	}

	window.addEventListener("resize", resize);
	resize();
	animate();
}
