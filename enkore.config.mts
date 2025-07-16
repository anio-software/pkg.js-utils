import {defineConfig} from "@anio-software/enkore"
import {defineTargetOptions} from "@anio-software/enkore.target-js-hybrid-lite"

export const config: unknown = defineConfig({
	target: {
		name: "js-hybrid-lite",
		options: defineTargetOptions({
			_disableRuntimeCodeInjection: true,

			registry: {
				"npmjs": {
					url: "https://registry.npmjs.org",
					authTokenFilePath: "secrets/npm_auth_token"
				},
				"anioSoftware": {
					url: "https://npm-registry.anio.software",
					authTokenFilePath: "secrets/anio_npm_auth_token",
					clientPrivateKeyFilePath: "secrets/npm_client.pkey",
					clientCertificateFilePath: "secrets/npm_client.cert"
				}
			},

			packageSourceRegistryByScope: {
				"@anio-software": {
					registry: "anioSoftware"
				}
			},

			publish: [{
				registry: "anioSoftware"
			}, {
				registry: "npmjs",
				publishWithProvenance: true
			}]
		})
	}
})
