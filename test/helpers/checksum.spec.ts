/* Helpers */
import { checksum } from '../../src/helpers/index'

describe('GenerateChecksum', () => {
	test('Should generate the right checksum', () => {
		expect(checksum(12, 10)).toBe(28)
		expect(checksum(12, [10, 9])).toBe(28)
	})
})
