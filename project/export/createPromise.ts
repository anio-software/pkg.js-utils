export function createPromise<T>(): {
	promise: Promise<T>
	resolve: (val: T) => void
	reject: (reason?: any) => void
} {
	let resolve: any;
	let reject: any;

	const promise: any = new Promise((promiseResolveFn, promiseRejectFn) => {
		resolve = promiseResolveFn
		reject = promiseRejectFn
	})

	return {
		promise,
		resolve,
		reject
	}
}
