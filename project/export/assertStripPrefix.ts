import {stripPrefix} from "./stripPrefix.ts"

export function assertStripPrefix(str: string, prefix: string): string {
	const result = stripPrefix(str, prefix)

	if (result === false) {
		throw new Error(`Cannot strip '${prefix}' string '${str}' does not start with '${prefix}'.`)
	}

	return result
}
