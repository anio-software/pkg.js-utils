export function secureMathRandom(): number {
	const array = new Uint32Array(1)

	globalThis.crypto.getRandomValues(array)

	// returns a value from 0..1 (excluding 1) like Math.random()
	return array[0] / (0xFFFFFFFF + 1)
}
