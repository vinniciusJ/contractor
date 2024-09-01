import { ReactNode, RefObject } from 'react'

import { TextFieldProps } from '@mui/material'

import { WithForm } from '.'
import { LabelValue, Primitive } from '../label-value'

export interface SelectBaseProps<P extends Primitive> extends Omit<TextFieldProps, 'onChange'> {
	onChange?: (value: P) => void
	selectRef?: RefObject<HTMLInputElement>
	defaultValue?: P
	options: LabelValue<P>[]
	renderOptions?: (props: LabelValue<P>) => ReactNode
	name: string
	multiple?: true
}

export type SelectWithFormProps<T extends object, P extends Primitive> = WithForm<T, SelectBaseProps<P>>

export interface SimpleSelectProps<P extends Primitive> extends SelectBaseProps<P> {
	control?: never
	name: string
	onChange: (value: P) => void
}

export type SelectProps<T extends object, P extends Primitive> = (SelectWithFormProps<T, P> | SimpleSelectProps<P>) &
	Omit<TextFieldProps, 'onChange' | 'name'>
