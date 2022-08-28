/* Utils */
import { formatCurrency, unformatCurrency } from '../../src/utils/currency'

/* Types */
import type { Currency } from '../../src/utils/currency/types'

describe('format locale pt-BR', () => {
	const locale = 'pt-BR'

	test('should format currency into BRL', () => {
		// Set options to currency into BRL
		const options: Currency.FormatOptions = {
			currency: 'BRL'
		}

		expect(formatCurrency(0, locale, options)).toBe('R$\xa00,00')
		expect(formatCurrency(0.1, locale, options)).toBe('R$\xa00,10')
		expect(formatCurrency(0.01, locale, options)).toBe('R$\xa00,01')
		expect(formatCurrency(0.001, locale, options)).toBe('R$\xa00,00')
		expect(formatCurrency(1, locale, options)).toBe('R$\xa01,00')
		expect(formatCurrency(1.1, locale, options)).toBe('R$\xa01,10')
		expect(formatCurrency(1.01, locale, options)).toBe('R$\xa01,01')
		expect(formatCurrency(1.001, locale, options)).toBe('R$\xa01,00')
		expect(formatCurrency(10, locale, options)).toBe('R$\xa010,00')
		expect(formatCurrency(10.1, locale, options)).toBe('R$\xa010,10')
		expect(formatCurrency(10.01, locale, options)).toBe('R$\xa010,01')
		expect(formatCurrency(10.001, locale, options)).toBe('R$\xa010,00')
		expect(formatCurrency(1000, locale, options)).toBe('R$\xa01.000,00')
		expect(formatCurrency(1000.1, locale, options)).toBe('R$\xa01.000,10')
		expect(formatCurrency(1000.01, locale, options)).toBe('R$\xa01.000,01')
		expect(formatCurrency(1000.001, locale, options)).toBe('R$\xa01.000,00')
	})

	test('should format currency into USD', () => {
		// Set options to currency into USD
		const options: Currency.FormatOptions = {
			currency: 'USD'
		}

		expect(formatCurrency(0, locale, options)).toBe('US$\xa00,00')
		expect(formatCurrency(0.1, locale, options)).toBe('US$\xa00,10')
		expect(formatCurrency(0.01, locale, options)).toBe('US$\xa00,01')
		expect(formatCurrency(0.001, locale, options)).toBe('US$\xa00,00')
		expect(formatCurrency(1, locale, options)).toBe('US$\xa01,00')
		expect(formatCurrency(1.1, locale, options)).toBe('US$\xa01,10')
		expect(formatCurrency(1.01, locale, options)).toBe('US$\xa01,01')
		expect(formatCurrency(1.001, locale, options)).toBe('US$\xa01,00')
		expect(formatCurrency(10, locale, options)).toBe('US$\xa010,00')
		expect(formatCurrency(10.1, locale, options)).toBe('US$\xa010,10')
		expect(formatCurrency(10.01, locale, options)).toBe('US$\xa010,01')
		expect(formatCurrency(10.001, locale, options)).toBe('US$\xa010,00')
		expect(formatCurrency(1000, locale, options)).toBe('US$\xa01.000,00')
		expect(formatCurrency(1000.1, locale, options)).toBe('US$\xa01.000,10')
		expect(formatCurrency(1000.01, locale, options)).toBe('US$\xa01.000,01')
		expect(formatCurrency(1000.001, locale, options)).toBe('US$\xa01.000,00')
	})

	test('should format with different precision into BRL', () => {
		// Set options to precision into BRL
		const options: Currency.FormatOptions = {
			currency: 'BRL',
			minimumFractionDigits: 3
		}

		expect(formatCurrency(0, locale, options)).toBe('R$\xa00,000')
		expect(formatCurrency(0.1, locale, options)).toBe('R$\xa00,100')
		expect(formatCurrency(0.01, locale, options)).toBe('R$\xa00,010')
		expect(formatCurrency(0.001, locale, options)).toBe('R$\xa00,001')
		expect(formatCurrency(1, locale, options)).toBe('R$\xa01,000')
		expect(formatCurrency(1.1, locale, options)).toBe('R$\xa01,100')
		expect(formatCurrency(1.01, locale, options)).toBe('R$\xa01,010')
		expect(formatCurrency(1.001, locale, options)).toBe('R$\xa01,001')
		expect(formatCurrency(10, locale, options)).toBe('R$\xa010,000')
		expect(formatCurrency(10.1, locale, options)).toBe('R$\xa010,100')
		expect(formatCurrency(10.01, locale, options)).toBe('R$\xa010,010')
		expect(formatCurrency(10.001, locale, options)).toBe('R$\xa010,001')
		expect(formatCurrency(1000, locale, options)).toBe('R$\xa01.000,000')
		expect(formatCurrency(1000.1, locale, options)).toBe('R$\xa01.000,100')
		expect(formatCurrency(1000.01, locale, options)).toBe('R$\xa01.000,010')
		expect(formatCurrency(1000.001, locale, options)).toBe('R$\xa01.000,001')
	})

	test('should format with different precision into USD', () => {
		// Set options to precision into USD
		const options: Currency.FormatOptions = {
			currency: 'USD',
			minimumFractionDigits: 3
		}

		expect(formatCurrency(0, locale, options)).toBe('US$\xa00,000')
		expect(formatCurrency(0.1, locale, options)).toBe('US$\xa00,100')
		expect(formatCurrency(0.01, locale, options)).toBe('US$\xa00,010')
		expect(formatCurrency(0.001, locale, options)).toBe('US$\xa00,001')
		expect(formatCurrency(1, locale, options)).toBe('US$\xa01,000')
		expect(formatCurrency(1.1, locale, options)).toBe('US$\xa01,100')
		expect(formatCurrency(1.01, locale, options)).toBe('US$\xa01,010')
		expect(formatCurrency(1.001, locale, options)).toBe('US$\xa01,001')
		expect(formatCurrency(10, locale, options)).toBe('US$\xa010,000')
		expect(formatCurrency(10.1, locale, options)).toBe('US$\xa010,100')
		expect(formatCurrency(10.01, locale, options)).toBe('US$\xa010,010')
		expect(formatCurrency(10.001, locale, options)).toBe('US$\xa010,001')
		expect(formatCurrency(1000, locale, options)).toBe('US$\xa01.000,000')
		expect(formatCurrency(1000.1, locale, options)).toBe('US$\xa01.000,100')
		expect(formatCurrency(1000.01, locale, options)).toBe('US$\xa01.000,010')
		expect(formatCurrency(1000.001, locale, options)).toBe('US$\xa01.000,001')
	})
})

