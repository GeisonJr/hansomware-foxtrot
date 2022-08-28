/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for DF', () => {
		test('when IE for DF is correct', () => {
			expect(isValidIE('DF', '0754002000176')).toBe(true)
			// tenth digit converted to 0
			expect(isValidIE('DF', '0754002000508')).toBe(true)
		})
	})
	describe('should return false for DF', () => {
		test('when IE for DF is incorrect', () => {
			// does not start with 07
			expect(isValidIE('DF', '0108368143017')).toBe(false)
			// does not have 13 digits
			expect(isValidIE('DF', '07008368143094')).toBe(false)
			// digit incorrect
			expect(isValidIE('DF', '0754002000175')).toBe(false)
		})
	})
})
