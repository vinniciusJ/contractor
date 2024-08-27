import { useQuery } from '@tanstack/react-query'

import { Service } from '@/services'
import { Endpoints } from '@/utils/endpoints'

const service = new Service()

export const useGetBy = <T extends object>(endpoint: Endpoints, ...params: (string | number)[]): T | null => {
	const { data = null } = useQuery({
		queryKey: [endpoint, ...params],
		queryFn: async () => service.get<T>(endpoint),
	})

	return data
}

export const useGetAll = <T extends object>(endpoint: Endpoints, ...params: (string | number)[]): T[] => {
	const { data = [] } = useQuery({
		queryKey: [endpoint, ...params],
		queryFn: async () => service.get<T[]>(endpoint),
	})

	return data
}
