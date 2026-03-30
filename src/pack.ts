import { CIMAL_PACK_VERSION } from "./constants.ts";
import type { CimalPackHeader, LocalPoint, TerrainPayload } from "./types.ts";

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const PACK_MAGIC = "CMLP";
const PACK_PREAMBLE_BYTES = 12;
const UINT16_MAX = 65535;

function encodeHeader(payload: TerrainPayload): Uint8Array {
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
	const headerBytes = encodeHeader(payload);
	const gridBytes = toByteView(quantizeGrid(payload));
	const trackBytes = toByteView(encodeTrack(payload.track));
	const output = new Uint8Array(
		PACK_PREAMBLE_BYTES +
			headerBytes.length +
			gridBytes.length +
			trackBytes.length,
	);
	output.set(encoder.encode(PACK_MAGIC), 0);

	const view = new DataView(output.buffer);
	view.setUint16(4, CIMAL_PACK_VERSION, true);
	view.setUint16(6, 0, true);
	view.setUint32(8, headerBytes.length, true);

	let offset = PACK_PREAMBLE_BYTES;
	output.set(headerBytes, offset);
	offset += headerBytes.length;
	output.set(gridBytes, offset);
	offset += gridBytes.length;
	output.set(trackBytes, offset);

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
	if (version !== CIMAL_PACK_VERSION) {
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
	const gridStart = headerEnd;
	const gridEnd = gridStart + gridByteLength;
	if (gridEnd > data.byteLength) {
		throw new Error("Invalid .cimal pack: terrain section is truncated.");
	}

	const trackByteLength =
		header.trackPointCount * 3 * Float32Array.BYTES_PER_ELEMENT;
	const trackStart = gridEnd;
	const trackEnd = trackStart + trackByteLength;
	if (trackEnd > data.byteLength) {
		throw new Error("Invalid .cimal pack: track section is truncated.");
	}

	const quantizedGrid = new Uint16Array(
		data.buffer.slice(data.byteOffset + gridStart, data.byteOffset + gridEnd),
	);
	const trackValues = new Float32Array(
		data.buffer.slice(data.byteOffset + trackStart, data.byteOffset + trackEnd),
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
		stats: header.stats,
	};
}
