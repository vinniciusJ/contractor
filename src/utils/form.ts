import { Endpoints } from './endpoints'
import { Service } from '@/services'

const service = new Service()

export const get = async <T extends object>(endpoint: Endpoints): Promise<T> => {
	return await service.get<T>(endpoint)
}
