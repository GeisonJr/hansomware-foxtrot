/* Utils */
import { formatCNPJ, generateCNPJ, isValidCNPJ, LENGTH, RESERVED_NUMBERS } from '../../src/utils/cnpj'

describe('Format CNPJ', () => {
	test('Should format string CNPJ with mask', () => {
		expect(formatCNPJ('')).toBe('')
		expect(formatCNPJ('1')).toBe('1')
		expect(formatCNPJ('12')).toBe('12')
		expect(formatCNPJ('123')).toBe('12.3')
		expect(formatCNPJ('1234')).toBe('12.34')
		expect(formatCNPJ('12345')).toBe('12.345')
		expect(formatCNPJ('123456')).toBe('12.345.6')
		expect(formatCNPJ('1234567')).toBe('12.345.67')
		expect(formatCNPJ('12345678')).toBe('12.345.678')
		expect(formatCNPJ('123456789')).toBe('12.345.678/9')
		expect(formatCNPJ('1234567890')).toBe('12.345.678/90')
		expect(formatCNPJ('12345678901')).toBe('12.345.678/901')
		expect(formatCNPJ('123456789012')).toBe('12.345.678/9012')
		expect(formatCNPJ('1234567890123')).toBe('12.345.678/9012-3')
		expect(formatCNPJ('12345678901234')).toBe('12.345.678/9012-34')
	})

	test('Should format number CNPJ with mask', () => {
		expect(formatCNPJ(1)).toBe('1')
		expect(formatCNPJ(12)).toBe('12')
		expect(formatCNPJ(123)).toBe('12.3')
		expect(formatCNPJ(1234)).toBe('12.34')
		expect(formatCNPJ(12345)).toBe('12.345')
		expect(formatCNPJ(123456)).toBe('12.345.6')
		expect(formatCNPJ(1234567)).toBe('12.345.67')
		expect(formatCNPJ(12345678)).toBe('12.345.678')
		expect(formatCNPJ(123456789)).toBe('12.345.678/9')
		expect(formatCNPJ(1234567890)).toBe('12.345.678/90')
		expect(formatCNPJ(12345678901)).toBe('12.345.678/901')
		expect(formatCNPJ(123456789012)).toBe('12.345.678/9012')
		expect(formatCNPJ(1234567890123)).toBe('12.345.678/9012-3')
		expect(formatCNPJ(12345678901234)).toBe('12.345.678/9012-34')
	})

	test('Should format string CNPJ with mask filling zeroes', () => {
		// Set options to filling zeroes
		const options = {
			pad: true
		}

		expect(formatCNPJ('', options)).toBe('00.000.000/0000-00')
		expect(formatCNPJ('1', options)).toBe('00.000.000/0000-01')
		expect(formatCNPJ('12', options)).toBe('00.000.000/0000-12')
		expect(formatCNPJ('123', options)).toBe('00.000.000/0001-23')
		expect(formatCNPJ('1234', options)).toBe('00.000.000/0012-34')
		expect(formatCNPJ('12345', options)).toBe('00.000.000/0123-45')
		expect(formatCNPJ('123456', options)).toBe('00.000.000/1234-56')
		expect(formatCNPJ('1234567', options)).toBe('00.000.001/2345-67')
		expect(formatCNPJ('12345678', options)).toBe('00.000.012/3456-78')
		expect(formatCNPJ('123456789', options)).toBe('00.000.123/4567-89')
		expect(formatCNPJ('1234567890', options)).toBe('00.001.234/5678-90')
		expect(formatCNPJ('12345678901', options)).toBe('00.012.345/6789-01')
		expect(formatCNPJ('123456789012', options)).toBe('00.123.456/7890-12')
		expect(formatCNPJ('1234567890123', options)).toBe('01.234.567/8901-23')
		expect(formatCNPJ('12345678901234', options)).toBe('12.345.678/9012-34')
	})

	test('Should format number CNPJ with mask filling zeroes', () => {
		// Set options to filling zeroes
		const options = {
			pad: true
		}

		expect(formatCNPJ(1, options)).toBe('00.000.000/0000-01')
		expect(formatCNPJ(12, options)).toBe('00.000.000/0000-12')
		expect(formatCNPJ(123, options)).toBe('00.000.000/0001-23')
		expect(formatCNPJ(1234, options)).toBe('00.000.000/0012-34')
		expect(formatCNPJ(12345, options)).toBe('00.000.000/0123-45')
		expect(formatCNPJ(123456, options)).toBe('00.000.000/1234-56')
		expect(formatCNPJ(1234567, options)).toBe('00.000.001/2345-67')
		expect(formatCNPJ(12345678, options)).toBe('00.000.012/3456-78')
		expect(formatCNPJ(123456789, options)).toBe('00.000.123/4567-89')
		expect(formatCNPJ(1234567890, options)).toBe('00.001.234/5678-90')
		expect(formatCNPJ(12345678901, options)).toBe('00.012.345/6789-01')
		expect(formatCNPJ(123456789012, options)).toBe('00.123.456/7890-12')
		expect(formatCNPJ(1234567890123, options)).toBe('01.234.567/8901-23')
		expect(formatCNPJ(12345678901234, options)).toBe('12.345.678/9012-34')
	})

	test(`Should NOT add digits after the CNPJ length (${LENGTH})`, () => {
		expect(formatCNPJ('123456789012345678901234')).toBe('12.345.678/9012-34')
	})

	test('should remove all non numeric characters', () => {
		expect(formatCNPJ('12.?ABC345.678/9012-34abc')).toBe('12.345.678/9012-34')
	})
})

