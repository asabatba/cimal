import { editor, space } from "@silverbulletmd/silverbullet/syscalls";
import {
	CIMAL_PACK_CACHE_INDEX_PATH,
	CIMAL_PACK_CACHE_MAX_BYTES,
	CIMAL_PACK_CACHE_ROOT,
	CIMAL_PACK_CACHE_VERSION,
	HIKING_MAP_TILE_CACHE_INDEX_PATH,
	HIKING_MAP_TILE_CACHE_MAX_BYTES,
	HIKING_MAP_TILE_CACHE_ROOT,
	HIKING_MAP_TILE_CACHE_VERSION,
	TERRAIN_CACHE_INDEX_PATH,
	TERRAIN_CACHE_MAX_BYTES,
	TERRAIN_CACHE_ROOT,
	TERRAIN_CACHE_VERSION,
} from "./constants.ts";
import type {
	HikingMapResolution,
	SampledTile,
	TerrainCacheIndex,
	TerrainCacheIndexEntry,
} from "./types.ts";

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const TILE_MAGIC = "TGPC";
const memoryTileCache = new Map<string, SampledTile>();
const memoryHikingMapTileCache = new Map<string, Uint8Array>();
const memoryPackCache = new Map<string, Uint8Array>();
let memoryIndexCache: TerrainCacheIndex | null = null;
let memoryHikingMapTileIndexCache: TerrainCacheIndex | null = null;
let memoryPackIndexCache: TerrainCacheIndex | null = null;

function isUnsupportedCacheVersionError(error: unknown): boolean {
	return (
		error instanceof Error &&
		error.message.startsWith("Unsupported cache version ")
	);
}

function createEmptyIndex(version: number): TerrainCacheIndex {
	return {
		version,
		entries: {},
	};
}

function sanitizePathPart(value: string): string {
	return value.replaceAll(/[^A-Za-z0-9._-]+/g, "-");
}

function djb2Hash(value: string): string {
	let hash = 5381;
	for (let index = 0; index < value.length; index += 1) {
		hash = ((hash << 5) + hash) ^ value.charCodeAt(index);
	}
	return (hash >>> 0).toString(16).padStart(8, "0");
}

function boundsToken(bounds: SampledTile["bounds"]): string {
	return [bounds.minLat, bounds.maxLat, bounds.minLon, bounds.maxLon]
		.map((value) => value.toFixed(6))
		.join("_");
}

function encodeTile(tile: SampledTile): Uint8Array {
	const metadataBytes = encoder.encode(
		JSON.stringify({
			version: TERRAIN_CACHE_VERSION,
			bounds: tile.bounds,
			width: tile.width,
			height: tile.height,
			noDataValue: tile.noDataValue,
		}),
	);
	const valueBytes = new Uint8Array(tile.values.buffer.slice(0));
	const output = new Uint8Array(8 + metadataBytes.length + valueBytes.length);
	output.set(encoder.encode(TILE_MAGIC), 0);

	const view = new DataView(output.buffer);
	view.setUint16(4, TERRAIN_CACHE_VERSION, true);
	view.setUint16(6, metadataBytes.length, true);
	output.set(metadataBytes, 8);
	output.set(valueBytes, 8 + metadataBytes.length);

	return output;
}

function decodeTile(data: Uint8Array): SampledTile {
	if (data.length < 8) {
		throw new Error("Cache record too small.");
	}
	const magic = decoder.decode(data.slice(0, 4));
	if (magic !== TILE_MAGIC) {
		throw new Error("Invalid cache record magic.");
	}

	const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
	const version = view.getUint16(4, true);
	if (version !== TERRAIN_CACHE_VERSION) {
		throw new Error(`Unsupported cache version ${version}.`);
	}

	const metadataLength = view.getUint16(6, true);
	const metadataStart = 8;
	const metadataEnd = metadataStart + metadataLength;
	if (metadataEnd > data.length) {
		throw new Error("Invalid cache record metadata length.");
	}

	const metadata = JSON.parse(
		decoder.decode(data.slice(metadataStart, metadataEnd)),
	) as {
		bounds: SampledTile["bounds"];
		width: number;
		height: number;
		noDataValue: number | null;
	};
	const valueBytes = data.slice(metadataEnd);
	if (valueBytes.byteLength % Float32Array.BYTES_PER_ELEMENT !== 0) {
		throw new Error("Invalid cached raster byte length.");
	}

	const values = new Float32Array(
		valueBytes.buffer.slice(
			valueBytes.byteOffset,
			valueBytes.byteOffset + valueBytes.byteLength,
		),
	);
	if (values.length !== metadata.width * metadata.height) {
		throw new Error("Cached raster dimensions do not match metadata.");
	}

	return {
		bounds: metadata.bounds,
		width: metadata.width,
		height: metadata.height,
		values,
		noDataValue: metadata.noDataValue,
	};
}

