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
	content: z.any().array().default([]),
	pageable: z.object({
		sort: z.object({
			sorted: z.boolean(),
			unsorted: z.boolean(),
			empty: z.boolean().optional(),
		}),
		offset: z.number(),
		pageNumber: z.number(),
		pageSize: z.number(),
		paged: z.boolean(),
		unpaged: z.boolean(),
	}),
	last: z.boolean(),
	totalPages: z.number(),
	totalElements: z.number(),
	size: z.number(),
	number: z.number(),
	sort: z.object({
		sorted: z.boolean(),
		unsorted: z.boolean(),
		empty: z.boolean(),
	}),
	first: z.boolean(),
	numberOfElements: z.number(),
	empty: z.boolean(),
})

export const mutationMethodsSchema = z.enum(['POST', 'PUT', 'DELETE'])

export type MutationMethods = z.infer<typeof mutationMethodsSchema>
export type MutationFeedback = z.output<typeof mutationFeedbackSchema>

export type PageableReturn<T extends object> = Omit<z.infer<typeof getPageableReturnSchema>, 'content'> & {
	content: T[]
}
