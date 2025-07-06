import {shuffleArrayInPlace} from "./shuffleArrayInPlace.ts"
import {secureMathRandom} from "./secureMathRandom.ts"

export function secureShuffleArrayInPlace<T extends any[]>(
	array: T,
	allowInsecureMathRandomAsFallback?: boolean
): T {
	return shuffleArrayInPlace(array, () => {
		return secureMathRandom(allowInsecureMathRandomAsFallback === true)
	})
}
