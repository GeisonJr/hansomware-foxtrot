/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for AL', () => {
		test('when IE for AL is correct', () => {
			expect(isValidIE('AL', '248659758')).toBe(true)
			// digit 10 converted to 0
			expect(isValidIE('AL', '247424170')).toBe(true)
		})
	})
	describe('should return false for AL', () => {
		test('when IE for AL is incorrect', () => {
			// incorrect verified digit
			expect(isValidIE('AL', '248659759')).toBe(false)
			// it does not starts with 24
			expect(isValidIE('AL', '258659750')).toBe(false)
			// lenght more then 9
			expect(isValidIE('AL', '2486597584')).toBe(false)
		})
	})
})
