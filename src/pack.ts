import { CIMAL_PACK_VERSION } from "./constants.ts";
import { bytesToDataUrl, dataUrlToBytes } from "./dataUrl.ts";
import type { CimalPackHeader, LocalPoint, TerrainPayload } from "./types.ts";

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const PACK_MAGIC = "CMLP";
const PACK_PREAMBLE_BYTES = 12;
const UINT16_MAX = 65535;
const PACK_IMAGE_FORMAT_VERSION = 3;
const PACK_LEGACY_VERSION = 2;

function align4(n: number): number {
	return (n + 3) & ~3;
}

function encodeHeader(
	payload: TerrainPayload,
	bakedImageryByteLength: number,
): Uint8Array {
	const bakedImagery = payload.bakedImagery
		? {
				kind: payload.bakedImagery.kind,
				width: payload.bakedImagery.width,
				height: payload.bakedImagery.height,
				mimeType: payload.bakedImagery.mimeType,
				sourceVersion: payload.bakedImagery.sourceVersion,
				resolution: payload.bakedImagery.resolution,
				byteLength: bakedImageryByteLength,
			}
		: undefined;

	const header: CimalPackHeader = {
		version: CIMAL_PACK_VERSION,
		title: payload.title,
		sourceUrl: payload.sourceUrl,
		bounds: payload.bounds,
		center: payload.center,
		metersPerDegree: payload.metersPerDegree,
		grid: {
			width: payload.grid.width,
			height: payload.grid.height,
			minElevation: payload.grid.minElevation,
			maxElevation: payload.grid.maxElevation,
		},
		stats: payload.stats,
		trackPointCount: payload.track.length,
		bakedImagery,
	};
	return encoder.encode(JSON.stringify(header));
}

function quantizeGrid(payload: TerrainPayload): Uint16Array {
	const { elevations, minElevation, maxElevation } = payload.grid;
	const range = maxElevation - minElevation;
	const values = new Uint16Array(elevations.length);

	if (range <= 0) {
		return values;
	}

	for (let index = 0; index < elevations.length; index += 1) {
		const normalized = (elevations[index] - minElevation) / range;
		values[index] = Math.max(
			0,
			Math.min(UINT16_MAX, Math.round(normalized * UINT16_MAX)),
		);
	}

	return values;
}

function encodeTrack(track: LocalPoint[]): Float32Array {
	const values = new Float32Array(track.length * 3);
	for (let index = 0; index < track.length; index += 1) {
		const offset = index * 3;
		values[offset] = track[index].x;
		values[offset + 1] = track[index].y;
		values[offset + 2] = track[index].z;
	}
	return values;
}

function toByteView(values: Uint16Array | Float32Array): Uint8Array {
	return new Uint8Array(
		values.buffer.slice(
			values.byteOffset,
			values.byteOffset + values.byteLength,
		),
	);
}

export function encodeTerrainPack(payload: TerrainPayload): Uint8Array {
	const bakedImageryBytes = payload.bakedImagery
		? dataUrlToBytes(payload.bakedImagery.dataUrl)
		: new Uint8Array(0);
	const headerBytes = encodeHeader(payload, bakedImageryBytes.byteLength);
	const headerPaddedLength = align4(headerBytes.length);
	const gridBytes = toByteView(quantizeGrid(payload));
	const gridPaddedLength = align4(gridBytes.length);
	const trackBytes = toByteView(encodeTrack(payload.track));
	const output = new Uint8Array(
		PACK_PREAMBLE_BYTES +
			headerPaddedLength +
			gridPaddedLength +
			trackBytes.length +
			bakedImageryBytes.length,
	);
	output.set(encoder.encode(PACK_MAGIC), 0);

	const view = new DataView(output.buffer);
	view.setUint16(4, CIMAL_PACK_VERSION, true);
	view.setUint16(6, 0, true);
	view.setUint32(8, headerBytes.length, true);

	let offset = PACK_PREAMBLE_BYTES;
	output.set(headerBytes, offset);
	offset += headerPaddedLength;
	output.set(gridBytes, offset);
	offset += gridPaddedLength;
	output.set(trackBytes, offset);
	offset += trackBytes.length;
	if (bakedImageryBytes.length > 0) {
		output.set(bakedImageryBytes, offset);
	}

	return output;
}

