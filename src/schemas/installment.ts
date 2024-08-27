import { z } from 'zod'

export const installmentSchema = z.object({
	id: z.number(),
	value: z.number(),
	scheduledDeliveryDate: z.date(),
	paymentDate: z.date(),
	paymentReceipt: z.boolean(),
})

export type Installment = z.infer<typeof installmentSchema>
