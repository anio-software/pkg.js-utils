import {isString, isArray, isUndefined, isObject} from "@anio-software/pkg.is"

function replaceSingle(str: string, search: string|String, replace: string|String) {
	return str.split(
		search.toString()
	).join(
		replace.toString()
	)
}

export function searchAndReplace(str: string, search: string, replace: string): string
export function searchAndReplace(str: string, search: string[], replace: string): string
export function searchAndReplace(str: string, search: [string, string][]): string
export function searchAndReplace(str: string, search: Record<string, string>): string

export function searchAndReplace(
	str: string,
	search: unknown,
	replace?: unknown
): string {
	// first case
	if (isString(search) && isString(replace)) {
		return replaceSingle(str, search, replace)
	}
	// second case
	else if (isArray<string>(search) && isString(replace)) {
		for (const src of search) {
			str = replaceSingle(str, src, replace)
		}

		return str
	}
	// third case
	else if (isArray<[string, string]>(search) && isUndefined(replace)) {
		for (const [src, rpl] of search) {
			str = replaceSingle(str, src, rpl)
		}

		return str
	}
	// fourth case
	else if (isObject(search) && isUndefined(replace)) {
		for (const src in search) {
			if (!search.hasOwnProperty(src)) continue

			const rpl = (search as Record<string, string>)[src]

			if (!isString(rpl)) continue

			str = replaceSingle(str, src, rpl)
		}

		return str
	}

	throw new Error(`Illegal invocation of searchAndReplace, check your parameters.`)
}
