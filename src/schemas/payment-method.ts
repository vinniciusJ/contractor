import { z } from 'zod'

export const paymentMethodSchema = z.object({
	id: z.number(),
	name: z.string(),
	installmentsNumber: z.number(),
})

export type PaymentMethod = z.infer<typeof paymentMethodSchema>
