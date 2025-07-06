type PrimitiveObject = Number|String|Boolean|BigInt
type Primitive = number|string|boolean|bigint|symbol

export function unwrapPrimitive(value: PrimitiveObject|Primitive): Primitive {
	if (value instanceof Number) {
		return value.valueOf()
	} else if (value instanceof String) {
		return value.valueOf()
	} else if (value instanceof Boolean) {
		return value.valueOf()
	} else if (value instanceof BigInt) {
		return value.valueOf()
	}

	return value
}
