import { data } from '../../../locales/brazil/states'

import { Validator } from './validator'

export class GO extends Validator {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected checkLength(ie: string): boolean {
		return data.GO.ieLength.includes(ie.length)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected itStartsWith(ie: string): boolean {
		const beginWith = ['10', '11', '12']
		const begin = ie.substr(0, 2)
		return beginWith.indexOf(begin) >= 0
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
		const bodyInt = parseInt(body, 10)
		let sum = 0
		let weight = length

		body.split('').forEach((digit) => {
			sum += parseInt(digit, 10) * weight
			weight--
		})

		const rest = sum % 11
		let dig = 11 - rest

		if (dig >= 10) {
			if (dig === 11 && bodyInt >= 10103105 && bodyInt <= 10119997) {
				dig = 1
			} else {
				dig = 0
			}
		}

		return dig === parseInt(ie.charAt(position), 10)
	}
}
