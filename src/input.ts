export function normalizeGpxUrl(input: string): string {
	const trimmed = input.trim();
	if (!trimmed) {
		throw new Error("A GPX URL is required.");
	}

	const candidate = trimmed.replace(/^url\s*:\s*/i, "");
	const url = new URL(candidate);

	if (url.hostname === "github.com") {
		const parts = url.pathname.split("/").filter(Boolean);
		const blobIndex = parts.indexOf("blob");
		if (parts.length >= 5 && blobIndex === 2) {
			const owner = parts[0];
			const repo = parts[1];
			const branch = parts[3];
			const filePath = parts.slice(4).join("/");
			return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
		}
	}

	return url.toString();
}

export function extractGpxUrl(bodyText: string): string {
	const lines = bodyText.split(/\r?\n/);
	const firstMeaningfulLine = lines
		.map((line) => line.trim())
		.find((line) => line && !line.startsWith("#"));

	if (!firstMeaningfulLine) {
		throw new Error("Add a GPX URL inside the widget body.");
	}

	return normalizeGpxUrl(firstMeaningfulLine);
}