async function loadIndex(): Promise<TerrainCacheIndex> {
	if (memoryIndexCache) {
		return memoryIndexCache;
	}

	if (!(await space.fileExists(TERRAIN_CACHE_INDEX_PATH))) {
		memoryIndexCache = createEmptyIndex(TERRAIN_CACHE_VERSION);
		return memoryIndexCache;
	}

	try {
		const data = await space.readFile(TERRAIN_CACHE_INDEX_PATH);
		const parsed = JSON.parse(decoder.decode(data)) as TerrainCacheIndex;
		if (parsed.version !== TERRAIN_CACHE_VERSION || !parsed.entries) {
			await space.deleteFile(TERRAIN_CACHE_INDEX_PATH);
			memoryIndexCache = createEmptyIndex(TERRAIN_CACHE_VERSION);
		} else {
			memoryIndexCache = parsed;
		}
	} catch {
		if (await space.fileExists(TERRAIN_CACHE_INDEX_PATH)) {
			await space.deleteFile(TERRAIN_CACHE_INDEX_PATH);
		}
		memoryIndexCache = createEmptyIndex(TERRAIN_CACHE_VERSION);
	}

	return memoryIndexCache;
}

async function loadPackIndex(): Promise<TerrainCacheIndex> {
	if (memoryPackIndexCache) {
		return memoryPackIndexCache;
	}

	if (!(await space.fileExists(CIMAL_PACK_CACHE_INDEX_PATH))) {
		memoryPackIndexCache = createEmptyIndex(CIMAL_PACK_CACHE_VERSION);
		return memoryPackIndexCache;
	}

	try {
		const data = await space.readFile(CIMAL_PACK_CACHE_INDEX_PATH);
		const parsed = JSON.parse(decoder.decode(data)) as TerrainCacheIndex;
		if (parsed.version !== CIMAL_PACK_CACHE_VERSION || !parsed.entries) {
			await space.deleteFile(CIMAL_PACK_CACHE_INDEX_PATH);
			memoryPackIndexCache = createEmptyIndex(CIMAL_PACK_CACHE_VERSION);
		} else {
			memoryPackIndexCache = parsed;
		}
	} catch {
		if (await space.fileExists(CIMAL_PACK_CACHE_INDEX_PATH)) {
			await space.deleteFile(CIMAL_PACK_CACHE_INDEX_PATH);
		}
		memoryPackIndexCache = createEmptyIndex(CIMAL_PACK_CACHE_VERSION);
	}

	return memoryPackIndexCache;
}

async function loadHikingMapTileIndex(): Promise<TerrainCacheIndex> {
	if (memoryHikingMapTileIndexCache) {
		return memoryHikingMapTileIndexCache;
	}

	if (!(await space.fileExists(HIKING_MAP_TILE_CACHE_INDEX_PATH))) {
		memoryHikingMapTileIndexCache = createEmptyIndex(
			HIKING_MAP_TILE_CACHE_VERSION,
		);
		return memoryHikingMapTileIndexCache;
	}

	try {
		const data = await space.readFile(HIKING_MAP_TILE_CACHE_INDEX_PATH);
		const parsed = JSON.parse(decoder.decode(data)) as TerrainCacheIndex;
		if (parsed.version !== HIKING_MAP_TILE_CACHE_VERSION || !parsed.entries) {
			await space.deleteFile(HIKING_MAP_TILE_CACHE_INDEX_PATH);
			memoryHikingMapTileIndexCache = createEmptyIndex(
				HIKING_MAP_TILE_CACHE_VERSION,
			);
		} else {
			memoryHikingMapTileIndexCache = parsed;
		}
	} catch {
		if (await space.fileExists(HIKING_MAP_TILE_CACHE_INDEX_PATH)) {
			await space.deleteFile(HIKING_MAP_TILE_CACHE_INDEX_PATH);
		}
		memoryHikingMapTileIndexCache = createEmptyIndex(
			HIKING_MAP_TILE_CACHE_VERSION,
		);
	}

	return memoryHikingMapTileIndexCache;
}

