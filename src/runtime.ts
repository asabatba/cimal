import { codeWidget, editor } from "@silverbulletmd/silverbullet/syscalls";

let didReloadCommands = false;

export async function syncGpxTerrainRuntime(): Promise<void> {
	try {
		await codeWidget.refreshAll();
	} catch {
		// Ignore refresh failures during startup or non-page contexts.
	}

	if (!didReloadCommands) {
		didReloadCommands = true;
		try {
			await editor.reloadConfigAndCommands();
		} catch {
			// Ignore reload failures during startup.
		}
	}
}
