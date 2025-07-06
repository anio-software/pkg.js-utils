import {stripSuffix} from "./stripSuffix.ts"

export function assertStripSuffix(str: string, suffix: string): string {
	const result = stripSuffix(str, suffix)

	if (result === false) {
		throw new Error(`Cannot strip '${suffix}' string '${str}' does not end with '${suffix}'.`)
	}

	return result
}
