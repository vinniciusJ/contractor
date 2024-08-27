import { z } from 'zod'

import { contractItemSchema } from './contract-item'

export const contractualTypeSchema = z.object({
	id: z.number(),
	name: z.string(),
	contractObjective: z.string(),
	contractItems: contractItemSchema.array(),
})
