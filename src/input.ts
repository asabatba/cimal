import type {
	HikingMapResolution,
	ParsedWidgetConfig,
	ViewerStyle,
} from "./types.ts";
import {
	DEFAULT_HIKING_MAP_RESOLUTION,
	DEFAULT_VIEWER_STYLE,
	SUPPORTED_HIKING_MAP_RESOLUTIONS,
	SUPPORTED_VIEWER_STYLES,
} from "./viewerConfig.ts";

type ResolvedWidgetSource =
	| { kind: "pack"; packPath: string }
	| { kind: "gpx"; gpxSource: string };

function formatSupportedValues(values: readonly string[]): string {
	return values.join("|");
}

function formatSupportedList(values: readonly string[]): string {
	return values.join(", ");
}

function supportedWidgetOptionsHelpText(): string {
	return `style: ${formatSupportedValues(SUPPORTED_VIEWER_STYLES)} and optional hiking-map-resolution: ${formatSupportedValues(SUPPORTED_HIKING_MAP_RESOLUTIONS)}`;
}

function isRemoteUrl(candidate: string): boolean {
	return /^https?:\/\//i.test(candidate);
}

function unwrapWikiLink(candidate: string): string {
	const trimmed = candidate.trim();
	const match = /^\[\[([^\]|]+)(?:\|[^\]]+)?\]\]$/.exec(trimmed);
	if (!match) {
		return trimmed;
	}
	return match[1].trim();
}

export function normalizeSpacePath(input: string): string {
	const trimmed = input.trim();
	if (!trimmed) {
		throw new Error("A space path is required.");
	}

	return unwrapWikiLink(trimmed.replace(/^space\s*:\s*/i, ""));
}

export function normalizeGpxSource(input: string): string {
	const trimmed = input.trim();
	if (!trimmed) {
		throw new Error("A GPX URL or space path is required.");
	}

	const candidate = normalizeSpacePath(trimmed.replace(/^url\s*:\s*/i, ""));

	if (!isRemoteUrl(candidate)) {
		return candidate;
	}

	const url = new URL(candidate);

	if (url.hostname === "github.com") {
		const parts = url.pathname.split("/").filter(Boolean);
		const blobIndex = parts.indexOf("blob");
		if (parts.length >= 5 && blobIndex === 2) {
			const owner = parts[0];
			const repo = parts[1];
			const branch = parts[3];
			const filePath = parts.slice(4).join("/");
			return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
		}
	}

	return url.toString();
}

export function normalizeViewerStyle(input: string): ViewerStyle {
	const normalized = input.trim().toLowerCase();
	if (SUPPORTED_VIEWER_STYLES.includes(normalized as ViewerStyle)) {
		return normalized as ViewerStyle;
	}

	throw new Error(
		`Unsupported cimal style "${input.trim()}". Supported styles: ${formatSupportedList(SUPPORTED_VIEWER_STYLES)}.`,
	);
}

export function normalizeHikingMapResolution(
	input: string,
): HikingMapResolution {
	const normalized = input.trim().toLowerCase();
	if (
		SUPPORTED_HIKING_MAP_RESOLUTIONS.includes(normalized as HikingMapResolution)
	) {
		return normalized as HikingMapResolution;
	}

	throw new Error(
		`Unsupported hiking-map-resolution "${input.trim()}". Supported values: ${formatSupportedList(SUPPORTED_HIKING_MAP_RESOLUTIONS)}.`,
	);
}

export function parseWidgetConfig(bodyText: string): ParsedWidgetConfig {
	const meaningfulLines = bodyText
		.split(/\r?\n/)
		.map((line) => line.trim())
		.filter((line) => line && !line.startsWith("#"));

	if (meaningfulLines.length === 0) {
		throw new Error(
			"Add a .cimal pack path or GPX source inside the widget body.",
		);
	}

	const [sourceLine, ...optionLines] = meaningfulLines;
	if (/^(?:style|hiking-map-resolution)\s*:/i.test(sourceLine)) {
		throw new Error(
			`Put the .cimal path or GPX source on the first line, then add ${supportedWidgetOptionsHelpText()} below it.`,
		);
	}

	let style = DEFAULT_VIEWER_STYLE;
	let hikingMapResolution = DEFAULT_HIKING_MAP_RESOLUTION;
	let sawStyle = false;
	let sawHikingMapResolution = false;
	for (const line of optionLines) {
		const styleMatch = /^style\s*:\s*(.+)$/i.exec(line);
		if (styleMatch) {
			if (sawStyle) {
				throw new Error("Duplicate style option in cimal widget body.");
			}
			style = normalizeViewerStyle(styleMatch[1]);
			sawStyle = true;
			continue;
		}

		const hikingMapResolutionMatch = /^hiking-map-resolution\s*:\s*(.+)$/i.exec(
			line,
		);
		if (hikingMapResolutionMatch) {
			if (sawHikingMapResolution) {
				throw new Error(
					"Duplicate hiking-map-resolution option in cimal widget body.",
				);
			}
			hikingMapResolution = normalizeHikingMapResolution(
				hikingMapResolutionMatch[1],
			);
			sawHikingMapResolution = true;
			continue;
		}

		throw new Error(
			`Unsupported cimal widget option "${line}". Supported options: ${supportedWidgetOptionsHelpText()}.`,
		);
	}

	if (sawHikingMapResolution && style !== "hiking-map") {
		throw new Error(
			'Hiking-map resolution can only be used with "style: hiking-map".',
		);
	}

	return {
		source: sourceLine,
		style,
		hikingMapResolution,
		hasExplicitHikingMapResolution: sawHikingMapResolution,
	};
}

export function normalizePackPath(input: string): string {
	const normalized = normalizeSpacePath(input);
	if (isRemoteUrl(normalized) || /\.gpx$/i.test(normalized)) {
		throw new Error(
			"Cimal widgets now accept only .cimal pack paths. Build a pack from the GPX first.",
		);
	}
	return normalized.endsWith(".cimal") ? normalized : `${normalized}.cimal`;
}

export function resolveWidgetSource(
	config: ParsedWidgetConfig,
): ResolvedWidgetSource {
	const normalizedSource = normalizeSpacePath(config.source);

	if (/\.cimal$/i.test(normalizedSource)) {
		const packPath = normalizePackPath(normalizedSource);
		if (config.hasExplicitHikingMapResolution) {
			throw new Error(
				'Hiking-map resolution is baked into existing .cimal packs. Rebuild the pack from the GPX at the desired resolution instead of setting "hiking-map-resolution" on a .cimal widget.',
			);
		}

		return {
			kind: "pack",
			packPath,
		};
	}

	return {
		kind: "gpx",
		gpxSource: normalizeGpxSource(normalizedSource),
	};
}
