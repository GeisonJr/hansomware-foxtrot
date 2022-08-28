/* Constants */
const MAX_RECIPIENT_LENGTH = 64
const MAX_DOMAIN_LENGTH = 253
const MAX_EMAIL_LENGTH = MAX_RECIPIENT_LENGTH + 1 + MAX_DOMAIN_LENGTH

/**
 * @version 1.0.2
 * @param len
 * @param strs
 */
function stringIsBiggerThan(len: number, ...strs: string[]): boolean {
	return strs.reduce((length, s) => length + s.length, 0) > len
}

/**
 * @version 1.0.7
 * @param email
 */
export function isValidEmail(email: string): boolean {
	if (!email || typeof email !== 'string') return false

	if (stringIsBiggerThan(MAX_EMAIL_LENGTH, email)) return false

	const matchedEmail = /^([!#$%&'*+\-/=?^_`{|}~]{0,1}([a-zA-Z0-9][!#$%&'*+\-/=?^_`{|}~.]{0,1})+)@(([a-zA-Z0-9][-.]{0,1})+)([.]{1}[a-zA-Z0-9]+)$/
		.exec(email)

	if (!matchedEmail) return false

	const [, recipient, , domain, , topLevelDomain] = matchedEmail

	if (stringIsBiggerThan(MAX_RECIPIENT_LENGTH, recipient)) return false
	if (stringIsBiggerThan(MAX_DOMAIN_LENGTH, domain, topLevelDomain)) return false

	return true
}
