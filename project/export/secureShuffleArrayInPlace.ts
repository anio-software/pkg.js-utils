import {shuffleArrayInPlace} from "./shuffleArrayInPlace.ts"
import {secureMathRandom} from "./secureMathRandom.ts"

export function secureShuffleArrayInPlace<T extends any[]>(
	array: T
): T {
	return shuffleArrayInPlace(array, secureMathRandom)
}
