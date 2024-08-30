import { QueryKey } from '@tanstack/react-query'

import { Endpoints } from './endpoints'

export function withEndpoint(endpoint: TemplateStringsArray, ...values: unknown[]): QueryKey {
	const fullEndpoint = endpoint.reduce((acc, part, index) => {
		return acc + part + (values[index] === undefined ? '' : String(values[index]))
	}, '')

	return [fullEndpoint as Endpoints, ...values] as QueryKey
}
