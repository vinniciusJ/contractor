import { z } from 'zod'

export const contractItemType = z.enum(['DELIVERY', 'SERVICE'])

export const contractItemSchema = z.object({
	id: z.number(),
	name: z.string(),
	type: contractItemType,
	scheduledDate: z.date(),
	finishedDate: z.date().nullable(),
})

export const contractItemFormSchema = contractItemSchema.omit({ id: true })

export type ContractItemFormFields = z.input<typeof contractItemSchema>
export type ContractItem = z.infer<typeof contractItemSchema>
export type ContractItemType = z.infer<typeof contractItemType>
