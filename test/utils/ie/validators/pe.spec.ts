/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for PE', () => {
		test('when IE for PE is correct', () => {
			// base rule
			expect(isValidIE('PE', '288625706')).toBe(true)
		})
	})
	describe('should return false for PE', () => {
		test('when IE for PE is incorrect', () => {
			// length different from 9 digits
			expect(isValidIE('PE', '0925870110')).toBe(false)
			// digit incorrect
			expect(isValidIE('PE', '925870101')).toBe(false)
		})
	})
})
