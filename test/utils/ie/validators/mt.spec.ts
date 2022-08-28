/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for MT', () => {
		test('when IE for MT is correct', () => {
			// base rule
			expect(isValidIE('MT', '60474120469')).toBe(true)
		})
	})
	describe('should return false for MT', () => {
		test('when IE for MT is incorrect', () => {
			// verified digit incorrect
			expect(isValidIE('MT', '12345678901')).toBe(false)
			// length different from 11
			expect(isValidIE('MT', '1234567890112')).toBe(false)
		})
	})
})
