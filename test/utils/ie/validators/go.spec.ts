/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for GO', () => {
		test('when IE for GO is correct', () => {
			// base rule
			expect(isValidIE('GO', '109161793')).toBe(true)
			// verified digit is 1, internal
			expect(isValidIE('GO', '101031131')).toBe(true)
			// verified digit is 1, external
			expect(isValidIE('GO', '101030940')).toBe(true)
		})
	})
	describe('should return false for GO', () => {
		test('when IE for GO is incorrect', () => {
			// verified digit incorrect
			expect(isValidIE('GO', '109161794')).toBe(false)
			// does not start with 10,11 or 15
			expect(isValidIE('GO', '121031131')).toBe(false)
			// length different from 9
			expect(isValidIE('GO', '0101030940')).toBe(false)
		})
	})
})
