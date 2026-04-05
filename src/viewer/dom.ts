export function escapeText(value: string): string {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

export function requireElement<T extends Element>(
	id: string,
	elementType: { new (): T },
): T {
	const element = document.getElementById(id);
	if (!(element instanceof elementType)) {
		throw new Error(`Missing required element #${id}.`);
	}
	return element;
}
