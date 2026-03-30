import { extractGpxSource } from "./input.ts";
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
		const gpxSource = extractGpxSource(bodyText);
		const payload = await buildTerrainPayload(gpxSource);
		return {
			url: buildViewerDataUrl(payload),
			width: 960,
			height: 600,
		};
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		return {
			url: buildViewerDataUrl(buildError("Cimal preview failed", message)),
			width: 960,
			height: 340,
		};
	}
}
