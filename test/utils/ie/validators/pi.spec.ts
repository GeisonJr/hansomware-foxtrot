/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for PI', () => {
		test('when IE for PI is correct', () => {
			// base rule
			expect(isValidIE('PI', '052364534')).toBe(true)
		})
	})
})
