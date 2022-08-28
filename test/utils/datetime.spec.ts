/* Utils */
import { formatDateTime } from '../../src/utils/dateTime'
// import { DateTime } from '../../src/utils/datetime/types'

/* Constants */
// const date = new Date(2021, 0, 1)

describe('format locale pt-BR', () => {
	const locale = 'pt-BR'

	test('should format dateTime', () => {
		expect(formatDateTime(1638542489682, locale)).toBe('03/12/2021 11:41:29')
	})

	// test('should format past dateTime', () => {
	// 	const options: DateTime.FormatDiffOptions = {
	// 		numeric: 'auto'
	// 	}

	// 	expect(formatDateTimeDiff(date, new Date(2031, 0, 1), locale, options)).toBe('há 10 anos')
	// 	expect(formatDateTimeDiff(date, new Date(2022, 0, 2), locale, options)).toBe('ano passado')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 10, 1), locale, options)).toBe('há 10 meses')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 1, 1), locale, options)).toBe('mês passado')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 11), locale, options)).toBe('há 10 dias')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 3), locale, options)).toBe('anteontem')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 2, 1), locale, options)).toBe('ontem')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 2), locale, options)).toBe('há 24 horas')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 10), locale, options)).toBe('há 10 horas')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 1, 1), locale, options)).toBe('há 1 hora')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 1), locale, options)).toBe('há 60 minutos')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 0, 10), locale, options)).toBe('há 10 minutos')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 0, 1), locale, options)).toBe('há 60 segundos')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 0, 0, 10), locale, options)).toBe('há 10 segundos')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 0, 0, 1), locale, options)).toBe('há 1 segundo')
	// })

	// test('should format future dateTime', () => {
	// 	const options: DateTime.FormatDiffOptions = {
	// 		numeric: 'auto'
	// 	}

	// 	expect(formatDateTimeDiff(new Date(2031, 0, 1), date, locale, options)).toBe('em 10 anos')
	// 	expect(formatDateTimeDiff(new Date(2022, 0, 2), date, locale, options)).toBe('próximo ano')
	// 	expect(formatDateTimeDiff(new Date(2021, 10, 1), date, locale, options)).toBe('em 10 meses')
	// 	expect(formatDateTimeDiff(new Date(2021, 1, 1), date, locale, options)).toBe('próximo mês')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 11), date, locale, options)).toBe('em 10 dias')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 3), date, locale, options)).toBe('depois de amanhã')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 2, 1), date, locale, options)).toBe('amanhã')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 2), date, locale, options)).toBe('em 24 horas')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 10), date, locale, options)).toBe('em 10 horas')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 1, 1), date, locale, options)).toBe('em 1 hora')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 1), date, locale, options)).toBe('em 60 minutos')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 0, 10), date, locale, options)).toBe('em 10 minutos')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 0, 1), date, locale, options)).toBe('em 60 segundos')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 0, 0, 10), date, locale, options)).toBe('em 10 segundos')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 0, 0, 1), date, locale, options)).toBe('em 1 segundo')
	// })
})

describe('format locale en-US', () => {
	const locale = 'en-US'

	test('should format dateTime', () => {
		expect(formatDateTime(1638542489682, locale)).toBe('12/3/21, 11:41:29 AM')
	})

	// test('should format past dateTime', () => {
	// 	const options: DateTime.FormatDiffOptions = {
	// 		numeric: 'auto'
	// 	}

	// 	expect(formatDateTimeDiff(date, new Date(2031, 0, 1), locale, options)).toBe('10 years ago')
	// 	expect(formatDateTimeDiff(date, new Date(2022, 0, 2), locale, options)).toBe('last year')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 10, 1), locale, options)).toBe('10 months ago')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 1, 1), locale, options)).toBe('last month')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 11), locale, options)).toBe('10 days ago')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 3), locale, options)).toBe('2 days ago')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 2, 1), locale, options)).toBe('yesterday')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 2), locale, options)).toBe('24 hours ago')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 10), locale, options)).toBe('10 hours ago')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 1, 1), locale, options)).toBe('1 hour ago')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 1), locale, options)).toBe('60 minutes ago')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 0, 10), locale, options)).toBe('10 minutes ago')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 0, 1), locale, options)).toBe('60 seconds ago')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 0, 0, 10), locale, options)).toBe('10 seconds ago')
	// 	expect(formatDateTimeDiff(date, new Date(2021, 0, 1, 0, 0, 1), locale, options)).toBe('1 second ago')
	// })

	// test('should format future dateTime', () => {
	// 	const options: DateTime.FormatDiffOptions = {
	// 		numeric: 'auto'
	// 	}

	// 	expect(formatDateTimeDiff(new Date(2031, 0, 1), date, locale, options)).toBe('in 10 years')
	// 	expect(formatDateTimeDiff(new Date(2022, 0, 2), date, locale, options)).toBe('next year')
	// 	expect(formatDateTimeDiff(new Date(2021, 10, 1), date, locale, options)).toBe('in 10 months')
	// 	expect(formatDateTimeDiff(new Date(2021, 1, 1), date, locale, options)).toBe('next month')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 11), date, locale, options)).toBe('in 10 days')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 3), date, locale, options)).toBe('in 2 days')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 2, 1), date, locale, options)).toBe('tomorrow')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 2), date, locale, options)).toBe('in 24 hours')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 10), date, locale, options)).toBe('in 10 hours')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 1, 1), date, locale, options)).toBe('in 1 hour')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 1), date, locale, options)).toBe('in 60 minutes')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 0, 10), date, locale, options)).toBe('in 10 minutes')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 0, 1), date, locale, options)).toBe('in 60 seconds')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 0, 0, 10), date, locale, options)).toBe('in 10 seconds')
	// 	expect(formatDateTimeDiff(new Date(2021, 0, 1, 0, 0, 1), date, locale, options)).toBe('in 1 second')
	// })
})
