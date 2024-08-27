import { z } from 'zod'

export const pageSchema = z.number().nonnegative().min(1).default(1)
export const pageSizeSchema = z.number().nonnegative().min(5).default(5)

export const paginationSchema = z
	.object({
		page: pageSchema,
		pageSize: pageSizeSchema,
	})
	.transform((pagination) => ({
		_page: pagination.page,
		_per_page: pagination.pageSize,
	}))

export type PaginationParams = z.input<typeof paginationSchema>
