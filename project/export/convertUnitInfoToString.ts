import type {UnitInfo} from "./UnitInfo.ts"
import {isNumber} from "@anio-software/pkg.is"

export function convertUnitInfoToString(info: UnitInfo, nDigits?: number) {
	const digits = isNumber(nDigits) ? nDigits : 2
	const [value, unit, isPrecise] = info

	if (isNaN(value)) {
		return "N/A"
	}

	if (isPrecise) {
		return `${value} ${unit}`
	}

	return `${value.toFixed(digits)} ${unit}`
}
