import type * as ThreeType from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type KeyboardControlsOptions = {
	THREE: typeof ThreeType;
	camera: ThreeType.PerspectiveCamera;
	controls: OrbitControls;
	canvas: HTMLCanvasElement;
	sceneSpan: number;
	minCameraDistance: number;
	maxCameraDistance: number;
};

export function bindKeyboardControls({
	THREE,
	camera,
	controls,
	canvas,
	sceneSpan,
	minCameraDistance,
	maxCameraDistance,
}: KeyboardControlsOptions): {
	applyKeyboardMotion(deltaSeconds: number): void;
} {
	const pressedKeys = new Set<string>();
	const keyboardVector = new THREE.Vector3();
	const orbitOffset = new THREE.Vector3();
	const orbitForward = new THREE.Vector3();
	const orbitRight = new THREE.Vector3();
	const orbitSpherical = new THREE.Spherical();

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

	canvas.addEventListener("pointerdown", () => canvas.focus());
	canvas.addEventListener("keydown", handleKeyboardDown);
	canvas.addEventListener("keyup", handleKeyboardUp);
	canvas.addEventListener("blur", clearPressedKeys);
	window.addEventListener("blur", clearPressedKeys);

	return {
		applyKeyboardMotion(deltaSeconds: number): void {
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
		},
	};
}
