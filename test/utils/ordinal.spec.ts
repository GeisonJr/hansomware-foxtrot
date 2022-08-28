/* Utils */
import { format } from '../../src/utils/ordinal'

describe('format', () => {
	test('should format number with mask', () => {
		expect(format(0)).toBe('0th')
		expect(format(1)).toBe('1st')
		expect(format(2)).toBe('2nd')
		expect(format(3)).toBe('3rd')
		expect(format(4)).toBe('4th')
		expect(format(11)).toBe('11th')
		expect(format(21)).toBe('21st')
		expect(format(42)).toBe('42nd')
		expect(format(103)).toBe('103rd')
	})
})