async function persistIndex(index: TerrainCacheIndex): Promise<void> {
	memoryIndexCache = index;
	await space.writeFile(
		TERRAIN_CACHE_INDEX_PATH,
		encoder.encode(JSON.stringify(index)),
	);
}

async function persistPackIndex(index: TerrainCacheIndex): Promise<void> {
	memoryPackIndexCache = index;
	await space.writeFile(
		CIMAL_PACK_CACHE_INDEX_PATH,
		encoder.encode(JSON.stringify(index)),
	);
}

async function persistHikingMapTileIndex(
	index: TerrainCacheIndex,
): Promise<void> {
	memoryHikingMapTileIndexCache = index;
	await space.writeFile(
		HIKING_MAP_TILE_CACHE_INDEX_PATH,
		encoder.encode(JSON.stringify(index)),
	);
}

function totalCacheBytes(index: TerrainCacheIndex): number {
	return Object.values(index.entries).reduce(
		(sum, entry) => sum + entry.size,
		0,
	);
}

async function deleteCacheEntry(
	index: TerrainCacheIndex,
	entry: TerrainCacheIndexEntry,
): Promise<void> {
	memoryTileCache.delete(entry.key);
	delete index.entries[entry.key];
	if (await space.fileExists(entry.path)) {
		await space.deleteFile(entry.path);
	}
}

async function enforceCacheLimit(index: TerrainCacheIndex): Promise<void> {
	let currentBytes = totalCacheBytes(index);
	if (currentBytes <= TERRAIN_CACHE_MAX_BYTES) {
		return;
	}

	const entries = Object.values(index.entries).sort(
		(left, right) => left.lastUsed - right.lastUsed,
	);

	for (const entry of entries) {
		await deleteCacheEntry(index, entry);
		currentBytes -= entry.size;
		if (currentBytes <= TERRAIN_CACHE_MAX_BYTES) {
			break;
		}
	}
}

async function deletePackCacheEntry(
	index: TerrainCacheIndex,
	entry: TerrainCacheIndexEntry,
): Promise<void> {
	memoryPackCache.delete(entry.key);
	delete index.entries[entry.key];
	if (await space.fileExists(entry.path)) {
		await space.deleteFile(entry.path);
	}
}

async function deleteHikingMapTileCacheEntry(
	index: TerrainCacheIndex,
	entry: TerrainCacheIndexEntry,
): Promise<void> {
	memoryHikingMapTileCache.delete(entry.key);
	delete index.entries[entry.key];
	if (await space.fileExists(entry.path)) {
		await space.deleteFile(entry.path);
	}
}

async function enforcePackCacheLimit(index: TerrainCacheIndex): Promise<void> {
	let currentBytes = totalCacheBytes(index);
	if (currentBytes <= CIMAL_PACK_CACHE_MAX_BYTES) {
		return;
	}

	const entries = Object.values(index.entries).sort(
		(left, right) => left.lastUsed - right.lastUsed,
	);

	for (const entry of entries) {
		await deletePackCacheEntry(index, entry);
		currentBytes -= entry.size;
		if (currentBytes <= CIMAL_PACK_CACHE_MAX_BYTES) {
			break;
		}
	}
}

async function enforceHikingMapTileCacheLimit(
	index: TerrainCacheIndex,
): Promise<void> {
	let currentBytes = totalCacheBytes(index);
	if (currentBytes <= HIKING_MAP_TILE_CACHE_MAX_BYTES) {
		return;
	}

	const entries = Object.values(index.entries).sort(
		(left, right) => left.lastUsed - right.lastUsed,
	);

	for (const entry of entries) {
		await deleteHikingMapTileCacheEntry(index, entry);
		currentBytes -= entry.size;
		if (currentBytes <= HIKING_MAP_TILE_CACHE_MAX_BYTES) {
			break;
		}
	}
}

export function buildSampledTileCacheEntry(
	key: string,
	tileId: string,
): { key: string; path: string } {
	const safeTileId = sanitizePathPart(tileId);
	const fileName = `${safeTileId}-${djb2Hash(key)}.bin`;
	return {
		key,
		path: `${TERRAIN_CACHE_ROOT}/v${TERRAIN_CACHE_VERSION}/${fileName}`,
	};
}

