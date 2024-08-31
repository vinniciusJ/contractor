import { PropsWithChildren } from 'react'

import { ArrayPath, Control } from 'react-hook-form'

type DefaultValue<T extends object, U extends ArrayPath<T>> = U extends keyof T
	? T[U] extends Array<infer P>
		? P
		: never
	: never

export interface ArrayInputProps<T extends object> {
	name: ArrayPath<T>
	control: Control<T>
	label?: string
	defaultValue: DefaultValue<T, ArrayPath<T>> | string | number
	renderInput: (name: `${ArrayPath<T>}.${number}`) => PropsWithChildren['children']
}
