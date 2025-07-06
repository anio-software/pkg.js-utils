export async function measureFunctionExecutionTime<
	T extends (...args: any[]) => any
>(
	fn: T,
	fnArgs: Parameters<T>
): Promise<{
	value: Awaited<ReturnType<T>>
	executionTime: number
}> {
	const start = globalThis.performance.now()

	const value = await fn(...fnArgs)

	return {
		value,
		executionTime: globalThis.performance.now() - start
	}
}
