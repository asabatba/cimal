import type * as ThreeType from "three";
import { THREE_JS_VERSION } from "../constants.ts";
import { OPEN_HIKING_ATTRIBUTION, OPEN_HIKING_FALLBACK } from "../hikingMap.ts";
import type { BakedImagery, TerrainPayload } from "../types.ts";
import { WORLDCOVER_ATTRIBUTION, WORLDCOVER_FALLBACK } from "../worldcover.ts";
import { bindKeyboardControls } from "./controls.ts";
import { escapeText } from "./dom.ts";
import { renderViewerShell } from "./layout.ts";
import { bindViewportResize, startViewerLoop } from "./lifecycle.ts";
import { createTerrainLayer } from "./terrainLayer.ts";
import type { ViewerTheme } from "./themes.ts";
import { createTrackLayer } from "./trackLayer.ts";

export async function renderTerrainViewer(
	app: HTMLDivElement,
	payload: TerrainPayload,
	activeTheme: ViewerTheme,
): Promise<() => void> {
	const [THREE, { OrbitControls }] = await Promise.all([
		import(`https://esm.sh/three@${THREE_JS_VERSION}`),
		import(
			`https://esm.sh/three@${THREE_JS_VERSION}/examples/jsm/controls/OrbitControls.js`
		),
	]);

	const { warning, bounds, metersPerDegree, grid } = payload;
	const spanX = (bounds.maxLon - bounds.minLon) * metersPerDegree.lon;
	const spanZ = (bounds.maxLat - bounds.minLat) * metersPerDegree.lat;
	const sceneSpan = Math.max(spanX, spanZ);
	const elevationRange = Math.max(1, grid.maxElevation - grid.minElevation);
	const fogDensity = THREE.MathUtils.clamp(
		0.075 / Math.max(sceneSpan, 1),
		0.000045,
		0.00014,
	);
	const { canvas, styleAttribution } = renderViewerShell(app, { warning });

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
	controls.target.set(0, elevationRange * 0.18, 0);
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

	const terrainLayer = createTerrainLayer(THREE, payload, activeTheme, {
		spanX,
		spanZ,
		sceneSpan,
		elevationRange,
	});
	const trackLayer = createTrackLayer(THREE, payload, activeTheme, {
		spanX,
		spanZ,
		sceneSpan,
		elevationRange,
	});
	scene.add(...terrainLayer.objects, ...trackLayer.objects);

	styleAttribution.textContent = activeTheme.styleDescription;

	let loadedTexture: ThreeType.Texture | null = null;
	let disposed = false;

	if (activeTheme.imageryKind) {
		if (payload.bakedImagery?.kind === activeTheme.imageryKind) {
			loadPackedTexture(THREE, renderer, payload.bakedImagery)
				.then((texture) => {
					if (disposed) {
						texture.dispose();
						return;
					}

					loadedTexture?.dispose();
					loadedTexture = texture;
					terrainLayer.applyBakedTexture(texture);
					styleAttribution.innerHTML = buildImageryAttribution(
						payload.bakedImagery,
					);
				})
				.catch((error) => {
					console.warn(error);
					styleAttribution.textContent = fallbackImageryMessage(
						activeTheme.imageryKind,
					);
				});
		} else {
			styleAttribution.textContent = fallbackImageryMessage(
				activeTheme.imageryKind,
			);
		}
	}

	const cleanupResize = bindViewportResize(canvas, renderer, camera);
	const stopViewerLoop = startViewerLoop(THREE, {
		activeTheme,
		camera,
		controls,
		keyboardControls,
		renderer,
		ring: trackLayer.ring,
		ringMaterial: trackLayer.ringMaterial,
		scene,
		waterMaterial: terrainLayer.waterMaterial,
	});

	return () => {
		if (disposed) {
			return;
		}

		disposed = true;
		stopViewerLoop();
		cleanupResize();
		keyboardControls.destroy();
		controls.dispose();
		loadedTexture?.dispose();
		terrainLayer.dispose();
		trackLayer.dispose();
		scene.clear();
		renderer.dispose();
	};
}

function loadPackedTexture(
	THREE: typeof ThreeType,
	renderer: ThreeType.WebGLRenderer,
	imagery: BakedImagery,
): Promise<ThreeType.Texture> {
	const loader = new THREE.TextureLoader();
	return loader.loadAsync(imagery.dataUrl).then((texture) => {
		texture.colorSpace = THREE.SRGBColorSpace;
		if (imagery.kind === "worldcover") {
			texture.magFilter = THREE.NearestFilter;
			texture.minFilter = THREE.NearestFilter;
			texture.generateMipmaps = false;
			texture.anisotropy = 1;
		} else {
			texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
		}
		texture.wrapS = THREE.ClampToEdgeWrapping;
		texture.wrapT = THREE.ClampToEdgeWrapping;
		texture.needsUpdate = true;
		return texture;
	});
}

function buildImageryAttribution(imagery: BakedImagery): string {
	if (imagery.kind === "worldcover") {
		return `${WORLDCOVER_ATTRIBUTION} <span>Baked ${escapeText(imagery.sourceVersion)} texture.</span>`;
	}

	return `${OPEN_HIKING_ATTRIBUTION} <span>Baked ${escapeText(imagery.resolution ?? "standard")} texture.</span>`;
}

function fallbackImageryMessage(kind: BakedImagery["kind"]): string {
	return kind === "worldcover" ? WORLDCOVER_FALLBACK : OPEN_HIKING_FALLBACK;
}
