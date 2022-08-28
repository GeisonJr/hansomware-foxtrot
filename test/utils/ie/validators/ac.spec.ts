/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for AC', () => {
		test('when IE for AC is correct', () => {
			expect(isValidIE('AC', '0108368143106')).toBe(true)
			expect(isValidIE('AC', '01.349.541/474-57')).toBe(true)
		})
	})
	describe('should return false for AC', () => {
		test('when IE for AC is incorrect', () => {
			// incorrect second digit
			expect(isValidIE('AC', '0187634580933')).toBe(false)
			// incorrect first digit.
			expect(isValidIE('AC', '0187634580924')).toBe(false)
			// it does not starts with 01
			expect(isValidIE('AC', '0018763458000')).toBe(false)
			// length bigger then 13
			expect(isValidIE('AC', '01018763458064')).toBe(false)
		})
	})
})