describe('format locale en-US', () => {
	const locale = 'en-US'

	test('should format currency into BRL', () => {
		// Set options to currency into BRL
		const options: Currency.FormatOptions = {
			currency: 'BRL'
		}

		expect(formatCurrency(0, locale, options)).toBe('R$0.00')
		expect(formatCurrency(0.1, locale, options)).toBe('R$0.10')
		expect(formatCurrency(0.01, locale, options)).toBe('R$0.01')
		expect(formatCurrency(0.001, locale, options)).toBe('R$0.00')
		expect(formatCurrency(1, locale, options)).toBe('R$1.00')
		expect(formatCurrency(1.1, locale, options)).toBe('R$1.10')
		expect(formatCurrency(1.01, locale, options)).toBe('R$1.01')
		expect(formatCurrency(1.001, locale, options)).toBe('R$1.00')
		expect(formatCurrency(10, locale, options)).toBe('R$10.00')
		expect(formatCurrency(10.1, locale, options)).toBe('R$10.10')
		expect(formatCurrency(10.01, locale, options)).toBe('R$10.01')
		expect(formatCurrency(10.001, locale, options)).toBe('R$10.00')
		expect(formatCurrency(1000, locale, options)).toBe('R$1,000.00')
		expect(formatCurrency(1000.1, locale, options)).toBe('R$1,000.10')
		expect(formatCurrency(1000.01, locale, options)).toBe('R$1,000.01')
		expect(formatCurrency(1000.001, locale, options)).toBe('R$1,000.00')
	})

	test('should format currency into USD', () => {
		// Set options to currency into USD
		const options: Currency.FormatOptions = {
			currency: 'USD'
		}

		expect(formatCurrency(0, locale, options)).toBe('$0.00')
		expect(formatCurrency(0.1, locale, options)).toBe('$0.10')
		expect(formatCurrency(0.01, locale, options)).toBe('$0.01')
		expect(formatCurrency(0.001, locale, options)).toBe('$0.00')
		expect(formatCurrency(1, locale, options)).toBe('$1.00')
		expect(formatCurrency(1.1, locale, options)).toBe('$1.10')
		expect(formatCurrency(1.01, locale, options)).toBe('$1.01')
		expect(formatCurrency(1.001, locale, options)).toBe('$1.00')
		expect(formatCurrency(10, locale, options)).toBe('$10.00')
		expect(formatCurrency(10.1, locale, options)).toBe('$10.10')
		expect(formatCurrency(10.01, locale, options)).toBe('$10.01')
		expect(formatCurrency(10.001, locale, options)).toBe('$10.00')
		expect(formatCurrency(1000, locale, options)).toBe('$1,000.00')
		expect(formatCurrency(1000.1, locale, options)).toBe('$1,000.10')
		expect(formatCurrency(1000.01, locale, options)).toBe('$1,000.01')
		expect(formatCurrency(1000.001, locale, options)).toBe('$1,000.00')
	})

	test('should format with different precision into BRL', () => {
		// Set options to precision into BRL
		const options: Currency.FormatOptions = {
			currency: 'BRL',
			minimumFractionDigits: 3
		}

		expect(formatCurrency(0, locale, options)).toBe('R$0.000')
		expect(formatCurrency(0.1, locale, options)).toBe('R$0.100')
		expect(formatCurrency(0.01, locale, options)).toBe('R$0.010')
		expect(formatCurrency(0.001, locale, options)).toBe('R$0.001')
		expect(formatCurrency(1, locale, options)).toBe('R$1.000')
		expect(formatCurrency(1.1, locale, options)).toBe('R$1.100')
		expect(formatCurrency(1.01, locale, options)).toBe('R$1.010')
		expect(formatCurrency(1.001, locale, options)).toBe('R$1.001')
		expect(formatCurrency(10, locale, options)).toBe('R$10.000')
		expect(formatCurrency(10.1, locale, options)).toBe('R$10.100')
		expect(formatCurrency(10.01, locale, options)).toBe('R$10.010')
		expect(formatCurrency(10.001, locale, options)).toBe('R$10.001')
		expect(formatCurrency(1000, locale, options)).toBe('R$1,000.000')
		expect(formatCurrency(1000.1, locale, options)).toBe('R$1,000.100')
		expect(formatCurrency(1000.01, locale, options)).toBe('R$1,000.010')
		expect(formatCurrency(1000.001, locale, options)).toBe('R$1,000.001')
	})

	test('should format with different precision into USD', () => {
		// Set options options to precision into USD
		const options: Currency.FormatOptions = {
			currency: 'USD',
			minimumFractionDigits: 3
		}

		expect(formatCurrency(0, locale, options)).toBe('$0.000')
		expect(formatCurrency(0.1, locale, options)).toBe('$0.100')
		expect(formatCurrency(0.01, locale, options)).toBe('$0.010')
		expect(formatCurrency(0.001, locale, options)).toBe('$0.001')
		expect(formatCurrency(1, locale, options)).toBe('$1.000')
		expect(formatCurrency(1.1, locale, options)).toBe('$1.100')
		expect(formatCurrency(1.01, locale, options)).toBe('$1.010')
		expect(formatCurrency(1.001, locale, options)).toBe('$1.001')
		expect(formatCurrency(10, locale, options)).toBe('$10.000')
		expect(formatCurrency(10.1, locale, options)).toBe('$10.100')
		expect(formatCurrency(10.01, locale, options)).toBe('$10.010')
		expect(formatCurrency(10.001, locale, options)).toBe('$10.001')
		expect(formatCurrency(1000, locale, options)).toBe('$1,000.000')
		expect(formatCurrency(1000.1, locale, options)).toBe('$1,000.100')
		expect(formatCurrency(1000.01, locale, options)).toBe('$1,000.010')
		expect(formatCurrency(1000.001, locale, options)).toBe('$1,000.001')
	})
})

