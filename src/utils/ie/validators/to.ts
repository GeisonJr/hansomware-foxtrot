import { data } from '../../../locales/brazil/states'

import { CE } from './ce'

export class TO extends CE {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected checkLength(ie: string): boolean {
		return data.TO.ieLength.includes(ie.length)
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
		return this.checkOld(ie) || this.checkNew(ie)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private checkOld(ie: string): boolean {
		const body = ie.slice(0, 2) + ie.slice(4)
		return this.oldStartsWith(ie) && this.calcOld(body)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private oldStartsWith(ie: string): boolean {
		const beginWith = ['01', '02', '03', '99']
		const begin = ie.substr(2, 2)
		return beginWith.indexOf(begin) >= 0
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private calcOld(ie: string): boolean {
		return this.calcDigit(ie)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private checkNew(ie: string): boolean {
		return this.calcNew(ie)
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	private calcNew(ie: string): boolean {
		const length = ie.length
		const position = length - 1
		const body = ie.substr(0, position)
		let sum = 0
		let weight = 9

		body.split('').forEach((digit) => {
			sum += parseInt(digit, 10) * weight
			weight--
		})

		const rest = sum % 11
		let dig = 11 - rest
		if (rest < 2) {
			dig = 0
		}

		return dig === parseInt(ie.charAt(position), 10)
	}
}
