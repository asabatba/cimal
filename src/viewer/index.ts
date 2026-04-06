import type { ErrorPayload, TerrainPayload, ViewerConfig } from "../types.ts";
import { DEFAULT_VIEWER_CONFIG } from "../viewerConfig.ts";
import { escapeText, requireElement } from "./dom.ts";
import { renderTerrainViewer } from "./render.ts";
import { styleThemes } from "./themes.ts";

const payloadScript = requireElement("payload", HTMLScriptElement);
const viewerConfigScript = requireElement("viewer-config", HTMLScriptElement);
const app = requireElement("app", HTMLDivElement);

const payload = JSON.parse(payloadScript.textContent ?? "null") as
	| ErrorPayload
	| TerrainPayload;
const rawViewerConfig = {
	...(JSON.parse(
		viewerConfigScript.textContent ?? JSON.stringify(DEFAULT_VIEWER_CONFIG),
	) as Partial<ViewerConfig>),
};
const activeTheme =
	styleThemes[rawViewerConfig.style ?? DEFAULT_VIEWER_CONFIG.style] ??
	styleThemes.classic;
const viewerConfig = {
	...DEFAULT_VIEWER_CONFIG,
	...rawViewerConfig,
	terrainShape:
		rawViewerConfig.terrainShape ??
		activeTheme.defaultTerrainShape ??
		DEFAULT_VIEWER_CONFIG.terrainShape,
} satisfies ViewerConfig;

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
	const cleanup = await renderTerrainViewer(
		app,
		payload,
		activeTheme,
		viewerConfig,
	);
	window.addEventListener("pagehide", cleanup, { once: true });
	window.addEventListener("beforeunload", cleanup, { once: true });
}
