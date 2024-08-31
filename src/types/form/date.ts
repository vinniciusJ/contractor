import { WithForm } from '.'
import { InputBase } from './input'

type DateView = 'year' | 'month' | 'day'

export interface DateInputBase extends InputBase<Date> {
	visibleViews: DateView[]
}

export type DateInputWithFormProps<T extends object> = WithForm<T, DateInputBase>

export interface SimpleDateInput extends DateInputBase {
	onChange: (value: Date) => void
	defaultValue: Date
	name?: string
	control?: never
}

export type DateInputProps<T extends object> = DateInputWithFormProps<T> | SimpleDateInput
