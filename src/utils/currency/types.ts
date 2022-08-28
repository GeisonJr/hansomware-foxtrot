/* Types */
import type Internationalization from '../internationalization/types'

export namespace Currency {
	export interface NumberFormatOptions
		extends Internationalization.Number.NumberFormat {}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	export interface FormatOptions
		extends NumberFormatOptions {}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	export interface FormatToPartsOptions
		extends NumberFormatOptions {}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	export interface UnformatOptions
		extends FormatToPartsOptions {}
}
