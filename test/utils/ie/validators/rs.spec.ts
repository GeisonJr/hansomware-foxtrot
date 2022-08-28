/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for RS', () => {
		test('when IE for RS is correct', () => {
			// base rule
			expect(isValidIE('RS', '0305169149')).toBe(true)
			// digit 10 converted to 0
			expect(isValidIE('RS', '1202762660')).toBe(true)
			// digit 11 converted to 0
			expect(isValidIE('RS', '1202762120')).toBe(true)
		})
	})
	describe('should return false for RS', () => {
		test('when IE for RS is incorrect', () => {
			// first verified digit incorrect
			expect(isValidIE('RS', '2007693232')).toBe(false)
			// length different from 10
			expect(isValidIE('RS', '02007693230')).toBe(false)
		})
	})
})
