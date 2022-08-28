/* eslint-disable no-unused-vars */
export namespace Brazil {
	export type State = 'AC' | 'AL' | 'AP' | 'AM' | 'BA' | 'CE' | 'DF' | 'ES' | 'GO' | 'MA' | 'MG' | 'MT' | 'MS' | 'PA' | 'PB' | 'PE' | 'PI' | 'PR' | 'RJ' | 'RN' | 'RO' | 'RS' | 'RR' | 'SC' | 'SE' | 'SP' | 'TO'
	export type Data = {
		[key in State]: {
			code: string
			areaCodes: number[]
			ieLength: number[]
			name: string
		}
	}
}
