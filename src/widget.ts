import { codeWidget } from "@silverbulletmd/silverbullet/syscalls";
import { extractGpxUrl } from "./input.ts";
import { buildTerrainPayload } from "./terrain.ts";
import type { ErrorPayload, LoadingPayload, TerrainPayload } from "./types.ts";
import { buildViewerDataUrl } from "./viewerHtml.ts";

function buildError(
	title: string,
	message: string,
	details?: string,
): ErrorPayload {
	return { title, message, details };
}

function buildLoading(title: string, message: string): LoadingPayload {
	return {
		title,
		message,
		progressLabel: "GPX + Copernicus DEM",
	};
}

type WidgetState =
	| { status: "loading"; promise: Promise<void> }
	| { status: "ready"; payload: TerrainPayload }
	| { status: "error"; payload: ErrorPayload };

const widgetStateByUrl = new Map<string, WidgetState>();

function queueWidgetRefreshes(): void {
	const retryDelaysMs = [0, 350, 1200];
	for (const delay of retryDelaysMs) {
		setTimeout(async () => {
			try {
				await codeWidget.refreshAll();
			} catch {
				// Ignore refresh failures during widget startup or reloads.
			}
		}, delay);
	}
}

function startTerrainBuild(gpxUrl: string): void {
	const existing = widgetStateByUrl.get(gpxUrl);
	if (existing?.status === "loading" || existing?.status === "ready") {
		return;
	}

	const promise = buildTerrainPayload(gpxUrl)
		.then((payload) => {
			widgetStateByUrl.set(gpxUrl, { status: "ready", payload });
		})
		.catch((error) => {
			const message = error instanceof Error ? error.message : "Unknown error";
			widgetStateByUrl.set(gpxUrl, {
				status: "error",
				payload: buildError("GPX terrain preview failed", message),
			});
		})
		.finally(() => {
			queueWidgetRefreshes();
		});

	widgetStateByUrl.set(gpxUrl, { status: "loading", promise });
}

export async function renderGpxTerrainWidget(bodyText: string): Promise<{
	url: string;
	width: number;
	height: number;
}> {
	try {
		const gpxUrl = extractGpxUrl(bodyText);
		const cachedState = widgetStateByUrl.get(gpxUrl);
		if (cachedState?.status === "ready") {
			return {
				url: buildViewerDataUrl(cachedState.payload),
				width: 960,
				height: 600,
			};
		}
		if (cachedState?.status === "error") {
			return {
				url: buildViewerDataUrl(cachedState.payload),
				width: 960,
				height: 340,
			};
		}

		startTerrainBuild(gpxUrl);
		return {
			url: buildViewerDataUrl(
				buildLoading(
					"Loading terrain viewer",
					"Downloading the GPX track and Copernicus DEM tiles...",
				),
			),
			width: 960,
			height: 340,
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
