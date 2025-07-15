import type {UnitInfo} from "./UnitInfo.ts"

const KiB = 1024
const MiB = KiB * 1024
const GiB = MiB * 1024
const TiB = GiB * 1024

export function convertBytesToUnitInfo(size: number): UnitInfo {
	if (isNaN(size)) {
		return [NaN, "N/A", false]
	}

	if (KiB > size) {
		if (size === 1) {
			return [1, "Byte", true]
		}

		return div(1, "Bytes")
	} else if (MiB > size) {
		return div(KiB, "KiB")
	} else if (GiB > size) {
		return div(MiB, "MiB")
	} else if (TiB > size) {
		return div(GiB, "GiB")
	}

	return div(TiB, "TiB")

	function div(divisor: number, unit: string): UnitInfo {
		return [size / divisor, unit, size % divisor === 0]
	}
}
