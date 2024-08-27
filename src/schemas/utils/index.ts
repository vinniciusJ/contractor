import { z } from 'zod'

export interface MutationOptions<T extends object> {
	data?: T
	method: MutationMethods
	feedback: MutationFeedback
}

export interface PostMutationOptions<T extends object> extends MutationOptions<T> {
	data: T
	method: 'POST'
}

export interface PutMutationOptions<T extends object> extends MutationOptions<T> {
	data: T
	method: 'PUT'
}

export interface DeleteMutationOptions<T extends object> extends MutationOptions<T> {
	data?: never
	method: 'DELETE'
}

export const mutationFeedbackSchema = z.object({
	success: z.string(),
	error: z.string(),
})

export const mutationMethodsSchema = z.enum(['POST', 'PUT', 'DELETE'])

export type MutationMethods = z.infer<typeof mutationMethodsSchema>
export type MutationFeedback = z.output<typeof mutationFeedbackSchema>
