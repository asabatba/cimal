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

export function normalizeSpacePath(input: string): string {
	const trimmed = input.trim();
	if (!trimmed) {
		throw new Error("A space path is required.");
	}

	return unwrapWikiLink(trimmed.replace(/^space\s*:\s*/i, ""));
}

export function normalizeGpxSource(input: string): string {
	const trimmed = input.trim();
	if (!trimmed) {
		throw new Error("A GPX URL or space path is required.");
	}

	const candidate = normalizeSpacePath(trimmed.replace(/^url\s*:\s*/i, ""));

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

export function normalizePackPath(input: string): string {
	const normalized = normalizeSpacePath(input);
	if (isRemoteUrl(normalized) || /\.gpx$/i.test(normalized)) {
		throw new Error(
			"Cimal widgets now accept only .cimal pack paths. Build a pack from the GPX first.",
		);
	}
	return normalized.endsWith(".cimal") ? normalized : `${normalized}.cimal`;
}

export function extractPackPath(bodyText: string): string {
	const lines = bodyText.split(/\r?\n/);
	const firstMeaningfulLine = lines
		.map((line) => line.trim())
		.find((line) => line && !line.startsWith("#"));

	if (!firstMeaningfulLine) {
		throw new Error("Add a .cimal pack path inside the widget body.");
	}

	return normalizePackPath(firstMeaningfulLine);
}
