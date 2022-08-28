import { data } from '../../../locales/brazil/states'

import { Validator } from './validator'

export class MG extends Validator {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected checkLength(ie: string): boolean {
		return data.MG.ieLength.includes(ie.length)
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
		const posFirstDigit = length - 2
		const posSecondDigit = length - 1
		const body = ie.substring(0, 11)
		const firstDigit = this.calcFirstDigit(body)
		const secondDigit = this.calcSecondDigit(body + firstDigit)
		const digitAtFirstDigit = parseInt(ie.charAt(posFirstDigit), 10)
		const digitAtSecondDigit = parseInt(ie.charAt(posSecondDigit), 10)

		return firstDigit === digitAtFirstDigit && secondDigit === digitAtSecondDigit
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private calcFirstDigit(ie: string): number {
		const body = ie.slice(0, 3) + 0 + ie.slice(3)
		let concat = ''
		body.split('').forEach((item, index) => {
			const weight = (index + 3) % 2 === 0 ? 2 : 1
			concat += parseInt(item, 10) * weight
		})
		let sum = 0
		concat.split('').forEach((item) => {
			sum += parseInt(item, 10)
		})
		const sumString = sum.toString()
		const length = sumString.length
		const lastChar = sumString.substr(length - 1, 1)
		const lastCharInt = parseInt(lastChar, 10)

		return lastCharInt === 0 ? 0 : 10 - lastCharInt
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private calcSecondDigit(body: string): number {
		let sum = 0
		let weight = 3

		body.split('').forEach((item) => {
			sum += parseInt(item, 10) * weight
			weight--
			if (weight === 1) {
				weight = 11
			}
		})
		const rest = sum % 11
		let digit = 11 - rest
		if (digit >= 10) {
			digit = 0
		}
		return digit
	}
}
