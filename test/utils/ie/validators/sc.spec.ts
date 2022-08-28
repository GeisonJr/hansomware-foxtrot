/* Utils */
import { isValidIE } from '../../../../src/utils/ie'

describe('isValid', () => {
	describe('should return true for SC', () => {
		test('when IE for SC is correct', () => {
			// base rule
			expect(isValidIE('SC', '330430572')).toBe(true)
		})
	})
})
