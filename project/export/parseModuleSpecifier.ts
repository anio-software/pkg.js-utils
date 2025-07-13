export function parseModuleSpecifier(moduleSpecifier: string): {
	scope: string|undefined
	packageName: string
	packageImportPath: string|undefined
} {
	let scope: string|undefined = undefined
	let packageName = ""
	let packageImportPath: string|undefined = undefined

	const tmp = moduleSpecifier.split("/")

	if (moduleSpecifier.startsWith("@")) {
		if (2 > tmp.length) {
			throw new Error(`Invalid module specifier '${moduleSpecifier}'.`)
		}

		scope = tmp[0].slice(1)
		packageName = tmp[1]

		if (tmp.length > 2) {
			packageImportPath = tmp.slice(2).join("/")
		}
	} else {
		packageName = tmp[0]

		if (tmp.length > 1) {
			packageImportPath = tmp.slice(1).join("/")
		}
	}

	return {scope, packageName, packageImportPath}
}
