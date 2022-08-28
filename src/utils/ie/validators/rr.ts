import { data } from '../../../locales/brazil/states'

import { Validator } from './validator'

export class RR extends Validator {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected checkLength(ie: string): boolean {
		return data.RR.ieLength.includes(ie.length)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected itStartsWith(ie: string): boolean {
		return ie.substr(0, 2) === '24'
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
		let weight = 1

		body.split('').forEach((digit) => {
			sum += parseInt(digit, 10) * weight
			weight++
		})

		const dig = sum % 9
		return dig === parseInt(ie.charAt(position), 10)
	}
}
