export function measureFunctionExecutionTimeSync<
	T extends (...args: any[]) => any
>(
	fn: T,
	fnArgs: Parameters<T>
): {
	value: ReturnType<T>
	executionTime: number
} {
	const start = globalThis.performance.now()

	const value = fn(...fnArgs)

	return {
		value,
		executionTime: globalThis.performance.now() - start
	}
}
