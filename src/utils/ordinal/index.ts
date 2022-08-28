/* Constants */
const SUFFIXES = new Map([
	['one', 'st'],
	['two', 'nd'],
	['few', 'rd'],
	['other', 'th']
])

/**
 * @version 1.0.0
 * @param value
 * @example
 * example(0) return '0th'
 * example(1) return '1st'
 * example(12) return '12nd'
 * example(103) return '103rd'
 * example(1004) return '1004th'
 */
export const format = (value: number) => {
	const options = {
		type: 'ordinal'
	} as Intl.PluralRulesOptions

	const rule = new Intl.PluralRules('en-US', options)
		.select(value)

	const suffix = SUFFIXES.get(rule)

	return `${value}${suffix}`
}
