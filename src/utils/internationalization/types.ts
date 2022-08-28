namespace Internationalization {
	export type Locale = 'pt-BR' | 'en-US'

	export namespace DateTime {
		export type DateStyle = Intl.DateTimeFormatOptions['dateStyle']
		export type TimeStyle = Intl.DateTimeFormatOptions['timeStyle']

		/**
		 * @description Variation of Intl.DateTimeFormatOptions
		 * @version 1.0.0
		 * @since 1.0.0
		 */
		export interface DateTimeFormatOptions
			extends Intl.DateTimeFormatOptions {
			dateStyle?: DateStyle
			timeStyle?: TimeStyle
		}

		/**
		 * @description Variation of Intl.DateTimeFormatOptions
		 * @version 1.0.0
		 * @since 1.0.0
		 */
		export interface RelativeTimeFormatOptions
			extends Intl.RelativeTimeFormatOptions {}
	}

	export namespace Number {
		export type Currency = 'BRL' | 'USD'
		export type Style = 'currency'

		/**
		 * @description Variation of Intl.NumberFormatOptions
		 * @version 1.0.0
		 * @since 1.0.0
		 */
		export interface NumberFormat
			extends Intl.NumberFormatOptions {
			currency?: Currency
			style?: Style
		}
	}
}

export default Internationalization
