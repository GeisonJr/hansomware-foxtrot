import { data } from '../../../locales/brazil/states'

import { Validator } from './validator'

export class RJ extends Validator {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected checkLength(ie: string): boolean {
		return data.RJ.ieLength.includes(ie.length)
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
	private calcDigit(ie: string): boolean {
		const length = ie.length
		const position = length - 1
		const body = ie.substr(0, position)
		let sum = 0
		let weight = 2

		body.split('').forEach((digit) => {
			sum += parseInt(digit, 10) * weight
			weight--
			if (weight === 1) {
				weight = 7
			}
		})

		const rest = sum % 11
		let dig = 11 - rest

		if (dig >= 10) {
			dig = 0
		}

		return dig === parseInt(ie.charAt(position), 10)
	}
}
