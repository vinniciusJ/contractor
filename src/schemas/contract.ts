import { z } from 'zod'

import { contractedCompanySchema, hiringCompanySchema } from './company'
import { contractItemSchema } from './contract-item'
import { contractedCompanyEmployeeSchema, hiringCompanyEmployeeSchema } from './employee'
import { installmentSchema } from './installment'
import { paymentMethodSchema } from './payment-method'

export const contractSchema = z.object({
	id: z.number(),
	name: z.string(),
	contractType: z.string(),
	contractObjective: z.string(),
	contractItems: contractItemSchema.array(),
	startDate: z.date(),
	endDate: z.date(),
	contractedValue: z.number(),
	paymentMethod: paymentMethodSchema,
	installments: installmentSchema.array(),
	executionLocal: z.string(),
	latitude: z.number(),
	longitude: z.number(),
	contractedCompany: contractedCompanySchema,
	subsidiaryCompany: hiringCompanySchema,
	contractManager: hiringCompanyEmployeeSchema,
	legalRepresentative: contractedCompanyEmployeeSchema,
})

export type Contract = z.infer<typeof contractSchema>
