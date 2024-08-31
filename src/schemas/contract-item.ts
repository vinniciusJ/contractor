import { z } from 'zod'

export const contractItemSchema = z.object({
	id: z.number(),
	name: z.string(),
	scheduledDate: z.date(),
})

export const contractItemFormSchema = contractItemSchema.omit({ id: true })

export type ContractItemFormFields = z.input<typeof contractItemSchema>
export type ContractItem = z.infer<typeof contractItemSchema>
