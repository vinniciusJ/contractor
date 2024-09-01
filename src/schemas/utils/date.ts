import { format, parseISO } from 'date-fns'
import { z } from 'zod'

export const dateFormSchema = z
	.date()
	.or(z.string())
	.transform((date) => format(typeof date === 'string' ? parseISO(date) : date, 'yyyy-MM-dd'))
