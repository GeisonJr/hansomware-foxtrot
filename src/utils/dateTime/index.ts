/* Types */
import type Internationalization from '../internationalization/types'
import type { DateTime } from './types'

/* Constants */
// const MILISECONDS = 1000
const SECONDS = 1000
const MINUTES = 60
const HOURS = 60
const DAYS = 24
const WEEKS = 7
// const MONTHS = 365 / 12
// const YEARS = 365

// const UNITS = {
// 	year: DAYS * HOURS * MINUTES * SECONDS * YEARS,
// 	month: DAYS * HOURS * MINUTES * SECONDS * MONTHS,
// 	day: DAYS * HOURS * MINUTES * SECONDS,
// 	hour: HOURS * MINUTES * SECONDS,
// 	minute: MINUTES * SECONDS,
// 	second: SECONDS
// }

/**
 * @example
 * formatDateTime(new Date(), 'en-US') // Sunday, 28 August 2022 11:41:29.682
 * return '28/08/2021 11:41:29'
 * formatDateTime(new Date(), 'pt-BR') // Sunday, 28 August 2022 11:41:29.682
 * return '28/08/2021 11:41:29'
 * @version 1.0.0
 * @since 1.0.0
 */
export function formatDateTime(
	value?: DateTime.Value,
	locale?: Internationalization.Locale,
	options: DateTime.FormatOptions = {
		dateStyle: 'short',
		timeStyle: 'medium'
	}
): string {
	return dateTimeFormat(locale, options).format(value)
}

/**
 * @example
 * formatDate(new Date(), 'en-US') // Sunday, 28 August 2022 11:41:29.682
 * return '2021-08-28'
 * formatDate(new Date(), 'pt-BR') // Sunday, 28 August 2022 11:41:29.682
 * return '28/08/2021'
 * @version 1.0.0
 * @since 1.0.0
 */
export function formatDate(value?: DateTime.Value, locale?: Internationalization.Locale, options?: DateTime.FormatOptions): string {
	return formatDateTime(value, locale, options).split(' ')[0]
}

/**
 * @example
 * formatTime(new Date()) // Sunday, 28 August 2022 11:41:29.682
 * return '11:41:29'
 * @version 1.0.0
 * @since 1.0.0
 */
export function formatTime(value?: DateTime.Value, locale?: Internationalization.Locale, options?: DateTime.FormatOptions): string {
	return formatDateTime(value, locale, options).split(' ')[1]
}

/**
 * @example
 * formatToParts() // Sunday, 28 August 2022 11:41:29.682
 * return [
 * 	{ type: "day", value: "28" },
 * 	{ type: "literal", value: "/" },
 * 	{ type: "month", value: "08" },
 * 	{ type: "literal", value: "/" },
 * 	{ type: "year", value: "2022" },
 * ]
 * @version 1.0.0
 * @since 1.0.0
 */
