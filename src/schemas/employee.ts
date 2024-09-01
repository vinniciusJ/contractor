import { z } from 'zod'

import { Company, contractedCompanySchema, hiringCompanySchema } from './company'

export const employeeSchema = z.object({
	id: z.number(),
	name: z.string(),
	email: z.string(),
	phone: z.string(),
	code: z.string(),
})

export const employeeFormSchema = employeeSchema.omit({ id: true })

export const contractedCompanyEmployeeSchema = employeeSchema.extend({
	company: contractedCompanySchema,
	isLegalRepresentative: z.boolean(),
})

export const hiringCompanyEmployeeSchema = hiringCompanySchema.extend({
	company: hiringCompanySchema,
	isProjectManager: z.boolean(),
})

export type Employee = z.infer<typeof employeeSchema>
export type EmployeeFormFields = z.input<typeof employeeFormSchema> & { company: Company }

export type ContractedCompanyEmployee = z.infer<typeof contractedCompanyEmployeeSchema>
export type HiringCompanyEmployee = z.infer<typeof hiringCompanyEmployeeSchema>
