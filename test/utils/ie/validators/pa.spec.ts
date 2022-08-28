/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for PA', () => {
		test('when IE for PA is correct', () => {
			// base rule
			expect(isValidIE('PA', '150000006')).toBe(true)
			// digit 10 converted to 0
			expect(isValidIE('PA', '150000260')).toBe(true)
			// digit 11 converted to 0
			expect(isValidIE('PA', '150000030')).toBe(true)
		})
	})
	describe('should return false for PA', () => {
		test('when IE for PA is incorrect', () => {
			// does not start with 15
			expect(isValidIE('PA', '120000008')).toBe(false)
			// length different from 9
			expect(isValidIE('PA', '0150000006')).toBe(false)
			// digit incorrect
			expect(isValidIE('PA', '150000007')).toBe(false)
		})
	})
})
