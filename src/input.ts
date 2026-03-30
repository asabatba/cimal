function isRemoteUrl(candidate: string): boolean {
	return /^https?:\/\//i.test(candidate);
}

function unwrapWikiLink(candidate: string): string {
	const trimmed = candidate.trim();
	const match = /^\[\[([^\]|]+)(?:\|[^\]]+)?\]\]$/.exec(trimmed);
	if (!match) {
		return trimmed;
	}
	return match[1].trim();
}

export function normalizeGpxSource(input: string): string {
	const trimmed = input.trim();
	if (!trimmed) {
		throw new Error("A GPX URL or space path is required.");
	}

	const candidate = unwrapWikiLink(
		trimmed.replace(/^url\s*:\s*/i, "").replace(/^space\s*:\s*/i, ""),
	);

	if (!isRemoteUrl(candidate)) {
		return candidate;
	}

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

export function normalizeGpxUrl(input: string): string {
	return normalizeGpxSource(input);
}

export function extractGpxSource(bodyText: string): string {
	const lines = bodyText.split(/\r?\n/);
	const firstMeaningfulLine = lines
		.map((line) => line.trim())
		.find((line) => line && !line.startsWith("#"));

	if (!firstMeaningfulLine) {
		throw new Error("Add a GPX URL or space path inside the widget body.");
	}

	return normalizeGpxSource(firstMeaningfulLine);
}

export function extractGpxUrl(bodyText: string): string {
	return extractGpxSource(bodyText);
}
