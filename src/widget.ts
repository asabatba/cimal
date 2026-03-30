import { extractGpxUrl } from "./input.ts";
import { buildTerrainPayload } from "./terrain.ts";
import type { ErrorPayload } from "./types.ts";
import { buildViewerDataUrl } from "./viewerHtml.ts";

function buildError(
	title: string,
	message: string,
	details?: string,
): ErrorPayload {
	return { title, message, details };
}

export async function renderGpxTerrainWidget(bodyText: string): Promise<{
	url: string;
	width: number;
	height: number;
}> {
	try {
		const gpxUrl = extractGpxUrl(bodyText);
		const payload = await buildTerrainPayload(gpxUrl);
		return {
			url: buildViewerDataUrl(payload),
			width: 960,
			height: 600,
		};
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		return {
			url: buildViewerDataUrl(
				buildError("GPX terrain preview failed", message),
			),
			width: 960,
			height: 340,
		};
	}
}
