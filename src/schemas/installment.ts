import { z } from 'zod'

export const installmentSchema = z.object({
	id: z.number(),
	value: z.number(),
	scheduledPaymentDate: z.date(),
	paymentDate: z.date(),
	paymentReceiptURL: z.boolean(),
})

export type Installment = z.infer<typeof installmentSchema>
