/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for SP', () => {
		test('when IE for SP is correct', () => {
			// base rule
			expect(isValidIE('SP', '110042490114')).toBe(true)
		})
	})
	describe('should return false for SP', () => {
		test('when IE for SP is incorrect', () => {
			// length bigger than 12
			expect(isValidIE('SP', '1110042494114')).toBe(false)
			// second verified digit incorrect
			expect(isValidIE('SP', '110042490113')).toBe(false)
			// first verified digit incorrect
			expect(isValidIE('SP', '110042498113')).toBe(false)
		})
	})
})
