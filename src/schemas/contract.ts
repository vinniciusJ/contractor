import { z } from 'zod'

import { contractedCompanySchema, hiringCompanySchema } from './company'
import { contractItemSchema } from './contract-item'
import { contractTypeSchema } from './contractual-type'
import { contractedCompanyEmployeeSchema, hiringCompanyEmployeeSchema } from './employee'
import { installmentSchema } from './installment'
import { paymentMethodSchema } from './payment-method'

const STATUS = ['EM ANDAMENTO', 'EM CONTRATAÇÃO', 'CANCELADO', 'PARALISADO'] as const

export const statusSchema = z.enum(STATUS)

export type Status = z.output<typeof statusSchema>

export const contractFormSchema = z.object({
	name: z.string(),
	contractTypeId: z.number(),
	contractObjective: z.string(),
	contractItems: contractItemSchema.array(),
	startDate: z.date(),
	endDate: z.date(),
	contractedValue: z.number(),
	paymentMethodId: z.number(),
	executionLocal: z.string(),
	latitude: z.number(),
	longitude: z.number(),
	contractedCompanyId: z.number(),
	subsidiaryCompanyId: z.number(),
	contractManagerId: z.number(),
	legalRepresentativeId: z.number(),
	status: statusSchema,
})

export type ContractFormFields = z.infer<typeof contractFormSchema>

export const apiContractSchema = contractFormSchema.extend({
	id: z.number(),

	contractTypeId: z.never(),
	contractedCompanyId: z.never(),
	subsidiaryCompanyId: z.never(),
	contractManagerId: z.never(),
	legalRepresentativeId: z.never(),

	installments: installmentSchema.array(),

	contractType: contractTypeSchema,
	contractedCompany: contractedCompanySchema,
	subsidiaryCompany: hiringCompanySchema,
	contractManager: hiringCompanyEmployeeSchema,
	legalRepresentative: contractedCompanyEmployeeSchema,
	financialProgress: z.number(),
})

export type APIContract = z.infer<typeof apiContractSchema>

export const contractSchema = contractFormSchema.extend({
	paymentMethodId: z.never(),

	paymentMethod: paymentMethodSchema,
})

export type Contract = z.infer<typeof contractSchema>
