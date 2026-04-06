import type { BakedImageryKind, TerrainShape, ViewerStyle } from "../types.ts";

export type ColorStop = { t: number; color: number };

export type ThemeTerrain = {
	elevationStops: ColorStop[];
	slopeTint: {
		low: number;
		high: number;
		strength: number;
		curve: number;
	};
	aspectTint: {
		cool: number;
		warm: number;
		strength: number;
	};
	reliefShading: {
		shadow: number;
		highlight: number;
		strength: number;
		curve: number;
	};
	sideColor: number;
	bottomColor: number;
	roughness: number;
	metalness: number;
};

export type ThemeWater = {
	surfaceStops: ColorStop[];
	specularStrength: number;
	opacity: number;
	shoreTint?: number;
	shoreWidth: number;
};

export type ThemeTrack = {
	baseColor: number;
	emissive: number;
	emissiveIntensity: number;
	roughness: number;
	metalness: number;
	altitudeTintStops?: ColorStop[];
};

export type ThemeMarkers = {
	startColor: number;
	finishColor: number;
	ringColor: number;
	ringOpacity: number;
	ringEmissive: number;
	ringPulseSpeed: number;
};

export type ThemeHud = {
	warningBackground: string;
	warningBorder: string;
	warningText: string;
	shadowColor: string;
	atmosphereGlow: string;
};

export type ViewerTheme = {
	cssVars: Record<string, string>;
	styleDescription: string;
	imageryKind?: BakedImageryKind;
	defaultTerrainShape?: TerrainShape;
	wireframe?: boolean;
	useWaterTint: boolean;
	fogColor: number;
	hemisphereSky: number;
	hemisphereGround: number;
	hemisphereIntensity: number;
	sunColor: number;
	sunIntensity: number;
	terrain: ThemeTerrain;
	water: ThemeWater;
	track: ThemeTrack;
	markers: ThemeMarkers;
	hud: ThemeHud;
};

export type ThemeConfig = Omit<ViewerTheme, "cssVars"> & {
	cssVars: Record<string, string>;
};

export function createTheme(config: ThemeConfig): ViewerTheme {
	return {
		...config,
		cssVars: {
			...config.cssVars,
			"--warning-bg": config.hud.warningBackground,
			"--warning-border": config.hud.warningBorder,
			"--warning-text": config.hud.warningText,
			"--shadow-color": config.hud.shadowColor,
			"--atmosphere-glow": config.hud.atmosphereGlow,
		},
	};
}

export function terrainDefaults(
	overrides: Partial<ThemeTerrain>,
): ThemeTerrain {
	const slopeTint = {
		low: 0x213626,
		high: 0xf1dcc0,
		strength: 0.18,
		curve: 1.25,
		...overrides.slopeTint,
	};
	const aspectTint = {
		cool: 0x6ca7d8,
		warm: 0xe8b36a,
		strength: 0.08,
		...overrides.aspectTint,
	};
	const reliefShading = {
		shadow: 0.84,
		highlight: 1.02,
		strength: 0.45,
		curve: 0.9,
		...overrides.reliefShading,
	};

	return {
		elevationStops: [
			{ t: 0.0, color: 0x2f5a38 },
			{ t: 0.24, color: 0x5f8148 },
			{ t: 0.52, color: 0xae8d5a },
			{ t: 0.78, color: 0x757982 },
			{ t: 1.0, color: 0xe6e2d9 },
		],
		sideColor: 0x544d42,
		bottomColor: 0x403a31,
		roughness: 0.94,
		metalness: 0.04,
		...overrides,
		slopeTint,
		aspectTint,
		reliefShading,
	};
}

export function waterDefaults(overrides: Partial<ThemeWater>): ThemeWater {
	return {
		surfaceStops: [
			{ t: 0.0, color: 0x1e5a85 },
			{ t: 1.0, color: 0x5dbaf2 },
		],
		specularStrength: 0.42,
		opacity: 0.62,
		shoreTint: 0xaee6ff,
		shoreWidth: 2,
		...overrides,
	};
}

export function trackDefaults(overrides: Partial<ThemeTrack>): ThemeTrack {
	return {
		baseColor: 0xff7b32,
		emissive: 0x4a220c,
		emissiveIntensity: 0.35,
		roughness: 0.42,
		metalness: 0.05,
		...overrides,
	};
}

export function markerDefaults(overrides: Partial<ThemeMarkers>): ThemeMarkers {
	return {
		startColor: 0x9fe870,
		finishColor: 0xffd35a,
		ringColor: 0xffffff,
		ringOpacity: 0.18,
		ringEmissive: 0x121212,
		ringPulseSpeed: 1.2,
		...overrides,
	};
}

export function hudDefaults(overrides: Partial<ThemeHud>): ThemeHud {
	return {
		warningBackground: "rgba(54, 34, 16, 0.82)",
		warningBorder: "rgba(255, 208, 143, 0.26)",
		warningText: "#ffd08f",
		shadowColor: "rgba(0, 0, 0, 0.34)",
		atmosphereGlow: "rgba(255, 123, 50, 0.16)",
		...overrides,
	};
}

export type { ViewerStyle };
