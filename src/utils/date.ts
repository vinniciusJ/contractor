import { format } from 'date-fns'

export const formatDate = (date: string | number | Date) => {
	return format(date, 'dd/MM/yyyy')
}
