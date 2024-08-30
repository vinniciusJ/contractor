import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { usePaginationValues } from './pagination'
import { PageableReturn, getPageableReturnSchema } from '@/schemas/utils/mutations'
import { paginationSchema } from '@/schemas/utils/pagination'
import { EndpointQueryKey, getEndpointAndQueryKey } from '@/schemas/utils/query'
import { Service } from '@/services'
import { DEFAULT_PAGE } from '@/utils/constants'

type QueryResult<T> = Omit<UseQueryResult<T, Error>, 'data'> & { data: T }

const service = new Service()

export const useGetOne = <T extends object>(endpointQueryKey: EndpointQueryKey): QueryResult<T | null> => {
	const [endpoint, queryKey] = getEndpointAndQueryKey(endpointQueryKey)

	const { data = null, ...query } = useQuery({
		queryKey,
		queryFn: async () => service.get<T>(endpoint),
	})

	return { data, ...query }
}

export const useGetList = <T extends object>(endpointQueryKey: EndpointQueryKey): QueryResult<T[]> => {
	const [endpoint, queryKey] = getEndpointAndQueryKey(endpointQueryKey)

	const { data = [], ...query } = useQuery({
		queryKey,
		queryFn: async () => service.get<T[]>(endpoint),
	})

	return { data, ...query }
}

export const useGetPageable = <T extends object>(
	endpointQueryKey: EndpointQueryKey
): QueryResult<PageableReturn<T>> => {
	const [endpoint, queryKey] = getEndpointAndQueryKey(endpointQueryKey)

	const pagination = usePaginationValues()

	const { data = DEFAULT_PAGE, ...query } = useQuery({
		queryKey: [...queryKey, { ...pagination }],
		queryFn: async () => await service.get<PageableReturn<T>>(endpoint, { ...paginationSchema.parse(pagination) }),
	})

	return {
		...query,
		data: getPageableReturnSchema.parse(data) as PageableReturn<T>,
	}
}
