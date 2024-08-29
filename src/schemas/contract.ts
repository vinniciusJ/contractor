import { z } from 'zod'

import { contractedCompanySchema, hiringCompanySchema } from './company'
import { contractItemSchema } from './contract-item'
import { contractedCompanyEmployeeSchema, subsidiaryCompanyEmployeeSchema } from './employee'
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
	contractedCompany: contractedCompanySchema,
	subsidiaryCompany: hiringCompanySchema,
	contractManager: subsidiaryCompanyEmployeeSchema,
	legalRepresentative: contractedCompanyEmployeeSchema,
})

export type Contract = z.infer<typeof contractSchema>
