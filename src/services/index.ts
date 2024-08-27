import { contractorAPI } from '@/shared/api'
import { Endpoints } from '@/utils/endpoints'

export class Service {
	api = contractorAPI

	async get<T extends object | object[]>(endpoint: Endpoints): Promise<T> {
		const response = await this.api.get<T>(endpoint)

		return response.data
	}

	async post<T extends object>(data: T, endpoint: Endpoints): Promise<void> {
		return await this.api.post(endpoint, data)
	}

	async put<T extends object>(data: T, endpoint: Endpoints): Promise<void> {
		return await this.api.put(endpoint, data)
	}

	async delete(endpoint: Endpoints): Promise<void> {
		return await this.api.delete(endpoint)
	}
}
