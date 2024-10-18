import { z } from 'zod'

import { contractedCompanySchema, hiringCompanySchema } from './company'
import { contractItemFormSchema, contractItemSchema } from './contract-item'
import { contractTypeSchema } from './contractual-type'
import { contractedCompanyEmployeeSchema, hiringCompanyEmployeeSchema } from './employee'
import { installmentSchema } from './installment'
import { paymentMethodSchema } from './payment-method'

const STATUS = ['IN_PROGRESS', 'UNDER_CONTRACT', 'CANCELED', 'PARALYZED'] as const

export const statusSchema = z.enum(STATUS)

export type Status = z.output<typeof statusSchema>

export const contractFormSchema = z.object({
	name: z.string(),
	contractTypeId: z.number(),
	contractObjective: z.string(),
	startDate: z.date(),
	endDate: z.date(),
	contractedValue: z.number(),
	paymentMethodId: z.number(),
	executionLocal: z.string(),
	latitude: z.number(),
	longitude: z.number(),
	subsidiaryCompanyId: z.number(),
	contractManagerId: z.number(),
	contractedCompanyId: z.number(),
	legalRepresentativeId: z.number(),
	contractItems: contractItemFormSchema.array(),
})

export type ContractFormFields = z.infer<typeof contractFormSchema>

export const contractSchema = contractFormSchema.extend({
	id: z.number(),

	contractTypeId: z.never(),
	contractedCompanyId: z.never(),
	subsidiaryCompanyId: z.never(),
	contractManagerId: z.never(),
	legalRepresentativeId: z.never(),

	installments: installmentSchema.array(),
	contractItems: contractItemSchema.array(),

	contractType: contractTypeSchema,
	contractedCompany: contractedCompanySchema,
	subsidiaryCompany: hiringCompanySchema,
	contractManager: hiringCompanyEmployeeSchema,
	legalRepresentative: contractedCompanyEmployeeSchema,
	financialProgress: z.number(),
	status: statusSchema,
	paymentMethod: paymentMethodSchema,
})

export type Contract = z.infer<typeof contractSchema>
