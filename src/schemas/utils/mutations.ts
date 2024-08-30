import { z } from 'zod'

export interface MutationOptions {
	method: MutationMethods
	feedback: MutationFeedback
}

export interface MutationFn<T> {
	data?: T
}

export interface PostMutationOptions<T extends object> extends MutationOptions {
	data: T
	method: 'POST'
}

export interface PutMutationOptions<T extends object> extends MutationOptions {
	data: T
	method: 'PUT'
}

export interface DeleteMutationOptions extends MutationOptions {
	data?: never
	method: 'DELETE'
}

export type EndpointParams = (string | number)[]

export const mutationFeedbackSchema = z.object({
	success: z.string(),
	error: z.string(),
})

export const getPageableReturnSchema = z.object({
	first: z.number().nonnegative().default(0),
	last: z.number().nonnegative().default(0),
	items: z.number().nonnegative().default(0),
	data: z.any().array().default([]),
})

export const mutationMethodsSchema = z.enum(['POST', 'PUT', 'DELETE'])

export type MutationMethods = z.infer<typeof mutationMethodsSchema>
export type MutationFeedback = z.output<typeof mutationFeedbackSchema>

export type PageableReturn<T extends object> = Omit<z.infer<typeof getPageableReturnSchema>, 'data'> & { data: T[] }
