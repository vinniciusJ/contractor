import { z } from 'zod'

export const companySchema = z.object({
	id: z.number(),
	name: z.string(),
	corporateName: z.string(),
	code: z.string(),
	phone: z.string(),
	email: z.string().email(),
	address: z.string(),
})

export const companyFormSchema = companySchema.omit({ id: true })

export const contractedCompanySchema = companySchema

export const hiringCompanySchema = companySchema.extend({
	matrix: z.boolean(),
})

export type CompanyFormFields = z.input<typeof companyFormSchema>

export type Company = z.infer<typeof companySchema>
export type HiringCompany = z.infer<typeof hiringCompanySchema>
