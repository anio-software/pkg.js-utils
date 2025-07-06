import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"
import {getOrCreateError} from "#~export/getOrCreateError.ts"

// reference: https://stackoverflow.com/questions/5651789/is-math-random-cryptographically-secure
export function __implementation(
	contextOptions: EnkoreJSRuntimeContextOptions,
	allowInsecureMathRandomAsFallback?: boolean
): number {
	const context = createContext(contextOptions, 0)

	try {
		if ("crypto" in globalThis) {
			const crypto = (globalThis as any).crypto
			const array = new Uint32Array(1)

			crypto.getRandomValues(array)

			// returns a value from 0..1 (excluding 1) like Math.random()
			return array[0] / (0xFFFFFFFF + 1)
		} else {
			throw new Error(`'globalThis.crypto' is undefined.`)
		}
	} catch (e) {
		if (allowInsecureMathRandomAsFallback === true) {
			context.log.warn(`Using insecure Math.random() as fallback.`)

			return Math.random()
		}

		const error = getOrCreateError(e)

		throw new Error(`Unable to generate secure random number: ${error.message}.`)
	}
}
