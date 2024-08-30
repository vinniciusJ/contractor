import { z } from 'zod'

import { contractedCompanySchema, hiringCompanySchema } from './company'

export const employeeSchema = z.object({
	id: z.number(),
	name: z.string(),
	email: z.string(),
	phone: z.string(),
})

export const contractedCompanyEmployeeSchema = employeeSchema.extend({
	company: contractedCompanySchema,
	isLegalRepresentative: z.boolean(),
})

export const hiringCompanyEmployeeSchema = hiringCompanySchema.extend({
	company: hiringCompanySchema,
	isProjectManager: z.boolean(),
})

export type Employee = z.infer<typeof employeeSchema>
export type ContractedCompanyEmployee = z.infer<typeof contractedCompanyEmployeeSchema>
export type HiringCompanyEmployee = z.infer<typeof hiringCompanySchema>
