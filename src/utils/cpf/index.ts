/* Database */
import { data, states } from '../../locales/brazil/states'

/* Helpers */
import { checksum, isLastChar, onlyNumbers, random } from '../../helpers'

/* Types */
import type { Brazil } from '../../locales/brazil/types'
import type { FormatOptions } from './types'

/* Constants */
export const CHECK_DIGITS_INDEXES = [9, 10]
export const DOT_INDEXES = [2, 5]
export const HYPHEN_INDEXES = [8]
export const LENGTH = 11
export const RESERVED_NUMBERS = [
	'00000000000',
	'11111111111',
	'22222222222',
	'33333333333',
	'44444444444',
	'55555555555',
	'66666666666',
	'77777777777',
	'88888888888',
	'99999999999'
]

/**
 * @version 1.0.0
 * @param cpf
 * @param options
 */
export function formatCPF(cpf: string | number, options: FormatOptions = {}): string {
	let digits = onlyNumbers(cpf)

	if (options.pad) {
		digits = digits.padStart(LENGTH, '0')
	}

	return digits
		.slice(0, LENGTH)
		.split('')
		.reduce((acc, digit, i) => {
			const result = `${acc}${digit}`

			if (!isLastChar(i, digits)) {
				if (DOT_INDEXES.indexOf(i) >= 0) return `${result}.`
				if (HYPHEN_INDEXES.indexOf(i) >= 0) return `${result}-`
			}

			return result
		}, '')
}

/**
 * @version 1.0.0
 * @param state
 */
export function generateCPF(state?: Brazil.State): string {
	const stateCode = state && states.includes(state) ? data[state].code : random(1)
	const baseCPF = random(LENGTH - 3) + stateCode

	const firstCheckDigitMod = checksum(baseCPF, 10) % 11
	const firstCheckDigit = (firstCheckDigitMod < 2 ? 0 : 11 - firstCheckDigitMod).toString()

	const secondCheckDigitMod = checksum(baseCPF + firstCheckDigit, 11) % 11
	const secondCheckDigit = (secondCheckDigitMod < 2 ? 0 : 11 - secondCheckDigitMod).toString()

	return `${baseCPF}${firstCheckDigit.toString()}${secondCheckDigit.toString()}`
}

/**
 * @version 1.0.0
 * @param cpf
 */
export function isValidFormat(cpf: string): boolean {
	return /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(cpf)
}

/**
 * @version 1.0.0
 * @param cpf
 */
export function isReservedNumber(cpf: string): boolean {
	return RESERVED_NUMBERS.indexOf(cpf) >= 0
}

// TODO: move to checksum helper
export function isValidChecksum(cpf: string): boolean {
	return CHECK_DIGITS_INDEXES.every((i) => {
		const mod =
			checksum(
				cpf
					.slice(0, i)
					.split('')
					.reduce((acc, digit) => acc + digit, ''),
				i + 1
			) % 11

		return cpf[i] === String(mod < 2 ? 0 : 11 - mod)
	})
}

/**
 * @version 1.0.0
 * @param cpf
 */
export function isValidCPF(cpf: string): boolean {
	if (!cpf || typeof cpf !== 'string') return false

	const digits = onlyNumbers(cpf)

	return isValidFormat(cpf) && !isReservedNumber(digits) && isValidChecksum(digits)
}
