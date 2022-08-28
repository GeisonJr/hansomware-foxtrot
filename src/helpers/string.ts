/**
 * @description Checks if the index is the last index in the string
 * @param index
 * @param value
 * @example
 * ```ts
 * isLastChar(7, '1A2B3C4D')
 * return true
 * isLastChar(2, '1A2B3C4D')
 * return false
 * ```
 * @version 1.0.0
 * @since 1.0.0
 */
export function isLastChar(index: number, value: string): boolean {
	return index === value.length - 1
}
