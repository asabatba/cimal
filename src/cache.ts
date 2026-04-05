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

type CacheStoreConfig<T> = {
	version: number;
	indexPath: string;
	maxBytes: number;
	memoryCache: Map<string, T>;
	encode: (value: T) => Uint8Array;
	decode: (bytes: Uint8Array) => T;
	deleteMemoryEntry: (key: string) => void;
	onDecodeError?: (key: string, error: unknown) => void;
};

type CacheStore<T> = {
	getMemory(key: string): T | undefined;
	loadIndex(): Promise<TerrainCacheIndex>;
	get(key: string): Promise<T | null>;
	put(key: string, path: string, value: T): Promise<void>;
	invalidate(key: string): Promise<void>;
	clear(): Promise<number>;
};

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

function totalCacheBytes(index: TerrainCacheIndex): number {
	return Object.values(index.entries).reduce(
		(sum, entry) => sum + entry.size,
		0,
	);
}

function createCacheStore<T>(config: CacheStoreConfig<T>): CacheStore<T> {
	let memoryIndexCache: TerrainCacheIndex | null = null;

	async function persistIndex(index: TerrainCacheIndex): Promise<void> {
		memoryIndexCache = index;
		await space.writeFile(
			config.indexPath,
			encoder.encode(JSON.stringify(index)),
		);
	}

	async function resetIndex(): Promise<TerrainCacheIndex> {
		if (await space.fileExists(config.indexPath)) {
			await space.deleteFile(config.indexPath);
		}
		memoryIndexCache = createEmptyIndex(config.version);
		return memoryIndexCache;
	}

	async function loadIndex(): Promise<TerrainCacheIndex> {
		if (memoryIndexCache) {
			return memoryIndexCache;
		}

		if (!(await space.fileExists(config.indexPath))) {
			memoryIndexCache = createEmptyIndex(config.version);
			return memoryIndexCache;
		}

		try {
			const data = await space.readFile(config.indexPath);
			const parsed = JSON.parse(decoder.decode(data)) as TerrainCacheIndex;
			if (parsed.version !== config.version || !parsed.entries) {
				return resetIndex();
			}
			memoryIndexCache = parsed;
			return memoryIndexCache;
		} catch {
			return resetIndex();
		}
	}

	async function deleteEntry(
		index: TerrainCacheIndex,
		entry: TerrainCacheIndexEntry,
	): Promise<void> {
		config.deleteMemoryEntry(entry.key);
		delete index.entries[entry.key];
		if (await space.fileExists(entry.path)) {
			await space.deleteFile(entry.path);
		}
	}

	async function enforceLimit(index: TerrainCacheIndex): Promise<void> {
		let currentBytes = totalCacheBytes(index);
		if (currentBytes <= config.maxBytes) {
			return;
		}

		const entries = Object.values(index.entries).sort(
			(left, right) => left.lastUsed - right.lastUsed,
		);

		for (const entry of entries) {
			await deleteEntry(index, entry);
			currentBytes -= entry.size;
			if (currentBytes <= config.maxBytes) {
				break;
			}
		}
	}

	return {
		getMemory(key: string): T | undefined {
			return config.memoryCache.get(key);
		},
		loadIndex,
		async get(key: string): Promise<T | null> {
			if (config.memoryCache.has(key)) {
				return config.memoryCache.get(key) ?? null;
			}

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
				const bytes = await space.readFile(entry.path);
				const decoded = config.decode(bytes);
				config.memoryCache.set(key, decoded);
				entry.lastUsed = Date.now();
				await persistIndex(index);
				return decoded;
			} catch (error) {
				config.onDecodeError?.(key, error);
				await deleteEntry(index, entry);
				await persistIndex(index);
				return null;
			}
		},
		async put(key: string, path: string, value: T): Promise<void> {
			const index = await loadIndex();
			const encoded = config.encode(value);
			config.memoryCache.set(key, value);
			await space.writeFile(path, encoded);
			index.entries[key] = {
				key,
				path,
				size: encoded.byteLength,
				lastUsed: Date.now(),
			};
			await enforceLimit(index);
			await persistIndex(index);
		},
		async invalidate(key: string): Promise<void> {
			config.deleteMemoryEntry(key);

			const index = await loadIndex();
			const entry = index.entries[key];
			if (!entry) {
				return;
			}

			await deleteEntry(index, entry);
			await persistIndex(index);
		},
		async clear(): Promise<number> {
			const index = await loadIndex();
			const entries = Object.values(index.entries);
			for (const entry of entries) {
				if (await space.fileExists(entry.path)) {
					await space.deleteFile(entry.path);
				}
			}
			if (await space.fileExists(config.indexPath)) {
				await space.deleteFile(config.indexPath);
			}
			config.memoryCache.clear();
			memoryIndexCache = createEmptyIndex(config.version);
			return entries.length;
		},
	};
}

