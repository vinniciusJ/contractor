import { z } from 'zod'

import { dateFormSchema } from './utils/date'

export const contractItemType = z.enum(['DELIVERY', 'SERVICE'])

export const contractItemSchema = z.object({
	id: z.number(),
	name: z.string(),
	type: contractItemType,
	scheduledDate: z.string(),
	finishedDate: z.string(),
})

export const contractItemFormSchema = contractItemSchema.omit({ id: true, finishedDate: true }).extend({
	scheduledDate: dateFormSchema,
})

export type ContractItemFormFields = z.input<typeof contractItemSchema>
export type ContractItem = z.infer<typeof contractItemSchema>
export type ContractItemType = z.infer<typeof contractItemType>
