/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for RO', () => {
		test('when IE for RO is correct', () => {
			// base rule
			expect(isValidIE('RO', '01078042249629')).toBe(true)
			// digit 10 converted to 0
			expect(isValidIE('RO', '01078042249670')).toBe(true)
			// digit 11 converted to 0
			expect(isValidIE('RO', '01078042249751')).toBe(true)
		})
	})
	describe('should return false for RO', () => {
		test('when IE for RO is incorrect', () => {
			// first verified digit incorrect
			expect(isValidIE('RO', '01078042249756')).toBe(false)
			// length different from 14
			expect(isValidIE('RO', '001078042249627')).toBe(false)
		})
	})
})