describe('Generate CNPJ', () => {
	test(`Should have the right length without mask (${LENGTH})`, () => {
		expect(generateCNPJ().length).toBe(LENGTH)
	})

	test('Should return valid CNPJ', () => {
		// Iterate over 100 to insure that random generated CNPJ is valid
		for (let i = 0; i < 100; i++) {
			expect(isValidCNPJ(generateCNPJ())).toBe(true)
		}
	})
})

describe('Is valid CNPJ', () => {
	describe('Should return false', () => {
		test('When it is on the RESERVED_NUMBERS', () => {
			RESERVED_NUMBERS.forEach((cnpj) => expect(isValidCNPJ(cnpj)).toBe(false))
		})

		test('When it is an empty string', () => {
			expect(isValidCNPJ('')).toBe(false)
		})

		test('When it is null', () => {
			expect(isValidCNPJ(null as any)).toBe(false)
		})

		test('When it is undefined', () => {
			expect(isValidCNPJ(undefined as any)).toBe(false)
		})

		test('When it is a boolean', () => {
			expect(isValidCNPJ(true as any)).toBe(false)
			expect(isValidCNPJ(false as any)).toBe(false)
		})

		test('When it is an object', () => {
			expect(isValidCNPJ({} as any)).toBe(false)
		})

		test('When it is an array', () => {
			expect(isValidCNPJ([] as any)).toBe(false)
		})

		test(`When dont match with CNPJ length (${LENGTH})`, () => {
			expect(isValidCNPJ('12312312312')).toBe(false)
		})

		test('When contains only letters or special characters', () => {
			expect(isValidCNPJ('ababcabcabcdab')).toBe(false)
		})

		test('When is a CNPJ invalid test numbers with letters', () => {
			expect(isValidCNPJ('6ad0.t391.9asd47/0ad001-00')).toBe(false)
		})

		test('When is a CNPJ invalid', () => {
			expect(isValidCNPJ('11257245286531')).toBe(false)
		})
	})

	describe('Should return true', () => {
		test('When is a CNPJ valid without mask', () => {
			expect(isValidCNPJ('13723705000189')).toBe(true)
		})

		test('When is a CNPJ valid with mask', () => {
			expect(isValidCNPJ('60.391.947/0001-00')).toBe(true)
		})
	})
})
