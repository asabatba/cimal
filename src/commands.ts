import { codeWidget, editor } from "@silverbulletmd/silverbullet/syscalls";
import { GPX_WIDGET_LANGUAGE } from "./constants.ts";
import { normalizeGpxUrl } from "./input.ts";

function buildWidgetSnippet(gpxUrl: string): string {
	return `\n\`\`\`${GPX_WIDGET_LANGUAGE}\n${gpxUrl}\n\`\`\`\n`;
}

export async function insertGpxTerrainBlock(): Promise<void> {
	const response = await editor.prompt("GPX URL or space path");
	if (!response) {
		return;
	}

	const gpxUrl = normalizeGpxUrl(response);
	await editor.insertAtCursor(buildWidgetSnippet(gpxUrl), true);
	await codeWidget.refreshAll();
	await editor.flashNotification("Inserted cimal widget.");
}

export async function refreshGpxTerrainWidgets(): Promise<void> {
	await codeWidget.refreshAll();
	await editor.flashNotification("Refreshed cimal widgets.");
}
