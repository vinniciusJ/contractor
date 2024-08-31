import { z } from 'zod'

import { contractItemSchema } from './contract-item'

export const contractTypeSchema = z.object({
	id: z.number(),
	name: z.string(),
	contractObjective: z.string(),
	contractItems: contractItemSchema.array(),
})

export type ContractType = z.infer<typeof contractTypeSchema>
