import { COPERNICUS_S3_ROOT } from "../constants.ts";
import { escapeText, requireElement } from "./dom.ts";

export type ViewerShell = {
	canvas: HTMLCanvasElement;
	styleAttribution: HTMLParagraphElement;
};

export function renderViewerShell(
	app: HTMLDivElement,
	options: {
		warning?: string;
	},
): ViewerShell {
	app.innerHTML = `
    <canvas id="scene"></canvas>
    ${
			options.warning
				? `<aside class="warning">${escapeText(options.warning)}</aside>`
				: ""
		}
    <footer class="attribution">
      <p id="style-attribution"></p>
      <p>Terrain: <a href="https://copernicus-dem-30m.s3.amazonaws.com/readme.html" target="_blank" rel="noreferrer">${COPERNICUS_S3_ROOT}</a>.</p>
      <p>Click the map to focus it. Drag to orbit, wheel to zoom, right-click to pan. Keyboard: arrows orbit, WASD pan, R/F zoom.</p>
    </footer>
  `;

	const canvas = requireElement("scene", HTMLCanvasElement);
	const styleAttribution = requireElement(
		"style-attribution",
		HTMLParagraphElement,
	);
	canvas.tabIndex = 0;
	canvas.setAttribute("aria-label", "3D terrain map");

	return { canvas, styleAttribution };
}