function decodeRawBytes(bytes: Uint8Array): Uint8Array {
	return bytes;
}

function encodeRawBytes(bytes: Uint8Array): Uint8Array {
	return bytes;
}

const tileCacheStore = createCacheStore<SampledTile>({
	version: TERRAIN_CACHE_VERSION,
	indexPath: TERRAIN_CACHE_INDEX_PATH,
	maxBytes: TERRAIN_CACHE_MAX_BYTES,
	memoryCache: memoryTileCache,
	encode: encodeTile,
	decode: decodeTile,
	deleteMemoryEntry: (key) => memoryTileCache.delete(key),
	onDecodeError: (key, error) => {
		if (isUnsupportedCacheVersionError(error)) {
			console.warn(
				`Discarding outdated cached terrain tile for ${key}: ${
					error instanceof Error ? error.message : "Unknown error"
				}`,
			);
		}
	},
});

const packCacheStore = createCacheStore<Uint8Array>({
	version: CIMAL_PACK_CACHE_VERSION,
	indexPath: CIMAL_PACK_CACHE_INDEX_PATH,
	maxBytes: CIMAL_PACK_CACHE_MAX_BYTES,
	memoryCache: memoryPackCache,
	encode: encodeRawBytes,
	decode: decodeRawBytes,
	deleteMemoryEntry: (key) => memoryPackCache.delete(key),
});

const hikingMapTileCacheStore = createCacheStore<Uint8Array>({
	version: HIKING_MAP_TILE_CACHE_VERSION,
	indexPath: HIKING_MAP_TILE_CACHE_INDEX_PATH,
	maxBytes: HIKING_MAP_TILE_CACHE_MAX_BYTES,
	memoryCache: memoryHikingMapTileCache,
	encode: encodeRawBytes,
	decode: decodeRawBytes,
	deleteMemoryEntry: (key) => memoryHikingMapTileCache.delete(key),
});

const registeredStores: Array<
	Pick<CacheStore<unknown>, "clear" | "loadIndex">
> = [tileCacheStore, packCacheStore, hikingMapTileCacheStore];

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
	return tileCacheStore.getMemory(key);
}

export async function getPersistentCachedTile(
	key: string,
): Promise<SampledTile | null> {
	return tileCacheStore.get(key);
}

export async function putCachedTile(
	key: string,
	path: string,
	tile: SampledTile,
): Promise<void> {
	await tileCacheStore.put(key, path, tile);
}

export async function getCachedPack(key: string): Promise<Uint8Array | null> {
	return packCacheStore.get(key);
}

export async function putCachedPack(
	key: string,
	path: string,
	packed: Uint8Array,
): Promise<void> {
	await packCacheStore.put(key, path, packed);
}

export async function invalidateCachedPack(key: string): Promise<void> {
	await packCacheStore.invalidate(key);
}

export async function getCachedHikingMapTile(
	key: string,
): Promise<Uint8Array | null> {
	return hikingMapTileCacheStore.get(key);
}

export async function putCachedHikingMapTile(
	key: string,
	path: string,
	bytes: Uint8Array,
): Promise<void> {
	await hikingMapTileCacheStore.put(key, path, bytes);
}

export async function clearTerrainCache(): Promise<number> {
	let clearedEntries = 0;
	for (const store of registeredStores) {
		clearedEntries += await store.clear();
	}
	return clearedEntries;
}

export async function showTerrainCacheStats(): Promise<void> {
	const [terrainIndex, packIndex, hikingMapTileIndex] = await Promise.all(
		registeredStores.map((store) => store.loadIndex()),
	);
	const terrainEntries = Object.values(terrainIndex.entries);
	const packEntries = Object.values(packIndex.entries);
	const hikingMapTileEntries = Object.values(hikingMapTileIndex.entries);
	const totalBytes =
		totalCacheBytes(terrainIndex) +
		totalCacheBytes(packIndex) +
		totalCacheBytes(hikingMapTileIndex);
	const totalMegabytes = (totalBytes / (1024 * 1024)).toFixed(1);

	await editor.flashNotification(
		`Terrain cache: ${terrainEntries.length} DEM tile samples, ${hikingMapTileEntries.length} hiking-map tiles, ${packEntries.length} .cimal packs, ${totalMegabytes} MB`,
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
