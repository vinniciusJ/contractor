import { useCallback } from 'react'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useController } from 'react-hook-form'

import { DateInputProps, DateInputWithFormProps, SimpleDateInput as SimpleDateInputProps } from '@/types/form/date'

function SimpleDateInput(props: Readonly<SimpleDateInputProps>) {
	const { defaultValue, onChange, visibleViews, ...inputProps } = props

	const handleChange = useCallback(
		(value: Date | null) => {
			onChange(value ?? new Date())
		},
		[inputProps]
	)

	return (
		<LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDateFns}>
			<DatePicker
				onChange={handleChange}
				label={inputProps.label}
				defaultValue={defaultValue}
				views={visibleViews}
				sx={{ width: '100%' }}
				value={typeof inputProps.value === 'string' ? parseISO(inputProps.value) : (inputProps.value as Date)}
			/>
		</LocalizationProvider>
	)
}

function DateInputWithForm<T extends object>(props: DateInputWithFormProps<T>) {
	const { control, name, ...selectProps } = props

	const { field, fieldState } = useController({ control, name })

	const error = fieldState.error

	return (
		<SimpleDateInput
			{...selectProps}
			{...field}
			defaultValue={field.value}
			error={!!error}
			{...(!!error && error.message && { helperText: error.message })}
		/>
	)
}

export function DateInput<T extends object>(props: DateInputProps<T>) {
	if (props.control) {
		return <DateInputWithForm {...props} />
	}

	return <SimpleDateInput {...props} />
}
