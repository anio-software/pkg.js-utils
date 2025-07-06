export function stripPrefix(str: string, prefix: string): string|false {
	// make sure `str` begins with `prefix`
	if (!str.startsWith(prefix)) {
		return false
	}

	return str.slice(prefix.length)
}
