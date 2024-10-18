import { useQuery } from '@tanstack/react-query'

import { usePagination } from './pagination'
import { PageableReturn } from '@/schemas/utils/mutations'
import { EndpointQueryKey, getEndpointAndQueryKey } from '@/schemas/utils/query'
import { Service } from '@/services'
import { DEFAULT_PAGE } from '@/utils/constants'

const service = new Service()

export const useGetOne = <T extends object>(endpointQueryKey: EndpointQueryKey) => {
	const [endpoint, queryKey] = getEndpointAndQueryKey(endpointQueryKey)

	const { data = null, ...query } = useQuery({
		queryKey,
		queryFn: async () => service.get<T>(endpoint),
	})

	return { data, ...query }
}

export const useGetList = <T extends object>(endpointQueryKey: EndpointQueryKey, params?: Record<string, unknown>) => {
	const [endpoint, queryKey] = getEndpointAndQueryKey(endpointQueryKey)

	const { page, pageSize } = usePagination()

	const { data = DEFAULT_PAGE, ...query } = useQuery({
		queryKey: [...queryKey, { page, pageSize, ...params }],
		queryFn: async () =>
			await service.get<PageableReturn<T>>(endpoint, {
				paged: false,
				...params,
			}),
	})

	return {
		...query,
		data: data.content as T[],
		totalDataSize: data.totalElements,
	}
}

export const useGetPageable = <T extends object>(
	endpointQueryKey: EndpointQueryKey,
	params?: Record<string, unknown>
) => {
	const { page, pageSize } = usePagination()

	return useGetList<T>(endpointQueryKey, {
		paged: true,
		page,
		size: pageSize,
		...params,
	})
}
