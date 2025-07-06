export function stripSuffix(str: string, suffix: string): string {
	// make sure `str` ends with `suffix`
	if (!str.endsWith(suffix)) {
		throw new Error(`Cannot strip '${suffix}' string '${str}' does not end with '${suffix}'.`)
	}

	return str.slice(0, str.length - suffix.length)
}
