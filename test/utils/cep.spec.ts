/* Constants */
import { LENGTH } from '../../src/utils/cep/constants'

/* Utils */
import { formatCEP, isValidCEP } from '../../src/utils/cep'

describe('Format CEP', () => {
	test('Should format CEP with mask', () => {
		expect(formatCEP('')).toBe('')
		expect(formatCEP('1')).toBe('1')
		expect(formatCEP('12')).toBe('12')
		expect(formatCEP('123')).toBe('123')
		expect(formatCEP('1234')).toBe('1234')
		expect(formatCEP('12345')).toBe('12345')
		expect(formatCEP('123453')).toBe('12345-3')
		expect(formatCEP('1234567')).toBe('12345-67')
		expect(formatCEP('12345678')).toBe('12345-678')
	})

	test(`Should NOT add digits after the CEP length (${LENGTH})`, () => {
		expect(formatCEP('1234567890123456')).toBe('12345-678')
	})

	test('Should remove all non numeric characters', () => {
		expect(formatCEP('a1.23cr45?67#a89')).toBe('12345-678')
	})
})

describe('Is valid CEP', () => {
	describe('Should return false', () => {
		test('When it is an empty string', () => {
			expect(isValidCEP('')).toBe(false)
		})
		test('When it is null', () => {
			expect(isValidCEP(null as any)).toBe(false)
		})
		test('When it is undefined', () => {
			expect(isValidCEP(undefined as any)).toBe(false)
		})
		test(`When length is greater than ${LENGTH}`, () => {
			expect(isValidCEP('123456789')).toBe(false)
		})
		test('When is array', () => {
			expect(isValidCEP([] as any)).toBe(false)
		})
		test('When is object', () => {
			expect(isValidCEP({} as any)).toBe(false)
		})
		test('When is boolean', () => {
			expect(isValidCEP(true as any)).toBe(false)
			expect(isValidCEP(false as any)).toBe(false)
		})
	})

	describe('Should return true', () => {
		test('When is a CEP valid without mask', () => {
			expect(isValidCEP('92500000')).toBe(true)
		})
		test('When is a CEP valid with mask', () => {
			expect(isValidCEP('92500-000')).toBe(true)
		})
	})
})
