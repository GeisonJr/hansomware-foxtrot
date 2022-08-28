/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for PB', () => {
		test('when IE for PB is correct', () => {
			// base rule
			expect(isValidIE('PB', '853511942')).toBe(true)
			// digit 10 converted to 0
			expect(isValidIE('PB', '853512230')).toBe(true)
			// digit 11 converted to 0
			expect(isValidIE('PB', '853511950')).toBe(true)
		})
	})
	describe('should return false for PB', () => {
		test('when IE for PB is incorrect', () => {
			// length different from 9
			expect(isValidIE('PB', '0853511942')).toBe(false)
			// digit incorrect
			expect(isValidIE('PB', '853511943')).toBe(false)
		})
	})
})
