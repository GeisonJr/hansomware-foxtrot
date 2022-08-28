/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for RR', () => {
		test('when IE for RR is correct', () => {
			// base rule
			expect(isValidIE('RR', '240061536')).toBe(true)
		})
	})
	describe('should return false for RR', () => {
		test('when IE for RR is incorrect', () => {
			// first verified digit incorrect
			expect(isValidIE('RR', '240061537')).toBe(false)
			// length different from 9
			expect(isValidIE('RR', '2400615366')).toBe(false)
			// does not start with 24
			expect(isValidIE('RR', '024006150')).toBe(false)
		})
	})
})
