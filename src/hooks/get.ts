import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { usePaginationValues } from './pagination'
import { EndpointParams, PageableReturn, getPageableReturnSchema } from '@/schemas/utils/mutations'
import { paginationSchema } from '@/schemas/utils/pagination'
import { Service } from '@/services'
import { DEFAULT_PAGE } from '@/utils/constants'
import { Endpoints } from '@/utils/endpoints'

type QueryResult<T> = Omit<UseQueryResult<T, Error>, 'data'> & { data: T }

const service = new Service()

export const useGetOne = <T extends object>(endpoint: Endpoints, ...params: EndpointParams): QueryResult<T | null> => {
	const { data = null, ...query } = useQuery({
		queryKey: [endpoint, ...params],
		queryFn: async () => service.get<T>(endpoint),
	})

	return { data, ...query }
}

export const useGetList = <T extends object>(endpoint: Endpoints, ...params: EndpointParams): QueryResult<T[]> => {
	const { data = [], ...query } = useQuery({
		queryKey: [endpoint, ...params],
		queryFn: async () => service.get<T[]>(endpoint),
	})

	return { data, ...query }
}

export const useGetPageable = <T extends object>(
	endpoint: Endpoints,
	...params: EndpointParams
): QueryResult<PageableReturn<T>> => {
	const pagination = usePaginationValues()

	const { data = DEFAULT_PAGE, ...query } = useQuery({
		queryKey: [endpoint, ...params, { ...pagination }],
		queryFn: async () => await service.get<PageableReturn<T>>(endpoint, { ...paginationSchema.parse(pagination) }),
	})

	return {
		...query,
		data: getPageableReturnSchema.parse(data),
	}
}
