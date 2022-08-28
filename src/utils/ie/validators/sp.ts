import { data } from '../../../locales/brazil/states'

import { Validator } from './validator'

export class SP extends Validator {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected checkLength(ie: string): boolean {
		return data.SP.ieLength.includes(ie.length)
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
		const positionFirstDigit = length - 4
		const positionSecondDigit = length - 1

		const firstDigit = this.calcFirstDigit(ie)
		const secondDigit = this.calcSecondDigit(ie)

		const ieAtFirstPos = parseInt(ie.charAt(positionFirstDigit), 10)
		const ieAtSecondPos = parseInt(ie.charAt(positionSecondDigit), 10)

		return firstDigit === ieAtFirstPos && secondDigit === ieAtSecondPos
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private calcFirstDigit(ie: string): number {
		const body = ie.substr(0, 8)
		const weight = [1, 3, 4, 5, 6, 7, 8, 10]
		let sum = 0
		body.split('').forEach((digit, index) => {
			sum += parseInt(digit, 10) * weight[index]
		})

		const dig = sum % 11
		const digit = dig.toString()

		return parseInt(digit.substr(digit.length - 1, 1), 10)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private calcSecondDigit(ie: string): number {
		const body = ie.substr(0, 11)
		let sum = 0
		let weight = 3

		body.split('').forEach((digit) => {
			sum += parseInt(digit, 10) * weight
			weight--
			if (weight === 1) {
				weight = 10
			}
		})
		const dig = sum % 11
		const digit = dig.toString()

		return parseInt(digit.substr(digit.length - 1, 1), 10)
	}
}
