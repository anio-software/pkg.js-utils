export function stripSuffix(str: string, suffix: string): string|false {
	// make sure `str` ends with `suffix`
	if (!str.endsWith(suffix)) {
		return false
	}

	return str.slice(0, str.length - suffix.length)
}
