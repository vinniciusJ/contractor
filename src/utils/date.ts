import { format, fromUnixTime } from 'date-fns'

export const formatDate = (date: number | Date | string) => {
	return format(typeof date === 'string' ? new Date(date) : fromUnixTime(Number(date)), 'dd/MM/yyyy')
}
