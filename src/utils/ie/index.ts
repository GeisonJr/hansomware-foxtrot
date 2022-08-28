/* Helpers */
import { onlyNumbers } from '../../helpers'

/* Validadtor */
import { STATE } from './contants'

/* Types */
import type { Brazil } from '../../locales/brazil/types'

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function isValidIE(uf: Brazil.State, ie: string) {
	const digits = onlyNumbers(ie)
	const state = new STATE[uf]()

	return state.isValid(digits)
}
