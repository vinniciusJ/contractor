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
