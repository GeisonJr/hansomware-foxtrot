/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for RN', () => {
		test('when IE for RN is correct', () => {
			// base rule
			expect(isValidIE('RN', '2007693232')).toBe(true)
			// digit 10 converted to 0
			expect(isValidIE('RN', '2003569880')).toBe(true)
			// old IE
			expect(isValidIE('RN', '203569881')).toBe(true)
		})
	})
	describe('should return false for RN', () => {
		test('when IE for RN is incorrect', () => {
			// first verified digit incorrect
			expect(isValidIE('RN', '2007693231')).toBe(false)
			// does not start with 20
			expect(isValidIE('RN', '0203569881')).toBe(false)
			// length different from 9 or 10
			expect(isValidIE('RN', '20356988104')).toBe(false)
		})
	})
})
