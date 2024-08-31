import { z } from 'zod'

import { contractedCompanySchema, hiringCompanySchema } from './company'
import { contractItemSchema } from './contract-item'
import { contractedCompanyEmployeeSchema, hiringCompanyEmployeeSchema } from './employee'
import { installmentSchema } from './installment'
import { paymentMethodSchema } from './payment-method'

const STATUS = ['EM ANDAMENTO', 'EM CONTRATAÇÃO', 'CANCELADO', 'PARALISADO'] as const

export const statusSchema = z.enum(STATUS)

export type Status = z.output<typeof statusSchema>

export const baseContractSchema = z.object({
	id: z.number(),
	name: z.string(),
	contractType: z.string(),
	contractObjective: z.string(),
	contractItems: contractItemSchema.array(),
	startDate: z.date(),
	endDate: z.date(),
	contractedValue: z.number(),
	paymentMethodId: z.number(),
	installments: installmentSchema.array(),
	executionLocal: z.string(),
	latitude: z.number(),
	longitude: z.number(),
	contractedCompany: contractedCompanySchema,
	subsidiaryCompany: hiringCompanySchema,
	contractManager: hiringCompanyEmployeeSchema,
	legalRepresentative: contractedCompanyEmployeeSchema,
	status: statusSchema,
	financialProgress: z.number(),
})

export type BaseContract = z.infer<typeof baseContractSchema>

export const contractSchema = baseContractSchema.extend({
	paymentMethodId: z.never(),

	paymentMethod: paymentMethodSchema,
})

export type Contract = z.infer<typeof contractSchema>
