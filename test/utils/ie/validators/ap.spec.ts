/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for AP', () => {
		test('when IE for AP is correct', () => {
			expect(isValidIE('AP', '036029572')).toBe(true)
			expect(isValidIE('AP', '030123459')).toBe(true)
			expect(isValidIE('AP', '030000080')).toBe(true)
			expect(isValidIE('AP', '030000160')).toBe(true)
			expect(isValidIE('AP', '030170011')).toBe(true)
			expect(isValidIE('AP', '030170020')).toBe(true)
			expect(isValidIE('AP', '030170071')).toBe(true)
		})
	})
	describe('should return false for AP', () => {
		test('when IE for AP is incorrect', () => {
			// verifier digit false
			expect(isValidIE('AP', '036029573')).toBe(false)
			// more then 9 digits
			expect(isValidIE('AP', '0306029570')).toBe(false)
			// does not start with 03
			expect(isValidIE('AP', '003060292')).toBe(false)
		})
	})
})
