export function getOrCreateError(value: unknown): Error {
	if (value instanceof Error) {
		return value
	}

	let serialized = "<unable to serialize value>"

	try {
		serialized = JSON.stringify(value)
	} catch {}

	return new Error(`getOrCreateError: ${serialized}`)
}
