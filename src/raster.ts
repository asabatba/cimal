import { bytesToDataUrl } from "./dataUrl.ts";

export type RasterCanvas = HTMLCanvasElement | OffscreenCanvas;
export type RasterContext =
	| CanvasRenderingContext2D
	| OffscreenCanvasRenderingContext2D;

export function hasDomCanvasSupport(): boolean {
	return (
		typeof document !== "undefined" &&
		typeof document.createElement === "function"
	);
}

export function createRasterCanvas(
	width: number,
	height: number,
): RasterCanvas {
	if (typeof OffscreenCanvas !== "undefined") {
		return new OffscreenCanvas(width, height);
	}

	if (hasDomCanvasSupport()) {
		const canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		return canvas;
	}

	throw new Error("Canvas raster support is unavailable in this runtime.");
}

export function getRasterContext(
	canvas: RasterCanvas,
	options?: { smoothing?: boolean },
): RasterContext | null {
	const context = canvas.getContext("2d");
	if (context && options?.smoothing === false) {
		context.imageSmoothingEnabled = false;
	}
	return context;
}

export async function canvasToDataUrl(
	canvas: RasterCanvas,
	mimeType: string,
	quality?: number,
): Promise<string> {
	if ("toDataURL" in canvas && typeof canvas.toDataURL === "function") {
		return canvas.toDataURL(mimeType, quality);
	}

	if ("convertToBlob" in canvas && typeof canvas.convertToBlob === "function") {
		const blob = await canvas.convertToBlob({ type: mimeType, quality });
		const bytes = new Uint8Array(await blob.arrayBuffer());
		return bytesToDataUrl(bytes, blob.type || mimeType);
	}

	throw new Error("Canvas export is unavailable in this runtime.");
}
