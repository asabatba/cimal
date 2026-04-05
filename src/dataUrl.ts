export function dataUrlToBytes(dataUrl: string): Uint8Array {
	const parts = dataUrl.split(",", 2);
	if (parts.length !== 2) {
		throw new Error("Invalid baked hiking-map texture data URL.");
	}

	const [, base64Payload] = parts;
	if (typeof atob !== "function") {
		throw new Error("Base64 decoding is unavailable in this runtime.");
	}

	const binary = atob(base64Payload);
	const bytes = new Uint8Array(binary.length);
	for (let index = 0; index < binary.length; index += 1) {
		bytes[index] = binary.charCodeAt(index);
	}
	return bytes;
}

export function bytesToDataUrl(bytes: Uint8Array, mimeType: string): string {
	if (typeof btoa !== "function") {
		throw new Error("Base64 encoding is unavailable in this runtime.");
	}

	let binary = "";
	for (let index = 0; index < bytes.length; index += 1) {
		binary += String.fromCharCode(bytes[index]);
	}
	return `data:${mimeType};base64,${btoa(binary)}`;
}

export function dataUrlMimeType(dataUrl: string): string {
	const match = /^data:([^;,]+)[;,]/i.exec(dataUrl);
	return match?.[1] ?? "application/octet-stream";
}
