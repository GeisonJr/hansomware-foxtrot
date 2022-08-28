/* Constants */
import { HYPHEN_INDEXES, LENGTH } from './constants'

/* Helpers */
import { isLastChar, onlyNumbers } from '../../helpers'

/**
 * @version 1.0.0
 * @param cep
 */
function isValidLength(cep: string) {
	return cep.length === LENGTH
}

/**
 * @version 1.0.0
 * @param cep
 */
export function formatCEP(cep: string): string {
	const digits = onlyNumbers(cep)

	return digits
		.slice(0, LENGTH)
		.split('')
		.reduce((acc, digit, i) => {
			const result = `${acc}${digit}`

			if (!isLastChar(i, digits)) {
				if (HYPHEN_INDEXES.indexOf(i) >= 0) return `${result}-`
			}

			return result
		}, '')
}

/**
 * @version 1.0.1
 * @param cep
 */
export function isValidCEP(cep: string) {
	if (cep && typeof cep === 'string') {
		const digits = onlyNumbers(cep)

		return isValidLength(digits)
	}

	return false
}
