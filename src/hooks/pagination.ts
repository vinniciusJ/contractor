import { useCallback } from 'react'

import { useQueryParam } from './params'
import { pageSchema, pageSizeSchema } from '@/schemas/utils/pagination'
import { getSchemaDefault } from '@/utils/schema'

const DEFAULT_PAGE = getSchemaDefault(pageSchema)
const DEFAULT_PAGE_SIZE = getSchemaDefault(pageSizeSchema)

export const usePagination = () => {
	const [page, setCurrentPage] = useQueryParam('page', String(DEFAULT_PAGE))
	const [pageSize, setCurrentPageSize] = useQueryParam('page-size', String(DEFAULT_PAGE_SIZE))

	const setPage = useCallback((value: number) => {
		setCurrentPage(pageSchema.parse(value), { replace: true })
	}, [])

	const setPageSize = useCallback((value: number) => {
		setCurrentPageSize(pageSizeSchema.parse(value), { replace: true })
	}, [])

	return {
		page: Number(page),
		setPage,
		pageSize: Number(pageSize),
		setPageSize,
	}
}

export const usePaginationValues = () => {
	const { page, pageSize } = usePagination()

	return { page, pageSize }
}

export const useSetPagination = () => {
	const { setPageSize, setPage } = usePagination()

	return { setPageSize, setPage }
}
