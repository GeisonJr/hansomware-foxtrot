import { CE } from './ce'

export class MA extends CE {
	/**
	 * @version 1.0.0
	 * @since 1.0.0
	 */
	protected itStartsWith(ie: string): boolean {
		return ie.substr(0, 2) === '12'
	}
}