export function buildPackedCimalCacheEntry(
	key: string,
	source: string,
): { key: string; path: string } {
	const safeSource = sanitizePathPart(
		source.split(/[\\/]/).filter(Boolean).pop() || "track",
	).replace(/(?:\.gpx)?$/i, "");
	const fileName = `${safeSource || "track"}-${djb2Hash(key)}.cimal`;
	return {
		key,
		path: `${CIMAL_PACK_CACHE_ROOT}/v${CIMAL_PACK_CACHE_VERSION}/${fileName}`,
	};
}

export function buildHikingMapTileCacheEntry(
	key: string,
	fileStem: string,
): { key: string; path: string } {
	const safeStem = sanitizePathPart(fileStem);
	const fileName = `${safeStem}-${djb2Hash(key)}.bin`;
	return {
		key,
		path: `${HIKING_MAP_TILE_CACHE_ROOT}/v${HIKING_MAP_TILE_CACHE_VERSION}/${fileName}`,
	};
}

export function getMemoryCachedTile(key: string): SampledTile | undefined {
	return memoryTileCache.get(key);
}

export async function getPersistentCachedTile(
	key: string,
): Promise<SampledTile | null> {
	const index = await loadIndex();
	const entry = index.entries[key];
	if (!entry) {
		return null;
	}

	if (!(await space.fileExists(entry.path))) {
		delete index.entries[key];
		await persistIndex(index);
		return null;
	}

	try {
		const data = await space.readFile(entry.path);
		const tile = decodeTile(data);
		memoryTileCache.set(key, tile);
		entry.lastUsed = Date.now();
		await persistIndex(index);
		return tile;
	} catch (error) {
		if (isUnsupportedCacheVersionError(error)) {
			console.warn(
				`Discarding outdated cached terrain tile for ${key}: ${
					error instanceof Error ? error.message : "Unknown error"
				}`,
			);
		}
		await deleteCacheEntry(index, entry);
		await persistIndex(index);
		return null;
	}
}

export async function putCachedTile(
	key: string,
	path: string,
	tile: SampledTile,
): Promise<void> {
	const index = await loadIndex();
	const encoded = encodeTile(tile);
	memoryTileCache.set(key, tile);
	await space.writeFile(path, encoded);
	index.entries[key] = {
		key,
		path,
		size: encoded.byteLength,
		lastUsed: Date.now(),
	};
	await enforceCacheLimit(index);
	await persistIndex(index);
}

export async function getCachedPack(key: string): Promise<Uint8Array | null> {
	const memoryCachedPack = memoryPackCache.get(key);
	if (memoryCachedPack) {
		return memoryCachedPack;
	}

	const index = await loadPackIndex();
	const entry = index.entries[key];
	if (!entry) {
		return null;
	}

	if (!(await space.fileExists(entry.path))) {
		delete index.entries[key];
		await persistPackIndex(index);
		return null;
	}

	try {
		const packed = await space.readFile(entry.path);
		memoryPackCache.set(key, packed);
		entry.lastUsed = Date.now();
		await persistPackIndex(index);
		return packed;
	} catch {
		await deletePackCacheEntry(index, entry);
		await persistPackIndex(index);
		return null;
	}
}

export async function getCachedHikingMapTile(
	key: string,
): Promise<Uint8Array | null> {
	const memoryCachedTile = memoryHikingMapTileCache.get(key);
	if (memoryCachedTile) {
		return memoryCachedTile;
	}

	const index = await loadHikingMapTileIndex();
	const entry = index.entries[key];
	if (!entry) {
		return null;
	}

	if (!(await space.fileExists(entry.path))) {
		delete index.entries[key];
		await persistHikingMapTileIndex(index);
		return null;
	}

	try {
		const bytes = await space.readFile(entry.path);
		memoryHikingMapTileCache.set(key, bytes);
		entry.lastUsed = Date.now();
		await persistHikingMapTileIndex(index);
		return bytes;
	} catch {
		await deleteHikingMapTileCacheEntry(index, entry);
		await persistHikingMapTileIndex(index);
		return null;
	}
}

export async function putCachedHikingMapTile(
	key: string,
	path: string,
	bytes: Uint8Array,
): Promise<void> {
	const index = await loadHikingMapTileIndex();
	memoryHikingMapTileCache.set(key, bytes);
	await space.writeFile(path, bytes);
	index.entries[key] = {
		key,
		path,
		size: bytes.byteLength,
		lastUsed: Date.now(),
	};
	await enforceHikingMapTileCacheLimit(index);
	await persistHikingMapTileIndex(index);
}

