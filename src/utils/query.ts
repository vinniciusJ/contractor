import { QueryKey } from '@tanstack/react-query'

import { Endpoints } from './endpoints'

export function withEndpoint(endpoint: TemplateStringsArray, ...values: unknown[]) {
	return [endpoint.join('') as Endpoints, ...values] as QueryKey
}