export function formatToParts(value?: DateTime.Value, locale?: Internationalization.Locale, options?: DateTime.FormatToPartsOptions): Intl.DateTimeFormatPart[] {
	return dateTimeFormat(locale, options).formatToParts(value)
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @version 1.0.0
 * @since 1.0.0
 */
function dateTimeFormat(locale?: Internationalization.Locale, options?: DateTime.DateTimeFormatOptions): Intl.DateTimeFormat {
	return new Intl.DateTimeFormat(locale, options)
}

// /**
//  * @default
//  * Date.now()
//  * @version 1.0.1
//  * @since 1.0.0
//  */
// export function formatDateTimeDiff(initial: DateTime.Value, final: DateTime.Value, locale?: Internationalization.Locale, options?: DateTime.FormatDiffOptions): string {
// 	const elapsed = getDiff(initial, final, { absolute: true })
// 	const rounded = getDiff(initial, final)

// 	for (const key in UNITS) {
// 		const unit = key as keyof typeof UNITS
// 		console.log(unit)
// 		console.log(elapsed > UNITS[unit])

// 		if (elapsed > UNITS[unit] || unit === 'second') {
// 			return relativeTimeFormat(locale, options).format(Math.round(rounded / UNITS[unit]), unit)
// 		}
// 	}

// 	return ''
// }

/**
 * @version 1.0.0
 * @since 1.0.0
 */
export function getDiff(initial: DateTime.Value, final: DateTime.Value = Date.now(), options?: DateTime.GetDiffOptions): number {
	if (initial instanceof Date) {
		initial = initial.getTime()
	}

	if (final instanceof Date) {
		final = final.getTime()
	}

	if (options?.absolute) {
		return Math.abs(initial - final)
	}
	return initial - final
}

// /**
//  * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
//  * @version 1.0.1
//  * @since 1.0.0
//  */
// function relativeTimeFormat(locale?: Internationalization.Locale, options?: DateTime.RelativeTimeFormatOptions): Intl.RelativeTimeFormat {
// 	return new Intl.RelativeTimeFormat(locale, options)
// }

/**
 * @example
 * toMiliseconds(5, 'second')
 * return 5000 // miliseconds
 * @throws {Error} Will throw an error if the unit is invalid
 * @version 1.0.0
 * @since 1.0.0
 */
export function toMiliseconds(value: number, unit: DateTime.Unit): number {
	if (unit === 'milisecond') {
		return value
	}

	if (unit === 'week') {
		return value * SECONDS * MINUTES * HOURS * DAYS * WEEKS
	}

	if (unit === 'day') {
		return value * SECONDS * MINUTES * HOURS * DAYS
	}

	if (unit === 'hour') {
		return value * SECONDS * MINUTES * HOURS
	}

	if (unit === 'minute') {
		return value * SECONDS * MINUTES
	}

	if (unit === 'second') {
		return value * SECONDS
	}

	throw new Error(`Invalid unit: ${unit}`)
}

/**
 * @example
 * toSecond(5000, 'milisecond')
 * return 5 // seconds
 * @throws {Error} Will throw an error if the unit is invalid
 * @version 1.0.0
 * @since 1.0.0
 */
export function toSecond(value: number, unit: DateTime.Unit): number {
	if (unit === 'second') {
		return value
	}

	return toMiliseconds(value, unit) / SECONDS
}

/**
 * @example
 * toMinute(240, 'second')
 * return 4 // minutes
 * @throws {Error} Will throw an error if the unit is invalid
 * @version 1.0.0
 * @since 1.0.0
 */
export function toMinute(value: number, unit: DateTime.Unit): number {
	if (unit === 'minute') {
		return value
	}

	return toMiliseconds(value, unit) / SECONDS / MINUTES
}

/**
 * @example
 * toHour(120, 'minute')
 * return 2 // hours
 * @throws {Error} Will throw an error if the unit is invalid
 * @version 1.0.0
 * @since 1.0.0
 */
export function toHour(value: number, unit: DateTime.Unit): number {
	if (unit === 'hour') {
		return value
	}

	return toMiliseconds(value, unit) / SECONDS / MINUTES / HOURS
}

/**
 * @example
 * toDay(48, 'hour')
 * return 2 // days
 * @throws {Error} Will throw an error if the unit is invalid
 * @version 1.0.0
 * @since 1.0.0
 */
export function toDay(value: number, unit: DateTime.Unit): number {
	if (unit === 'day') {
		return value
	}

	return toMiliseconds(value, unit) / SECONDS / MINUTES / HOURS / DAYS
}

/**
 * @example
 * toWeek(14, 'day')
 * return 2 // weeks
 * @throws {Error} Will throw an error if the unit is invalid
 * @version 1.0.0
 * @since 1.0.0
 */
export function toWeek(value: number, unit: DateTime.Unit): number {
	if (unit === 'week') {
		return value
	}

	return toMiliseconds(value, unit) / SECONDS / MINUTES / HOURS / DAYS / WEEKS
}