export async function invalidateCachedPack(key: string): Promise<void> {
	memoryPackCache.delete(key);

	const index = await loadPackIndex();
	const entry = index.entries[key];
	if (!entry) {
		return;
	}

	await deletePackCacheEntry(index, entry);
	await persistPackIndex(index);
}

export async function putCachedPack(
	key: string,
	path: string,
	packed: Uint8Array,
): Promise<void> {
	const index = await loadPackIndex();
	memoryPackCache.set(key, packed);
	await space.writeFile(path, packed);
	index.entries[key] = {
		key,
		path,
		size: packed.byteLength,
		lastUsed: Date.now(),
	};
	await enforcePackCacheLimit(index);
	await persistPackIndex(index);
}

export async function clearTerrainCache(): Promise<number> {
	const index = await loadIndex();
	const entries = Object.values(index.entries);
	for (const entry of entries) {
		if (await space.fileExists(entry.path)) {
			await space.deleteFile(entry.path);
		}
	}
	if (await space.fileExists(TERRAIN_CACHE_INDEX_PATH)) {
		await space.deleteFile(TERRAIN_CACHE_INDEX_PATH);
	}
	const packIndex = await loadPackIndex();
	const packEntries = Object.values(packIndex.entries);
	for (const entry of packEntries) {
		if (await space.fileExists(entry.path)) {
			await space.deleteFile(entry.path);
		}
	}
	if (await space.fileExists(CIMAL_PACK_CACHE_INDEX_PATH)) {
		await space.deleteFile(CIMAL_PACK_CACHE_INDEX_PATH);
	}
	const hikingMapTileIndex = await loadHikingMapTileIndex();
	const hikingMapTileEntries = Object.values(hikingMapTileIndex.entries);
	for (const entry of hikingMapTileEntries) {
		if (await space.fileExists(entry.path)) {
			await space.deleteFile(entry.path);
		}
	}
	if (await space.fileExists(HIKING_MAP_TILE_CACHE_INDEX_PATH)) {
		await space.deleteFile(HIKING_MAP_TILE_CACHE_INDEX_PATH);
	}
	memoryTileCache.clear();
	memoryHikingMapTileCache.clear();
	memoryPackCache.clear();
	memoryIndexCache = createEmptyIndex(TERRAIN_CACHE_VERSION);
	memoryHikingMapTileIndexCache = createEmptyIndex(
		HIKING_MAP_TILE_CACHE_VERSION,
	);
	memoryPackIndexCache = createEmptyIndex(CIMAL_PACK_CACHE_VERSION);
	return entries.length + packEntries.length + hikingMapTileEntries.length;
}

export async function showTerrainCacheStats(): Promise<void> {
	const index = await loadIndex();
	const entries = Object.values(index.entries);
	const packIndex = await loadPackIndex();
	const packEntries = Object.values(packIndex.entries);
	const hikingMapTileIndex = await loadHikingMapTileIndex();
	const hikingMapTileEntries = Object.values(hikingMapTileIndex.entries);
	const totalBytes =
		totalCacheBytes(index) +
		totalCacheBytes(packIndex) +
		totalCacheBytes(hikingMapTileIndex);
	const totalMegabytes = (totalBytes / (1024 * 1024)).toFixed(1);
	await editor.flashNotification(
		`Terrain cache: ${entries.length} DEM tile samples, ${hikingMapTileEntries.length} hiking-map tiles, ${packEntries.length} .cimal packs, ${totalMegabytes} MB`,
	);
}

export function buildTileSampleCacheKey(
	tileId: string,
	bounds: SampledTile["bounds"],
	width: number,
	height: number,
): string {
	return [
		`v${TERRAIN_CACHE_VERSION}`,
		tileId,
		boundsToken(bounds),
		width,
		height,
		"bilinear",
	].join("|");
}

export function buildCimalPackCacheKey(
	source: string,
	xml: string,
	hikingMapResolution: HikingMapResolution,
): string {
	return [
		`v${CIMAL_PACK_CACHE_VERSION}`,
		source,
		hikingMapResolution,
		djb2Hash(xml),
	].join("|");
}

export function buildHikingMapTileCacheKey(
	zoom: number,
	tileX: number,
	tileY: number,
): string {
	return [
		`v${HIKING_MAP_TILE_CACHE_VERSION}`,
		"openhikingmap",
		zoom,
		tileX,
		tileY,
	].join("|");
}
