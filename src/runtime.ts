import { editor } from "@silverbulletmd/silverbullet/syscalls";

let didReloadCommands = false;

export async function syncGpxTerrainRuntime(): Promise<void> {
	if (!didReloadCommands) {
		didReloadCommands = true;
		try {
			await editor.reloadConfigAndCommands();
		} catch {
			// Ignore reload failures during startup.
		}
	}
}
