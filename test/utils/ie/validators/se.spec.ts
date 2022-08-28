/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for SE', () => {
		test('when IE for SE is correct', () => {
			// base rule
			expect(isValidIE('SE', '017682606')).toBe(true)
		})
	})
})
