import { z } from 'zod'

export const chatbotFormSchema = z.object({
	message: z.string(),
})

export type ChatbotFormFields = z.input<typeof chatbotFormSchema>
