import { ReactNode } from 'react'

export type Primitive = string | number | boolean | Date

export type Keyof<T extends object> = Exclude<keyof T, symbol>

export interface LabelValue<T extends object | Primitive, P extends ReactNode = ReactNode> {
	value: T extends object ? Keyof<T> : T
	label: P
}

export type Section = LabelValue<string, string>
