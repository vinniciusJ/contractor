import { z } from 'zod'

export const paymentMethodSchema = z.object({
	id: z.number(),
	name: z.string(),
	frequency: z.number().min(1).default(1),
})

export const paymentMethodFormSchema = paymentMethodSchema.omit({ id: true })

export type PaymentMethodFormFields = z.input<typeof paymentMethodFormSchema>
export type PaymentMethod = z.infer<typeof paymentMethodSchema>
