import type * as ThreeType from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { BoundKeyboardControls } from "./controls.ts";
import type { ViewerTheme } from "./themes.ts";

export function bindViewportResize(
	canvas: HTMLCanvasElement,
	renderer: ThreeType.WebGLRenderer,
	camera: ThreeType.PerspectiveCamera,
): () => void {
	function resize(): void {
		const width = canvas.clientWidth || window.innerWidth;
		const height = canvas.clientHeight || window.innerHeight;
		renderer.setSize(width, height, false);
		camera.aspect = width / Math.max(height, 1);
		camera.updateProjectionMatrix();
	}

	window.addEventListener("resize", resize);
	resize();

	return () => {
		window.removeEventListener("resize", resize);
	};
}

export function startViewerLoop(
	THREE: typeof ThreeType,
	options: {
		activeTheme: ViewerTheme;
		camera: ThreeType.PerspectiveCamera;
		controls: OrbitControls;
		keyboardControls: BoundKeyboardControls;
		renderer: ThreeType.WebGLRenderer;
		ring: ThreeType.Mesh;
		ringMaterial: ThreeType.MeshStandardMaterial;
		scene: ThreeType.Scene;
		waterMaterial: ThreeType.MeshStandardMaterial | null;
	},
): () => void {
	const {
		activeTheme,
		camera,
		controls,
		keyboardControls,
		renderer,
		ring,
		ringMaterial,
		scene,
		waterMaterial,
	} = options;
	let animationFrameId = 0;
	let disposed = false;
	let lastFrameTime = performance.now();

	function animate(frameTime: number): void {
		if (disposed) {
			return;
		}

		animationFrameId = requestAnimationFrame(animate);
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
		if (waterMaterial) {
			waterMaterial.emissiveIntensity =
				activeTheme.water.specularStrength * 0.08 * pulse;
		}

		controls.update();
		renderer.render(scene, camera);
	}

	animationFrameId = requestAnimationFrame(animate);

	return () => {
		disposed = true;
		cancelAnimationFrame(animationFrameId);
	};
}
