import { z } from 'zod'

export const chatbotSchema = z.object({
	message: z.string(),
})

export type ChatbotType = z.input<typeof chatbotSchema>
