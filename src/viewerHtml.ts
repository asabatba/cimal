import { VIEWER_DOCUMENT_TEMPLATE } from "./generated/viewerBundle.ts";
import type { ErrorPayload, TerrainPayload, ViewerStyle } from "./types.ts";

const TITLE_PLACEHOLDER = "__CIMAL_VIEWER_TITLE__";
const PAYLOAD_PLACEHOLDER = "__CIMAL_VIEWER_PAYLOAD__";
const STYLE_PLACEHOLDER = "__CIMAL_VIEWER_STYLE__";

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
	viewerStyle: ViewerStyle = "classic",
): string {
	const html = replacePlaceholder(
		replacePlaceholder(
			replacePlaceholder(
				VIEWER_DOCUMENT_TEMPLATE,
				TITLE_PLACEHOLDER,
				escapeHtml(payload.title),
			),
			PAYLOAD_PLACEHOLDER,
			toEmbeddedJson(payload),
		),
		STYLE_PLACEHOLDER,
		toEmbeddedJson(viewerStyle),
	);

	return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
}
