import { z } from 'zod'

import { contractedCompanySchema, hiringCompanySchema } from './company'

export const employeeSchema = z.object({
	id: z.number(),
	name: z.string(),
	email: z.string(),
	phone: z.string(),
})

export const contractedCompanyEmployeeSchema = employeeSchema.extend({
	contractedCompany: contractedCompanySchema,
})

export const subsidiaryCompanyEmployeeSchema = hiringCompanySchema.extend({
	subsidiaryCompany: hiringCompanySchema,
})

export type Employee = z.infer<typeof employeeSchema>
export type ContractedCompanyEmployee = z.infer<typeof contractedCompanyEmployeeSchema>
export type SubsidiaryCompanyEmployee = z.infer<typeof hiringCompanySchema>
