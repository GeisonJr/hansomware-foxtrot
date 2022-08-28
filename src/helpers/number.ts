/**
 * @description Generate a checksum for a given base and weight.
 * @param base
 * @param weight
 * @example
 * ```ts
 * // CPF = '145.382.206-20'
 * checksum(1453822062, 11)
 * return 220
 * checksum('145.382.206-2', 11)
 * return 220
 * // CNPJ = '59.541.264/0001-03'
 * checksum(595412640001, [5,4,3,2,9,8,7,6,5,4,3,2])
 * return 177
 * checksum('59.541.264/0001', [5,4,3,2,9,8,7,6,5,4,3,2])
 * return 177
 * ```
 * @version 1.0.1
 * @since 1.0.0
 */
export function checksum(base: string | number, weight: number | number[]): number {
	const digits: string = onlyNumbers(base)

	let weights: number[]
	if (typeof weight === 'number') {
		weights = Array(digits.length)
			.fill(0)
			.map((_, i) => weight - i)
	} else {
		weights = weight
	}

	return digits
		.split('')
		.reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0)
}

/**
 * @description Returns only numbers from a input.
 * @param input
 * @example
 * ```ts
 * number('1a2b3c')
 * return '123'
 * number('145.382.206-20')
 * return '14538220620'
 * ```
 * @version 1.0.0
 * @since 1.0.0
 */
export function onlyNumbers(input: string | number): string {
	return String(input).replace(/[^\d]/g, '')
}

/**
 * @description Generates a random number with specified length.
 * @param length
 * @example
 * ```ts
 * random(5)
 * return '85926'
 * random(5)
 * return '61702'
 * random(10)
 * return '1307636084'
 * random(10)
 * return '0063385090'
 * ```
 * @version 1.0.1
 * @since 1.0.0
 */
export function random(length: number): string {
	return Array(length)
		.fill(1)
		.reduce((acc, number) => `${acc}${Math.random().toString().substring(2, 2 + number)}`, '')
}
