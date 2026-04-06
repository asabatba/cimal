import { VIEWER_DOCUMENT_TEMPLATE } from "./generated/viewerBundle.ts";
import type {
	ErrorPayload,
	TerrainPayload,
	ViewerConfig,
	ViewerStyle,
} from "./types.ts";
import { DEFAULT_VIEWER_CONFIG } from "./viewerConfig.ts";

const TITLE_PLACEHOLDER = "__CIMAL_VIEWER_TITLE__";
const PAYLOAD_PLACEHOLDER = "__CIMAL_VIEWER_PAYLOAD__";
const CONFIG_PLACEHOLDER = "__CIMAL_VIEWER_CONFIG__";
const MAX_EMBEDDED_BAKED_TEXTURE_DATA_URL_LENGTH = 1_200_000;

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

function toEmbeddedJson(value: unknown): string {
	return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function replacePlaceholder(
	template: string,
	placeholder: string,
	value: string,
): string {
	return template.split(placeholder).join(value);
}

function normalizePayloadForEmbedding(
	payload: ErrorPayload | TerrainPayload,
): ErrorPayload | TerrainPayload {
	if (!("bakedImagery" in payload) || !payload.bakedImagery) {
		return payload;
	}

	if (
		payload.bakedImagery.dataUrl.length <=
		MAX_EMBEDDED_BAKED_TEXTURE_DATA_URL_LENGTH
	) {
		return payload;
	}

	const warning =
		payload.bakedImagery.kind === "hiking-map"
			? "The baked hiking-map texture in this pack is too large to embed in the widget iframe. Rebuild the pack at a lower hiking-map resolution to display it here."
			: "The baked ESA WorldCover texture in this pack is too large to embed in the widget iframe.";

	return {
		...payload,
		bakedImagery: undefined,
		warning: payload.warning ? `${payload.warning} ${warning}` : warning,
	};
}

export function buildViewerDataUrl(
	payload: ErrorPayload | TerrainPayload,
	viewerConfig: ViewerConfig | ViewerStyle = DEFAULT_VIEWER_CONFIG,
): string {
	const normalizedViewerConfig: ViewerConfig =
		typeof viewerConfig === "string"
			? {
					...DEFAULT_VIEWER_CONFIG,
					style: viewerConfig,
				}
			: {
					style: viewerConfig.style ?? DEFAULT_VIEWER_CONFIG.style,
					hikingMapResolution:
						viewerConfig.hikingMapResolution ??
						DEFAULT_VIEWER_CONFIG.hikingMapResolution,
				};

	const html = replacePlaceholder(
		replacePlaceholder(
			replacePlaceholder(
				VIEWER_DOCUMENT_TEMPLATE,
				TITLE_PLACEHOLDER,
				escapeHtml(payload.title),
			),
			CONFIG_PLACEHOLDER,
			toEmbeddedJson(normalizedViewerConfig),
		),
		PAYLOAD_PLACEHOLDER,
		toEmbeddedJson(normalizePayloadForEmbedding(payload)),
	);

	return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
}
