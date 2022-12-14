/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for TO', () => {
		test('when IE for TO is correct', () => {
			// OLD base rule
			expect(isValidIE('TO', '01027737427')).toBe(true)

			// NEW base rule
			expect(isValidIE('TO', '294467696')).toBe(true)

			// Digit zero
			expect(isValidIE('TO', '294150870')).toBe(true)
		})
	})
	describe('should return false for TO', () => {
		test('when IE for TO is incorrect', () => {
			// Old rule category invalid
			expect(isValidIE('TO', '01047737427')).toBe(false)

			// more than 11 digits
			expect(isValidIE('TO', '099999916599')).toBe(false)

			// verified digit incorrect
			expect(isValidIE('TO', '99999916598')).toBe(false)

			// new rule verified digit incorrect
			expect(isValidIE('TO', '294467690')).toBe(false)
		})
	})
})
