/* Helpers */
import { random } from '../../src/helpers/index'

describe('random', () => {
	test('should generate random number', () => {
		expect(random(1)).toHaveLength(1)
		expect(random(10)).toHaveLength(10)
		expect(random(100)).toHaveLength(100)
	})
})
