export function stripPrefix(str: string, prefix: string): string {
	// make sure `str` begins with `prefix`
	if (!str.startsWith(prefix)) {
		throw new Error(`Cannot strip '${prefix}' string '${str}' does not start with '${prefix}'.`)
	}

	return str.slice(prefix.length)
}