describe('parse locale pt-BR', () => {
	const locale = 'pt-BR'

	test('should transform a formatted BRL into a float', () => {
		// Set options to unformatted BRL
		const options: Currency.UnformatOptions = {
			currency: 'BRL'
		}

		expect(unformatCurrency('R$ 0', locale, options)).toBe(0)
		expect(unformatCurrency('R$ 0,0', locale, options)).toBe(0)
		expect(unformatCurrency('R$ 0,00', locale, options)).toBe(0)
		expect(unformatCurrency('R$ 0,1', locale, options)).toBe(0.1)
		expect(unformatCurrency('R$ 0,10', locale, options)).toBe(0.1)
		expect(unformatCurrency('R$ 0,01', locale, options)).toBe(0.01)
		expect(unformatCurrency('R$ 0,001', locale, options)).toBe(0.001)
		expect(unformatCurrency('R$ 1', locale, options)).toBe(1)
		expect(unformatCurrency('R$ 1,0', locale, options)).toBe(1)
		expect(unformatCurrency('R$ 1,00', locale, options)).toBe(1)
		expect(unformatCurrency('R$ 1,1', locale, options)).toBe(1.1)
		expect(unformatCurrency('R$ 1,10', locale, options)).toBe(1.1)
		expect(unformatCurrency('R$ 1,01', locale, options)).toBe(1.01)
		expect(unformatCurrency('R$ 1,001', locale, options)).toBe(1.001)
		expect(unformatCurrency('R$ 10', locale, options)).toBe(10)
		expect(unformatCurrency('R$ 10,0', locale, options)).toBe(10)
		expect(unformatCurrency('R$ 10,00', locale, options)).toBe(10)
		expect(unformatCurrency('R$ 10,1', locale, options)).toBe(10.1)
		expect(unformatCurrency('R$ 10,10', locale, options)).toBe(10.1)
		expect(unformatCurrency('R$ 10,010', locale, options)).toBe(10.01)
		expect(unformatCurrency('R$ 10,001', locale, options)).toBe(10.001)
		expect(unformatCurrency('R$ 1.000', locale, options)).toBe(1000)
		expect(unformatCurrency('R$ 1.000,0', locale, options)).toBe(1000)
		expect(unformatCurrency('R$ 1.000,00', locale, options)).toBe(1000)
		expect(unformatCurrency('R$ 1.000,1', locale, options)).toBe(1000.1)
		expect(unformatCurrency('R$ 1.000,10', locale, options)).toBe(1000.1)
		expect(unformatCurrency('R$ 1.000,010', locale, options)).toBe(1000.01)
		expect(unformatCurrency('R$ 1.000,001', locale, options)).toBe(1000.001)
	})

	test('should transform a formatted USD into a float', () => {
		// Set options to unformatted USD
		const options: Currency.UnformatOptions = {
			currency: 'USD'
		}

		expect(unformatCurrency('US$ 0', locale, options)).toBe(0)
		expect(unformatCurrency('US$ 0,0', locale, options)).toBe(0)
		expect(unformatCurrency('US$ 0,00', locale, options)).toBe(0)
		expect(unformatCurrency('US$ 0,1', locale, options)).toBe(0.1)
		expect(unformatCurrency('US$ 0,10', locale, options)).toBe(0.1)
		expect(unformatCurrency('US$ 0,01', locale, options)).toBe(0.01)
		expect(unformatCurrency('US$ 0,001', locale, options)).toBe(0.001)
		expect(unformatCurrency('US$ 1', locale, options)).toBe(1)
		expect(unformatCurrency('US$ 1,0', locale, options)).toBe(1)
		expect(unformatCurrency('US$ 1,00', locale, options)).toBe(1)
		expect(unformatCurrency('US$ 1,1', locale, options)).toBe(1.1)
		expect(unformatCurrency('US$ 1,10', locale, options)).toBe(1.1)
		expect(unformatCurrency('US$ 1,01', locale, options)).toBe(1.01)
		expect(unformatCurrency('US$ 1,001', locale, options)).toBe(1.001)
		expect(unformatCurrency('US$ 10', locale, options)).toBe(10)
		expect(unformatCurrency('US$ 10,0', locale, options)).toBe(10)
		expect(unformatCurrency('US$ 10,00', locale, options)).toBe(10)
		expect(unformatCurrency('US$ 10,1', locale, options)).toBe(10.1)
		expect(unformatCurrency('US$ 10,10', locale, options)).toBe(10.1)
		expect(unformatCurrency('US$ 10,010', locale, options)).toBe(10.01)
		expect(unformatCurrency('US$ 10,001', locale, options)).toBe(10.001)
		expect(unformatCurrency('US$ 1.000', locale, options)).toBe(1000)
		expect(unformatCurrency('US$ 1.000,0', locale, options)).toBe(1000)
		expect(unformatCurrency('US$ 1.000,00', locale, options)).toBe(1000)
		expect(unformatCurrency('US$ 1.000,1', locale, options)).toBe(1000.1)
		expect(unformatCurrency('US$ 1.000,10', locale, options)).toBe(1000.1)
		expect(unformatCurrency('US$ 1.000,010', locale, options)).toBe(1000.01)
		expect(unformatCurrency('US$ 1.000,001', locale, options)).toBe(1000.001)
	})
})

