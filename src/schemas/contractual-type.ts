import { z } from 'zod'

import { contractItemFormSchema, contractItemSchema } from './contract-item'

export const contractTypeSchema = z.object({
	id: z.number(),
	name: z.string(),
	contractObjective: z.string(),
	contractItems: contractItemSchema.array(),
})

export const contractTypeFormSchema = contractTypeSchema.omit({ id: true }).extend({
	contractItems: contractItemFormSchema.array(),
})

export type ContractTypeFormFields = z.input<typeof contractTypeFormSchema>
export type ContractType = z.infer<typeof contractTypeSchema>
