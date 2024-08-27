import { z } from 'zod'

import { contractedCompanySchema, subsidiaryCompanySchema } from './company'

export const employeeSchema = z.object({
	id: z.number(),
	name: z.string(),
	email: z.string(),
	phone: z.string(),
})

export const contractedCompanyEmployeeSchema = employeeSchema.extend({
	contractedCompany: contractedCompanySchema,
})

export const subsidiaryCompanyEmployeeSchema = subsidiaryCompanySchema.extend({
	subsidiaryCompany: subsidiaryCompanySchema,
})

export type Employee = z.infer<typeof employeeSchema>
export type ContractedCompanyEmployee = z.infer<typeof contractedCompanyEmployeeSchema>
export type SubsidiaryCompanyEmployee = z.infer<typeof subsidiaryCompanySchema>
