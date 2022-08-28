import { data } from '../../../locales/brazil/states'

import { Validator } from './validator'

export class AM extends Validator {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected checkLength(ie: string): boolean {
		return data.AM.ieLength.includes(ie.length)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected itStartsWith(ie: string): boolean {
		return Boolean(ie)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected calcIe(ie: string): boolean {
		return this.calcDigit(ie)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected calcDigit(ie: string): boolean {
		const length = ie.length
		const position = length - 1
		const body = ie.substr(0, position)
		let dig = 0
		let sum = 0
		let weight = length
		body.split('').forEach((digit) => {
			sum += parseInt(digit, 10) * weight
			weight--
		})
		if (sum < 11) {
			dig = 11 - sum
		} else {
			const rest = sum % 11
			dig = 11 - rest
			if (dig >= 10) {
				dig = 0
			}
		}
		return dig === parseInt(ie.charAt(position), 10)
	}
}
