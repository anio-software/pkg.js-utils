export type MathRandomFunction = () => number

//
// Code based on https://stackoverflow.com/a/2450976/2005038
//
export function shuffleArrayInPlace<T extends any[]>(
	array: T,
	mathRandomFunction?: MathRandomFunction|undefined
): T {
	const mathRandom = typeof mathRandomFunction === "function" ? mathRandomFunction : () => Math.random()
	let currentIndex = array.length
	let randomIndex: number = -1

	// While there remain elements to shuffle
	while (currentIndex > 0) {
		// Pick a remaining element
		randomIndex = Math.floor(mathRandom() * currentIndex);
		currentIndex--;

		// And swap it with the current element
		[
			array[currentIndex], array[randomIndex]
		] = [
			array[randomIndex], array[currentIndex]
		];
	}

	return array
}
