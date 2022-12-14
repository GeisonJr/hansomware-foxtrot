/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for BA', () => {
		test('when IE for BA is correct', () => {
			// 8 digits
			// mod 10
			expect(isValidIE('BA', '12345663')).toBe(true)
			// mod 11
			expect(isValidIE('BA', '74219145')).toBe(true)
			// 9 digits
			// mod 10
			expect(isValidIE('BA', '038343081')).toBe(true)
			expect(isValidIE('BA', '100000306')).toBe(true)
			// mod 11
			expect(isValidIE('BA', '778514741')).toBe(true)
			// 9 digits starting with 0
			expect(isValidIE('BA', '078771760')).toBe(true)
			expect(isValidIE('BA', '039474751')).toBe(true)
			expect(isValidIE('BA', '090529323')).toBe(true)
			// 8 digits starting with 0
			expect(isValidIE('BA', '04772253')).toBe(true)
		})
	})
	describe('should return false for BA', () => {
		test('when IE for BA is incorrect', () => {
			// mod 10
			expect(isValidIE('BA', '12345636')).toBe(false)
			// mod 11
			expect(isValidIE('BA', '74219154')).toBe(false)

			// 9 digits
			// mod 10
			expect(isValidIE('BA', '038343001')).toBe(false)
			// mod 11
			expect(isValidIE('BA', '778514731')).toBe(false)
			// more than 9 digits
			expect(isValidIE('BA', '0012345636')).toBe(false)
		})
	})
})
