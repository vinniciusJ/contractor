import { Endpoints } from './endpoints'
import { MutationOptions } from '@/schemas/utils/mutations'
import { Service } from '@/services'

export const handleMutation = async <T extends object>(
	endpoint: Endpoints,
	options: MutationOptions & { data?: T }
): Promise<unknown> => {
	const service = new Service()

	if (options.method === 'POST' && options.data) {
		return await service.post<T>(options.data, endpoint)
	}

	if (options.method === 'PUT' && options.data) {
		return await service.put<T>(options.data, endpoint)
	}

	return await service.delete(endpoint)
}
