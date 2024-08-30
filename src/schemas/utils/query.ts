import { QueryKey } from '@tanstack/react-query'

import { Endpoints } from '@/utils/endpoints'

export type EndpointQueryKey = Endpoints | QueryKey

export const getEndpointAndQueryKey = (endpoint: EndpointQueryKey) => {
	const queryKey = Array.isArray(endpoint) ? endpoint : [endpoint]
	const endpointString = Array.isArray(endpoint) ? endpoint[0] : endpoint

	return [endpointString, queryKey] as [Endpoints, QueryKey]
}
