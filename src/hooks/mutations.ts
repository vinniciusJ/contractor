import { useQueryClient, useMutation as useTanstackMutation } from '@tanstack/react-query'

import { MutationOptions } from '@/schemas/utils/mutations'
import { EndpointQueryKey, getEndpointAndQueryKey } from '@/schemas/utils/query'
import { handleMutation } from '@/utils/mutation'

export const useMutation = <T extends object>(endpointQueryKey: EndpointQueryKey, options: MutationOptions) => {
	const [endpoint, queryKey] = getEndpointAndQueryKey(endpointQueryKey)

	const queryClient = useQueryClient()

	return useTanstackMutation({
		mutationFn: async (data?: T) => handleMutation<T>(endpoint, { ...options, data: data }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey }),
	})
}