describe('parse locale en-US', () => {
	const locale = 'en-US'

	test('should transform a formatted BRL into a float', () => {
		// Set options to unformatted BRL
		const options: Currency.UnformatOptions = {
			currency: 'BRL'
		}

		expect(unformatCurrency('R$0', locale, options)).toBe(0)
		expect(unformatCurrency('R$0.0', locale, options)).toBe(0)
		expect(unformatCurrency('R$0.00', locale, options)).toBe(0)
		expect(unformatCurrency('R$0.1', locale, options)).toBe(0.1)
		expect(unformatCurrency('R$0.10', locale, options)).toBe(0.1)
		expect(unformatCurrency('R$0.01', locale, options)).toBe(0.01)
		expect(unformatCurrency('R$0.001', locale, options)).toBe(0.001)
		expect(unformatCurrency('R$1', locale, options)).toBe(1)
		expect(unformatCurrency('R$1.0', locale, options)).toBe(1)
		expect(unformatCurrency('R$1.00', locale, options)).toBe(1)
		expect(unformatCurrency('R$1.1', locale, options)).toBe(1.1)
		expect(unformatCurrency('R$1.10', locale, options)).toBe(1.1)
		expect(unformatCurrency('R$1.01', locale, options)).toBe(1.01)
		expect(unformatCurrency('R$1.001', locale, options)).toBe(1.001)
		expect(unformatCurrency('R$10', locale, options)).toBe(10)
		expect(unformatCurrency('R$10.0', locale, options)).toBe(10)
		expect(unformatCurrency('R$10.00', locale, options)).toBe(10)
		expect(unformatCurrency('R$10.1', locale, options)).toBe(10.1)
		expect(unformatCurrency('R$10.10', locale, options)).toBe(10.1)
		expect(unformatCurrency('R$10.010', locale, options)).toBe(10.01)
		expect(unformatCurrency('R$10.001', locale, options)).toBe(10.001)
		expect(unformatCurrency('R$1,000', locale, options)).toBe(1000)
		expect(unformatCurrency('R$1,000.0', locale, options)).toBe(1000)
		expect(unformatCurrency('R$1,000.00', locale, options)).toBe(1000)
		expect(unformatCurrency('R$1,000.1', locale, options)).toBe(1000.1)
		expect(unformatCurrency('R$1,000.10', locale, options)).toBe(1000.1)
		expect(unformatCurrency('R$1,000.010', locale, options)).toBe(1000.01)
		expect(unformatCurrency('R$1,000.001', locale, options)).toBe(1000.001)
	})

	test('should transform a formatted USD into a float', () => {
		// Set options to unformatted USD
		const options: Currency.UnformatOptions = {
			currency: 'USD'
		}

		expect(unformatCurrency('$0', locale, options)).toBe(0)
		expect(unformatCurrency('$0.0', locale, options)).toBe(0)
		expect(unformatCurrency('$0.00', locale, options)).toBe(0)
		expect(unformatCurrency('$0.1', locale, options)).toBe(0.1)
		expect(unformatCurrency('$0.10', locale, options)).toBe(0.1)
		expect(unformatCurrency('$0.01', locale, options)).toBe(0.01)
		expect(unformatCurrency('$0.001', locale, options)).toBe(0.001)
		expect(unformatCurrency('$1', locale, options)).toBe(1)
		expect(unformatCurrency('$1.0', locale, options)).toBe(1)
		expect(unformatCurrency('$1.00', locale, options)).toBe(1)
		expect(unformatCurrency('$1.1', locale, options)).toBe(1.1)
		expect(unformatCurrency('$1.10', locale, options)).toBe(1.1)
		expect(unformatCurrency('$1.01', locale, options)).toBe(1.01)
		expect(unformatCurrency('$1.001', locale, options)).toBe(1.001)
		expect(unformatCurrency('$10', locale, options)).toBe(10)
		expect(unformatCurrency('$10.0', locale, options)).toBe(10)
		expect(unformatCurrency('$10.00', locale, options)).toBe(10)
		expect(unformatCurrency('$10.1', locale, options)).toBe(10.1)
		expect(unformatCurrency('$10.10', locale, options)).toBe(10.1)
		expect(unformatCurrency('$10.01', locale, options)).toBe(10.01)
		expect(unformatCurrency('$10.001', locale, options)).toBe(10.001)
		expect(unformatCurrency('$1,000', locale, options)).toBe(1000)
		expect(unformatCurrency('$1,000.0', locale, options)).toBe(1000)
		expect(unformatCurrency('$1,000.00', locale, options)).toBe(1000)
		expect(unformatCurrency('$1,000.1', locale, options)).toBe(1000.1)
		expect(unformatCurrency('$1,000.10', locale, options)).toBe(1000.1)
		expect(unformatCurrency('$1,000.01', locale, options)).toBe(1000.01)
		expect(unformatCurrency('$1,000.001', locale, options)).toBe(1000.001)
	})
})
