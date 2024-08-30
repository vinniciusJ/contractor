import { RefObject } from 'react'

import { TextFieldProps } from '@mui/material'

import { WithForm } from '.'
import { Primitive } from '../label-value'

export interface InputBase<P extends Primitive> extends Omit<TextFieldProps, 'onChange' | 'name'> {
	onChange?: (value: P) => void
	inputRef?: RefObject<HTMLInputElement>
	defaultValue?: P
	label?: string
}

export type InputPropsWithForm<T extends object, P extends Primitive> = WithForm<T, InputBase<P>>

export interface SimpleInputProps<P extends Primitive> extends InputBase<P> {
	onChange: (value: P) => void
	defaultValue: P
	name?: string
	control?: never
}

export type InputProps<T extends object, P extends Primitive> = InputPropsWithForm<T, P> | SimpleInputProps<P>
