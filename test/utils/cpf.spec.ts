/* Database */
import { data, states } from '../../src/locales/brazil/states'

/* Utils */
import { formatCPF, generateCPF, isValidCPF, LENGTH, RESERVED_NUMBERS } from '../../src/utils/cpf'

describe('Format CPF', () => {
	test('Should format string CPF with mask', () => {
		expect(formatCPF('')).toBe('')
		expect(formatCPF('1')).toBe('1')
		expect(formatCPF('12')).toBe('12')
		expect(formatCPF('123')).toBe('123')
		expect(formatCPF('1234')).toBe('123.4')
		expect(formatCPF('12345')).toBe('123.45')
		expect(formatCPF('123456')).toBe('123.456')
		expect(formatCPF('1234567')).toBe('123.456.7')
		expect(formatCPF('12345678')).toBe('123.456.78')
		expect(formatCPF('123456789')).toBe('123.456.789')
		expect(formatCPF('1234567890')).toBe('123.456.789-0')
		expect(formatCPF('12345678901')).toBe('123.456.789-01')
	})

	test('Should format number CPF with mask', () => {
		expect(formatCPF(1)).toBe('1')
		expect(formatCPF(12)).toBe('12')
		expect(formatCPF(123)).toBe('123')
		expect(formatCPF(1234)).toBe('123.4')
		expect(formatCPF(12345)).toBe('123.45')
		expect(formatCPF(123456)).toBe('123.456')
		expect(formatCPF(1234567)).toBe('123.456.7')
		expect(formatCPF(12345678)).toBe('123.456.78')
		expect(formatCPF(123456789)).toBe('123.456.789')
		expect(formatCPF(1234567890)).toBe('123.456.789-0')
		expect(formatCPF(12345678901)).toBe('123.456.789-01')
	})

	test('Should format CPF with mask filling zeroes', () => {
		// Set options filling zeroes
		const options = {
			pad: true
		}

		expect(formatCPF('', options)).toBe('000.000.000-00')
		expect(formatCPF('1', options)).toBe('000.000.000-01')
		expect(formatCPF('12', options)).toBe('000.000.000-12')
		expect(formatCPF('123', options)).toBe('000.000.001-23')
		expect(formatCPF('1234', options)).toBe('000.000.012-34')
		expect(formatCPF('12345', options)).toBe('000.000.123-45')
		expect(formatCPF('123456', options)).toBe('000.001.234-56')
		expect(formatCPF('1234567', options)).toBe('000.012.345-67')
		expect(formatCPF('12345678', options)).toBe('000.123.456-78')
		expect(formatCPF('123456789', options)).toBe('001.234.567-89')
		expect(formatCPF('1234567890', options)).toBe('012.345.678-90')
		expect(formatCPF('12345678901', options)).toBe('123.456.789-01')
	})

	test('Should format number CPF with mask filling zeroes', () => {
		// Set options filling zeroes
		const options = {
			pad: true
		}

		expect(formatCPF(1, options)).toBe('000.000.000-01')
		expect(formatCPF(12, options)).toBe('000.000.000-12')
		expect(formatCPF(123, options)).toBe('000.000.001-23')
		expect(formatCPF(1234, options)).toBe('000.000.012-34')
		expect(formatCPF(12345, options)).toBe('000.000.123-45')
		expect(formatCPF(123456, options)).toBe('000.001.234-56')
		expect(formatCPF(1234567, options)).toBe('000.012.345-67')
		expect(formatCPF(12345678, options)).toBe('000.123.456-78')
		expect(formatCPF(123456789, options)).toBe('001.234.567-89')
		expect(formatCPF(1234567890, options)).toBe('012.345.678-90')
		expect(formatCPF(12345678901, options)).toBe('123.456.789-01')
	})

	test(`Should NOT add digits after the CPF length (${LENGTH})`, () => {
		expect(formatCPF('123456789012345678901')).toBe('123.456.789-01')
	})

	test('Should remove all non numeric characters', () => {
		expect(formatCPF('123.?ABC456.789-01abc')).toBe('123.456.789-01')
	})
})

describe('Generate CPF', () => {
	test(`Should have the right length without mask (${LENGTH})`, () => {
		expect(generateCPF().length).toBe(LENGTH)
	})

	test('Should return valid CPF', () => {
		// Iterate over 100 to insure that random generated CPF is valid
		for (let i = 0; i < 100; i++) {
			expect(isValidCPF(generateCPF())).toBe(true)
		}
	})

	describe('Should return a valid CPF for each brazilian state with initials', () => {
		states.map((state) =>
			test(state, () => {
				expect(generateCPF(state).substr(8, 1) === data[state].code).toBe(true)
			})
		)
	})
})

describe('isValid', () => {
	describe('Should return false', () => {
		test('when it is on the RESERVED_NUMBERS', () => {
			RESERVED_NUMBERS.forEach((cpf) => expect(isValidCPF(cpf)).toBe(false))
		})

		test('when it is an empty string', () => {
			expect(isValidCPF('')).toBe(false)
		})

		test('when it is null', () => {
			expect(isValidCPF(null as any)).toBe(false)
		})

		test('when it is undefined', () => {
			expect(isValidCPF(undefined as any)).toBe(false)
		})

		test('when it is a boolean', () => {
			expect(isValidCPF(true as any)).toBe(false)
			expect(isValidCPF(false as any)).toBe(false)
		})

		test('when it is an object', () => {
			expect(isValidCPF({} as any)).toBe(false)
		})

		test('when it is an array', () => {
			expect(isValidCPF([] as any)).toBe(false)
		})

		test(`when dont match with CPF length (${LENGTH})`, () => {
			expect(isValidCPF('123456')).toBe(false)
		})

		test('when contains only letters or special characters', () => {
			expect(isValidCPF('abcabcabcde')).toBe(false)
		})

		test('when is a CPF invalid test numbers with letters', () => {
			expect(isValidCPF('foo391.838.38test0-66')).toBe(false)
		})

		test('when is a CPF invalid', () => {
			expect(isValidCPF('11257245286')).toBe(false)
		})
	})

	describe('Should return true', () => {
		test('when is a CPF valid without mask', () => {
			expect(isValidCPF('40364478829')).toBe(true)
		})

		test('when is a CPF valid with mask', () => {
			expect(isValidCPF('962.718.458-60')).toBe(true)
		})
	})
})
