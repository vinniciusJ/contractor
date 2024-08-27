import { z } from 'zod'

export const companySchema = z.object({
	id: z.number(),
	name: z.string(),
	corporateName: z.string(),
	code: z.string(),
	phone: z.string(),
	address: z.string(),
})

export const contractedCompanySchema = companySchema

export const subsidiaryCompanySchema = companySchema.extend({
	matrix: z.boolean(),
})

export type Company = z.infer<typeof companySchema>
export type SubsidiaryCompany = z.infer<typeof subsidiaryCompanySchema>
