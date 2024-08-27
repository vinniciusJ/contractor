import { MutationOptions, PostMutationOptions } from '@/schemas/utils'
import { Service } from '@/services'

const isPostMutation = <T extends object>(options: MutationOptions<T>): options is PostMutationOptions<T> => {
	return !!options.data && options.method === 'POST'
}

const isPutMutation = <T extends object>(options: MutationOptions<T>): options is PostMutationOptions<T> => {
	return !!options.data && options.method === 'PUT'
}

const isDeleteMutation = <T extends object>(options: MutationOptions<T>): options is PostMutationOptions<T> => {
	return !options.data && options.method === 'DELETE'
}

export const handleMutation = async <T extends object>(endpoint: string, options: MutationOptions<T>) => {
	const service = new Service()

	if (isPostMutation(options)) {
		return await service.post<T>(options.data, endpoint)
	}

	if (isPutMutation(options)) {
		return await service.put<T>(options.data, endpoint)
	}

	if (isDeleteMutation(options)) {
		await service.delete(endpoint)
	}
}
