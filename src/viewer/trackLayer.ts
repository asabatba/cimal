import type * as ThreeType from "three";
import type { TerrainPayload } from "../types.ts";
import { resolveColorStops, sampleGradient } from "./colors.ts";
import { buildTrackRibbon } from "./geometry.ts";
import type { ViewerTheme } from "./themes.ts";

type TrackLayer = {
	objects: ThreeType.Object3D[];
	ring: ThreeType.Mesh;
	ringMaterial: ThreeType.MeshStandardMaterial;
	dispose(): void;
};

export function createTrackLayer(
	THREE: typeof ThreeType,
	payload: TerrainPayload,
	activeTheme: ViewerTheme,
	options: {
		spanX: number;
		spanZ: number;
		sceneSpan: number;
		elevationRange: number;
	},
): TrackLayer {
	const { track, grid } = payload;
	const { spanX, spanZ, sceneSpan, elevationRange } = options;
	const trackStops = activeTheme.track.altitudeTintStops
		? resolveColorStops(THREE, activeTheme.track.altitudeTintStops)
		: null;
	const baseTrackColor = new THREE.Color(activeTheme.track.baseColor);
	const objects: ThreeType.Object3D[] = [];

	const trackRibbonWidth = THREE.MathUtils.clamp(sceneSpan * 0.012, 14, 60);
	const trackHeightOffset = THREE.MathUtils.clamp(sceneSpan * 0.0035, 12, 24);
	const trackGeometry = buildTrackRibbon(
		THREE,
		track,
		trackRibbonWidth,
		trackHeightOffset,
		grid.minElevation,
	);

	let trackMaterial: ThreeType.MeshStandardMaterial | null = null;
	if (trackGeometry) {
		const trackColorBuffer = new Float32Array(track.length * 2 * 3);
		for (let index = 0; index < track.length; index += 1) {
			const normalized = THREE.MathUtils.clamp(
				(track[index].y - grid.minElevation) / elevationRange,
				0,
				1,
			);
			const trackColor = trackStops
				? sampleGradient(THREE, trackStops, normalized)
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
		trackMaterial = new THREE.MeshStandardMaterial({
			vertexColors: true,
			roughness: activeTheme.track.roughness,
			metalness: activeTheme.track.metalness,
			emissive: activeTheme.track.emissive,
			emissiveIntensity: activeTheme.track.emissiveIntensity,
			side: THREE.DoubleSide,
		});
		objects.push(new THREE.Mesh(trackGeometry, trackMaterial));
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
		start.y - grid.minElevation + trackHeightOffset + 10,
		start.z,
	);
	objects.push(startMarker);

	const endMarker = new THREE.Mesh(markerGeometry, finishMaterial);
	endMarker.position.set(
		end.x,
		end.y - grid.minElevation + trackHeightOffset + 10,
		end.z,
	);
	objects.push(endMarker);

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
	objects.push(ring);

	return {
		objects,
		ring,
		ringMaterial,
		dispose() {
			trackGeometry?.dispose();
			trackMaterial?.dispose();
			markerGeometry.dispose();
			startMaterial.dispose();
			finishMaterial.dispose();
			ringGeometry.dispose();
			ringMaterial.dispose();
		},
	};
}
