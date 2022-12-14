/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for PR', () => {
		test('when IE for PR is correct', () => {
			// base rule
			expect(isValidIE('PR', '4447953604')).toBe(true)
		})
	})
	describe('should return false for PR', () => {
		test('when IE for PR is incorrect', () => {
			// length different from 10 digits
			expect(isValidIE('PR', '04447953604')).toBe(false)
			// digit incorrect
			expect(isValidIE('PR', '4447953640')).toBe(false)
		})
	})
})
