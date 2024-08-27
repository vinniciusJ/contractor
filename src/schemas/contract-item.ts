import { z } from 'zod'

export const contractItemSchema = z.object({
	id: z.number(),
	name: z.string(),
	scheduledDate: z.date(),
})

export type ContractItem = z.infer<typeof contractItemSchema>
