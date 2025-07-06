import {reverseString} from "./reverseString.ts"

export function convertToBase(value: number, chars: string) {
	const base = chars.length

	let str = ""

	while (true) {
		const digit = value % base

		str += chars[digit]

		value = Math.floor(value / base)

		if (!value) break
	}

	return reverseString(str)
}
