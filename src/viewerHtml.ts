import { VIEWER_DOCUMENT_TEMPLATE } from "./generated/viewerBundle.ts";
import type {
	ErrorPayload,
	TerrainPayload,
	ViewerConfig,
	ViewerStyle,
} from "./types.ts";

const TITLE_PLACEHOLDER = "__CIMAL_VIEWER_TITLE__";
const PAYLOAD_PLACEHOLDER = "__CIMAL_VIEWER_PAYLOAD__";
const CONFIG_PLACEHOLDER = "__CIMAL_VIEWER_CONFIG__";
const DEFAULT_VIEWER_CONFIG: ViewerConfig = {
	style: "classic",
	hikingMapResolution: "standard",
};

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
		toEmbeddedJson(payload),
	);

	return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
}
