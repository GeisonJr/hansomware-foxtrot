import { data } from '../../../locales/brazil/states'

import { Validator } from './validator'

export class PE extends Validator {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected checkLength(ie: string): boolean {
		return data.PE.ieLength.includes(ie.length)
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
		return this.calcDigits(ie)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private calcDigits(ie: string): boolean {
		const length = ie.length
		const body = ie.substr(0, length - 2)

		const firstDig = this.calcDigit(body)
		const secondDig = this.calcDigit(body + firstDig)

		const posSecondDig = length - 1
		const posFirstDig = length - 2

		const ieAtFirstPos = parseInt(ie.charAt(posFirstDig), 10)
		const ieAtSecondPos = parseInt(ie.charAt(posSecondDig), 10)

		return ieAtFirstPos === firstDig && ieAtSecondPos === secondDig
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private calcDigit(body: string): number {
		let weight = body.length + 1
		let sum = 0
		body.split('').forEach((digit) => {
			sum += parseInt(digit, 10) * weight
			weight--
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
