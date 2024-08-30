import { ChangeEvent, useCallback } from 'react'

import { TextField } from '@mui/material'
import { useController } from 'react-hook-form'

import type { InputProps, InputPropsWithForm, SimpleInputProps } from '@/types/form/input'
import { Primitive } from '@/types/label-value'

function SimpleInput<P extends Primitive>(props: Readonly<SimpleInputProps<P>>) {
	const { defaultValue, onChange, inputRef, ...inputProps } = props

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) onChange(event.target.value as P)
	}, [])

	return (
		<TextField
			onChange={handleChange}
			{...(inputRef && { ref: inputRef })}
			{...inputProps}
			value={inputProps.value || defaultValue || ''}
			fullWidth
		/>
	)
}

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
