/* Types */
import type Internationalization from '../internationalization/types'

export namespace DateTime {
	export type Value = number | Date
	export type Unit = 'week' | 'day' | 'hour' | 'minute' | 'second' | 'milisecond'

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	export interface DateTimeFormatOptions
		extends Internationalization.DateTime.DateTimeFormatOptions {}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	export interface FormatOptions
		extends DateTimeFormatOptions {}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	export interface FormatToPartsOptions
		extends DateTimeFormatOptions {
		/**
		 * @default
		 * 'short'
		 */
		dateStyle: Internationalization.DateTime.DateStyle
		/**
		 * @default
		 * 'medium'
		 */
		timeStyle: Internationalization.DateTime.TimeStyle
	}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	export interface RelativeTimeFormatOptions
		extends Internationalization.DateTime.RelativeTimeFormatOptions {}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	export interface FormatDiffOptions
		extends RelativeTimeFormatOptions {}

	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	export interface GetDiffOptions {
		absolute?: boolean
	}
}
