/* Utils */
import { isValidEmail } from '../../src/utils/email'

describe('isValid', () => {
	describe('should return false', () => {
		test('when it is an empty string', () => {
			expect(isValidEmail('')).toBe(false)
		})

		test('when it is null', () => {
			expect(isValidEmail(null as any)).toBe(false)
		})

		test('when it is undefined', () => {
			expect(isValidEmail(undefined as any)).toBe(false)
		})

		test('when it is a boolean', () => {
			expect(isValidEmail(true as any)).toBe(false)
			expect(isValidEmail(false as any)).toBe(false)
		})

		test('when it is an object', () => {
			expect(isValidEmail({} as any)).toBe(false)
		})

		test('when it is an array', () => {
			expect(isValidEmail([] as any)).toBe(false)
		})

		describe('when email', () => {
			test('without at symbol', () => {
				expect(isValidEmail('john.doe.teste.com.br')).toBe(false)
			})

			test('is too long', () => {
				const tooLongEmail = 'a'.repeat(64) + '@' + 'test.co.uk'.repeat(28)

				expect(isValidEmail(tooLongEmail)).toBe(false)
			})
		})

		describe('when recipient name', () => {
			test('has length equal to 0', () => {
				expect(isValidEmail('@teste.com.br')).toBe(false)
			})

			test('has more then 64 characters length', () => {
				const emailWith65CharRecipient = `${'a'.repeat(65)}@teste.com.br`

				expect(isValidEmail(emailWith65CharRecipient)).toBe(false)
			})

			test('has invalid character', () => {
				expect(isValidEmail('(johndoe)@test.com.br')).toBe(false)
			})

			test('has 2 special characters consecutively', () => {
				expect(isValidEmail('john..doe@teste.com.br')).toBe(false)
			})

			test('start with unallowed special characters consecutively', () => {
				expect(isValidEmail('.john.doe@teste.com.br')).toBe(false)
			})

			test('when contains accentuation', () => {
				expect(isValidEmail('jóhn.doe@teste.com.br')).toBe(false)
			})
		})

		describe('when domain name', () => {
			test('has length equal to 0', () => {
				expect(isValidEmail('johndoe@')).toBe(false)
			})

			test('has more then 253 characters length', () => {
				const domainWith254Length = 'ab' + 'teste.com.br'.repeat(21)

				expect(isValidEmail(`johndoe@${domainWith254Length}`)).toBe(false)
			})

			test('when contains accentuation', () => {
				expect(isValidEmail('johndoe@téste.com.br')).toBe(false)
			})

			test('hasnt top level domain', () => {
				expect(isValidEmail('johndoe@test.com.')).toBe(false)
			})
		})
	})

	describe('should return true', () => {
		test('when email is valid', () => {
			expect(isValidEmail('john.doe@hotmail.com')).toBe(true)
		})

		test('when email is valid with underline', () => {
			expect(isValidEmail('john_doe@myenterprise.com.br')).toBe(true)
		})

		test('when email is valid with domain gmail', () => {
			expect(isValidEmail('john.doe@gmail.com')).toBe(true)
		})
	})
})
