import { QueryKey, UseQueryResult, useQuery } from '@tanstack/react-query'

import { usePaginationValues } from './pagination'
import { PageableReturn, getPageableReturnSchema } from '@/schemas/utils/mutations'
import { paginationSchema } from '@/schemas/utils/pagination'
import { Service } from '@/services'
import { DEFAULT_PAGE } from '@/utils/constants'
import { Endpoints } from '@/utils/endpoints'

type EndpointQueryKey = Endpoints | QueryKey
type QueryResult<T> = Omit<UseQueryResult<T, Error>, 'data'> & { data: T }

const service = new Service()

const getEndpointAndQueryKey = (endpoint: EndpointQueryKey) => {
	const queryKey = Array.isArray(endpoint) ? endpoint : [endpoint]
	const endpointString = Array.isArray(endpoint) ? endpoint[0] : endpoint

	return [endpointString, queryKey] as [Endpoints, QueryKey]
}

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
