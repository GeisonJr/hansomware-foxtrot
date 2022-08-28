import { data } from '../../../locales/brazil/states'

import { Validator } from './validator'

export class AC extends Validator {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected checkLength(ie: string): boolean {
		return data.AC.ieLength.includes(ie.length)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected itStartsWith(ie: string): boolean {
		return ie.substr(0, 2) === '01'
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected calcIe(ie: string): boolean {
		return this.calcDigits(ie)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private calcDigits(ie: string): boolean {
		const length = ie.length
		const body = ie.substr(0, length - 2)
		const fDig = this.calcDigit(body)
		const sDig = this.calcDigit(body + fDig.toString())
		const pos2dig = ie.length - 1
		const pos1dig = ie.length - 2
		return parseInt(ie[pos1dig], 10) === fDig && parseInt(ie[pos2dig], 10) === sDig
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private calcDigit(body: string): number {
		let sum = 0
		let weight = body.length - 7
		body.split('').forEach((digit) => {
			sum += parseInt(digit, 10) * weight
			weight--
			if (weight === 1) {
				weight = 9
			}
		})
		const mod = 11
		const rest = sum % mod
		let dig = mod - rest
		if (dig >= 10) {
			dig = 0
		}
		return dig
	}
}