export function decodeTerrainPack(data: Uint8Array): TerrainPayload {
	if (data.byteLength < PACK_PREAMBLE_BYTES) {
		throw new Error("Invalid .cimal pack: file is too small.");
	}

	const magic = decoder.decode(data.slice(0, 4));
	if (magic !== PACK_MAGIC) {
		throw new Error("Invalid .cimal pack: wrong file signature.");
	}

	const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
	const version = view.getUint16(4, true);
	if (
		version !== PACK_LEGACY_VERSION &&
		version !== PACK_IMAGE_FORMAT_VERSION &&
		version !== CIMAL_PACK_VERSION
	) {
		throw new Error(
			`Unsupported .cimal pack version ${version}. Rebuild the pack.`,
		);
	}

	const headerLength = view.getUint32(8, true);
	const headerStart = PACK_PREAMBLE_BYTES;
	const headerEnd = headerStart + headerLength;
	if (headerEnd > data.byteLength) {
		throw new Error("Invalid .cimal pack: header length is out of bounds.");
	}

	const header = JSON.parse(
		decoder.decode(data.slice(headerStart, headerEnd)),
	) as CimalPackHeader;
	const gridValueCount = header.grid.width * header.grid.height;
	const gridByteLength = gridValueCount * Uint16Array.BYTES_PER_ELEMENT;
	const gridStart = PACK_PREAMBLE_BYTES + align4(headerLength);
	const gridEnd = gridStart + gridByteLength;
	if (gridEnd > data.byteLength) {
		throw new Error("Invalid .cimal pack: terrain section is truncated.");
	}

	const trackByteLength =
		header.trackPointCount * 3 * Float32Array.BYTES_PER_ELEMENT;
	const trackStart = gridStart + align4(gridByteLength);
	const trackEnd = trackStart + trackByteLength;
	if (trackEnd > data.byteLength) {
		throw new Error("Invalid .cimal pack: track section is truncated.");
	}

	let bakedImagery: TerrainPayload["bakedImagery"];
	if (version >= CIMAL_PACK_VERSION && header.bakedImagery) {
		const imageStart = trackEnd;
		const imageEnd = imageStart + header.bakedImagery.byteLength;
		if (imageEnd > data.byteLength) {
			throw new Error("Invalid .cimal pack: imagery section is truncated.");
		}

		const imageBytes = data.slice(imageStart, imageEnd);
		bakedImagery = {
			kind: header.bakedImagery.kind,
			width: header.bakedImagery.width,
			height: header.bakedImagery.height,
			mimeType: header.bakedImagery.mimeType,
			sourceVersion: header.bakedImagery.sourceVersion,
			resolution: header.bakedImagery.resolution,
			dataUrl: bytesToDataUrl(imageBytes, header.bakedImagery.mimeType),
		};
	} else if (version >= PACK_IMAGE_FORMAT_VERSION && header.bakedHikingMap) {
		const imageStart = trackEnd;
		const imageEnd = imageStart + header.bakedHikingMap.byteLength;
		if (imageEnd > data.byteLength) {
			throw new Error("Invalid .cimal pack: imagery section is truncated.");
		}

		const imageBytes = data.slice(imageStart, imageEnd);
		bakedImagery = {
			kind: "hiking-map",
			width: header.bakedHikingMap.width,
			height: header.bakedHikingMap.height,
			mimeType: header.bakedHikingMap.mimeType,
			sourceVersion: "OpenHikingMap",
			resolution: header.bakedHikingMap.resolution,
			dataUrl: bytesToDataUrl(imageBytes, header.bakedHikingMap.mimeType),
		};
	}

	// Zero-copy views: gridStart and trackStart are always 4-aligned (preamble is
	// 12 bytes, both padded lengths are multiples of 4), and data.byteOffset is 0
	// for files read via space.readFile.
	const quantizedGrid = new Uint16Array(
		data.buffer,
		data.byteOffset + gridStart,
		gridValueCount,
	);
	const trackValues = new Float32Array(
		data.buffer,
		data.byteOffset + trackStart,
		header.trackPointCount * 3,
	);
	const range = header.grid.maxElevation - header.grid.minElevation;
	const elevations = Array.from(quantizedGrid, (value) =>
		range <= 0
			? header.grid.minElevation
			: header.grid.minElevation + (value / UINT16_MAX) * range,
	);
	const track: LocalPoint[] = [];
	for (let index = 0; index < header.trackPointCount; index += 1) {
		const offset = index * 3;
		const elevation = trackValues[offset + 1];
		track.push({
			x: trackValues[offset],
			y: elevation,
			z: trackValues[offset + 2],
			elevation,
		});
	}

	return {
		title: header.title,
		sourceUrl: header.sourceUrl,
		bounds: header.bounds,
		center: header.center,
		metersPerDegree: header.metersPerDegree,
		grid: {
			width: header.grid.width,
			height: header.grid.height,
			elevations,
			minElevation: header.grid.minElevation,
			maxElevation: header.grid.maxElevation,
		},
		track,
		bakedImagery,
		stats: header.stats,
	};
}

export function isInvalidOrOutdatedTerrainPackError(error: unknown): boolean {
	return (
		error instanceof Error &&
		(error.message.startsWith("Unsupported .cimal pack version ") ||
			error.message.startsWith("Invalid .cimal pack:"))
	);
}
