export function isMath(text = "") {
	return text.startsWith("$$") && text.endsWith("$$");
}