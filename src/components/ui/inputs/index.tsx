import { ChangeEvent, ForwardedRef, forwardRef, useCallback } from 'react'

import { TextField } from '@mui/material'
import { useController } from 'react-hook-form'

import type { InputProps, InputPropsWithForm, SimpleInputProps } from '@/types/form/input'
import { Primitive } from '@/types/label-value'

const SimpleInput = forwardRef(function SimpleInput<P extends Primitive>(
	props: Readonly<SimpleInputProps<P>>,
	ref: ForwardedRef<HTMLInputElement>
) {
	const { defaultValue, onChange, ...inputProps } = props

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) onChange(event.target.value as P)
	}, [])

	return (
		<TextField
			onChange={handleChange}
			{...(ref && { inputRef: ref })}
			{...inputProps}
			value={inputProps.value || defaultValue || ''}
			fullWidth
		/>
	)
}) as <P extends Primitive>(props: SimpleInputProps<P> & { ref?: ForwardedRef<HTMLDivElement> }) => JSX.Element

function InputWithForm<T extends object, P extends Primitive>(props: InputPropsWithForm<T, P>) {
	const { control, onChange, name, ...inputProps } = props

	const { field, fieldState } = useController({ control, name })

	const error = fieldState.error

	const handleChange = useCallback(
		(value: P) => {
			const formattedValue = inputProps.type === 'number' && value ? (+value as P) : value
			if (onChange) {
				onChange(formattedValue)
			}

			field.onChange(formattedValue)
		},
		[inputProps]
	)

	return (
		<SimpleInput
			{...inputProps}
			{...field}
			onChange={handleChange}
			defaultValue={field.value}
			error={!!error}
			{...(!!error && error.message && { helperText: error.message })}
		/>
	)
}

export function Input<T extends object, P extends Primitive>(props: InputProps<T, P>) {
	if (props.control) {
		return <InputWithForm {...props} />
	}

	return <SimpleInput {...props} />
}
