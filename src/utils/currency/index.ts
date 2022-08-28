/* Types */
import type Internationalization from '../internationalization/types'
import type { Currency } from './types'

/**
 * @example
 * format(123456.78, 'pt-BR', { currency: 'BRL' })
 * return 'R$ 123.456,78'
 * format(123456.78, 'en-US', { currency: 'USD' })
 * return '$123,456.78'
 * @version 1.0.0
 * @since 1.0.0
 */
export function formatCurrency(value: number, locale?: Internationalization.Locale, options?: Currency.FormatOptions): string {
	// Get formated value
	return numberFormat(locale, options).format(value)
}

/**
 * @version 1.0.0
 * @since 1.0.0
 */
function formatToParts(value: number, locale?: Internationalization.Locale, options?: Currency.FormatToPartsOptions): Intl.NumberFormatPart[] {
	// Get parts of value
	return numberFormat(locale, options).formatToParts(value)
}

/**
 * @example
 * unformat('R$ 123.456,78', 'pt-BR', { currency: 'BRL' })
 * return 123456.78
 * unformat('$123,456.78', 'en-US', { currency: 'USD' })
 * return 123456.78
 * @version 1.0.0
 * @since 1.0.0
 */
export function unformatCurrency(value: string, locale?: Internationalization.Locale, options?: Currency.UnformatOptions): number {
	// Get separators
	const formattedValue = formatToParts(1000, locale, options)

	const currencySeparator = formattedValue
		.find(({ type }) => type === 'currency')?.value || ''
	const literalSeparator = formattedValue
		.find(({ type }) => type === 'literal')?.value || ''
	const thousandSeparator = formattedValue
		.find(({ type }) => type === 'group')?.value || ''
	const decimalSeparator = formattedValue
		.find(({ type }) => type === 'decimal')?.value || ''

	// Parse to float
	const parsed = parseFloat(value
		.replace(currencySeparator, '')
		.replace(literalSeparator, '')
		.replaceAll(thousandSeparator, '')
		.replace(decimalSeparator, '.'))

	// Return a number
	return Number.isNaN(parsed) ? 0 : parsed
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
 * @todo Transfer to another util
 * @version 1.0.0
 * @since 1.0.0
 */
function numberFormat(locale?: Internationalization.Locale, options?: Currency.NumberFormatOptions): Intl.NumberFormat {
	// Default options
	const defaultOptions = {
		style: 'currency'
	} as Currency.NumberFormatOptions

	// Merge options
	options = { ...defaultOptions, ...options }

	return new Intl.NumberFormat(locale, options)
}
