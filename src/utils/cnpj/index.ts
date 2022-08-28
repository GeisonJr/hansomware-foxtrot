/* Helpers */
import { checksum, isLastChar, onlyNumbers, random } from '../../helpers'

/* Types */
import type { FormatOptions } from './types'

/* Constants */
export const CHECK_DIGITS_INDEXES = [12, 13]
export const DOT_INDEXES = [1, 4]
export const FIRST_CHECK_DIGIT_WEIGHTS = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
export const HYPHEN_INDEXES = [11]
export const LENGTH = 14
export const RESERVED_NUMBERS = [
	'00000000000000',
	'11111111111111',
	'22222222222222',
	'33333333333333',
	'44444444444444',
	'55555555555555',
	'66666666666666',
	'77777777777777',
	'88888888888888',
	'99999999999999'
]
export const SECOND_CHECK_DIGIT_WEIGHTS = [6, ...FIRST_CHECK_DIGIT_WEIGHTS]
export const SLASH_INDEXES = [7]

/**
 * @version 1.0.0
 * @param cnpj
 * @param options
 */
export function formatCNPJ(cnpj: string | number, options: FormatOptions = {}): string {
	let digits = onlyNumbers(cnpj)

	if (options.pad) {
		digits = digits.padStart(LENGTH, '0')
	}

	return digits
		.slice(0, LENGTH)
		.split('')
		.reduce((acc, digit, index) => {
			const result = `${acc}${digit}`

			if (!isLastChar(index, digits)) {
				if (DOT_INDEXES.includes(index)) return `${result}.`
				if (SLASH_INDEXES.includes(index)) return `${result}/`
				if (HYPHEN_INDEXES.includes(index)) return `${result}-`
			}

			return result
		}, '')
}

/**
 * @version 1.0.0
 */
export function generateCNPJ(): string {
	function checkDigit(digitMod: number) {
		return (digitMod < 2 ? 0 : 11 - digitMod)
			.toString()
	}

	const baseCNPJ = random(LENGTH - 2)

	const firstCheckDigitMod = checksum(baseCNPJ, FIRST_CHECK_DIGIT_WEIGHTS) % 11
	const firstCheckDigit = checkDigit(firstCheckDigitMod)

	const secondCheckDigitMod = checksum(baseCNPJ + firstCheckDigit, SECOND_CHECK_DIGIT_WEIGHTS) % 11
	const secondCheckDigit = checkDigit(secondCheckDigitMod)

	return `${baseCNPJ}${firstCheckDigit}${secondCheckDigit}`
}

/**
 * @version 1.0.1
 * @param cnpj
 */
export function isValidFormat(cnpj: string): boolean {
	return /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/.test(cnpj)
}

/**
 * @version 1.0.0
 * @param cpf
 */
export function isReservedNumber(cpf: string): boolean {
	return RESERVED_NUMBERS.includes(cpf)
}

// TODO: move to checksum helper
export function isValidChecksum(cnpj: string): boolean {
	const weights = [...FIRST_CHECK_DIGIT_WEIGHTS]

	return CHECK_DIGITS_INDEXES.every((i) => {
		if (i === CHECK_DIGITS_INDEXES[CHECK_DIGITS_INDEXES.length - 1]) {
			weights.unshift(6)
		}

		const mod =
			checksum(
				cnpj
					.slice(0, i)
					.split('')
					.reduce((acc, digit) => acc + digit, ''),
				weights
			) % 11

		return cnpj[i] === String(mod < 2 ? 0 : 11 - mod)
	})
}

/**
 * @version 1.0.0
 * @param cnpj
 */
export function isValidCNPJ(cnpj: string): boolean {
	if (!cnpj || typeof cnpj !== 'string') return false

	const numbers = onlyNumbers(cnpj)

	return isValidFormat(cnpj) && !isReservedNumber(numbers) && isValidChecksum(numbers)
}
