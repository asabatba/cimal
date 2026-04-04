import {
	codeWidget,
	editor,
	space,
} from "@silverbulletmd/silverbullet/syscalls";
import { GPX_WIDGET_LANGUAGE } from "./constants.ts";
import {
	normalizeGpxSource,
	normalizeHikingMapResolution,
	normalizePackPath,
} from "./input.ts";
import { encodeTerrainPack } from "./pack.ts";
import { buildTerrainPayload } from "./terrain.ts";
import { DEFAULT_HIKING_MAP_RESOLUTION } from "./viewerConfig.ts";

function buildWidgetSnippet(packPath: string): string {
	return `\n\`\`\`${GPX_WIDGET_LANGUAGE}\n${packPath}\n\`\`\`\n`;
}

function defaultPackPathForSource(source: string): string {
	let sourceTail = source;
	if (/^https?:\/\//i.test(source)) {
		try {
			sourceTail = new URL(source).pathname;
		} catch {
			sourceTail = source;
		}
	}

	const baseName =
		sourceTail
			.split(/[\\/]/)
			.filter(Boolean)
			.pop()
			?.replace(/\.gpx$/i, "")
			?.replace(/\.[^.]+$/u, "") || "track";
	const safeBaseName = baseName.replaceAll(/[^A-Za-z0-9._-]+/g, "-");
	return `Library/Cimal/${safeBaseName}.cimal`;
}

export async function buildCimalPackFromGpx(): Promise<void> {
	const sourceResponse = await editor.prompt("GPX URL or space path");
	if (!sourceResponse) {
		return;
	}

	const gpxSource = normalizeGpxSource(sourceResponse);
	const outputResponse = await editor.prompt(
		"Output .cimal path",
		defaultPackPathForSource(gpxSource),
	);
	if (!outputResponse) {
		return;
	}

	const outputPath = normalizePackPath(outputResponse);
	const resolutionResponse = await editor.prompt(
		"Baked hiking-map resolution",
		DEFAULT_HIKING_MAP_RESOLUTION,
	);
	if (!resolutionResponse) {
		return;
	}

	const hikingMapResolution = normalizeHikingMapResolution(resolutionResponse);
	const payload = await buildTerrainPayload(gpxSource, { hikingMapResolution });
	const packed = encodeTerrainPack(payload);
	await space.writeFile(outputPath, packed);
	await editor.flashNotification(`Built ${outputPath}.`);
}

export async function insertGpxTerrainBlock(): Promise<void> {
	const response = await editor.prompt("Cimal pack path");
	if (!response) {
		return;
	}

	const packPath = normalizePackPath(response);
	await editor.insertAtCursor(buildWidgetSnippet(packPath), true);
	await codeWidget.refreshAll();
	await editor.flashNotification("Inserted cimal widget.");
}

export async function refreshGpxTerrainWidgets(): Promise<void> {
	await codeWidget.refreshAll();
	await editor.flashNotification("Refreshed cimal widgets.");
}
