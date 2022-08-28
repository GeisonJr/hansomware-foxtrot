import { data } from '../../../locales/brazil/states'

import { Validator } from './validator'

export class AL extends Validator {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected checkLength(ie: string): boolean {
		return data.AL.ieLength.includes(ie.length)
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
		return this.digitCalc(ie)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private digitCalc(ie: string) {
		const position = 8
		let sum = 0
		let weight = 9
		for (let i = 0; i < position; i++) {
			sum += parseInt(ie.charAt(i), 10) * weight
			weight--
		}
		const product = sum * 10
		let digit = product - Math.floor(product / 11) * 11
		if (digit >= 10) {
			digit = 0
		}
		return digit === parseInt(ie.charAt(position), 10)
	}
}
