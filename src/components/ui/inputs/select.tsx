import { ChangeEvent, ForwardedRef, forwardRef, useCallback } from 'react'

import { MenuItem, TextField } from '@mui/material'
import { useController } from 'react-hook-form'

import { selectMenuStyles } from './styles'
import type { SelectProps, SelectWithFormProps, SimpleSelectProps } from '@/types/form/select'
import { Primitive } from '@/types/label-value'

const SimpleSelect = forwardRef(function SimpleSelect<P extends Primitive>(
	props: Readonly<SimpleSelectProps<P>>,
	ref: ForwardedRef<HTMLInputElement>
) {
	const { options, renderOptions, onChange, selectRef, ...selectProps } = props

	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			if (onChange) onChange(event.target.value as P)
		},
		[onChange]
	)

	return (
		<TextField
			select
			onChange={handleChange}
			{...selectProps}
			SelectProps={{
				...props.SelectProps,
				MenuProps: {
					PaperProps: { sx: selectMenuStyles },
				},
			}}
			{...(selectRef && { ref: selectRef })}
			defaultValue={selectProps.defaultValue || ''}
			value={selectProps.value || ''}
			fullWidth
			ref={ref}
		>
			{options.map((option) => {
				if (renderOptions) {
					return renderOptions(option)
				}

				return (
					<MenuItem
						key={option.value as string | number}
						value={option.value as string | number}
						sx={{ minHeight: '28px !important' }}
					>
						{option.label}
					</MenuItem>
				)
			})}
		</TextField>
	)
}) as <P extends Primitive>(props: SimpleSelectProps<P> & { ref?: ForwardedRef<HTMLDivElement> }) => JSX.Element

function SelectWithForm<T extends object, P extends Primitive>(props: SelectWithFormProps<T, P>) {
	const { control, name, ...selectProps } = props
	const { field, fieldState } = useController({ control, name })
	const error = fieldState.error

	return (
		<SimpleSelect
			{...selectProps}
			{...field}
			defaultValue={field.value}
			error={!!error}
			{...(!!error && { helperText: error.message as string })}
		/>
	)
}

export function Select<T extends object, P extends Primitive>(props: SelectProps<T, P>) {
	if (props.control) {
		return <SelectWithForm {...props} />
	}

	return <SimpleSelect {...props} />
}
