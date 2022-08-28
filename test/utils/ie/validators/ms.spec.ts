/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for MS', () => {
		test('when IE for MS is correct', () => {
			// base rule
			expect(isValidIE('MS', '280000006')).toBe(true)
			// digit 10 converted to 0
			expect(isValidIE('MS', '280000090')).toBe(true)
			// digit 11 converted to 0
			expect(isValidIE('MS', '280000030')).toBe(true)
		})
	})
	describe('should return false for MS', () => {
		test('when IE for MS is incorrect', () => {
			// verified digit incorrect
			expect(isValidIE('MS', '280000031')).toBe(false)
			// length different from 9
			expect(isValidIE('MS', '0280000006')).toBe(false)
			// does not start with 28
			expect(isValidIE('MS', '853511942')).toBe(false)
		})
	})
})
