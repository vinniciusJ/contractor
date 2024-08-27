import { useMutation as useTanstackMutation } from '@tanstack/react-query'

import { MutationOptions } from '@/schemas/utils/mutations'
import { Endpoints } from '@/utils/endpoints'
import { handleMutation } from '@/utils/mutation'

export const useMutation = <T extends object = object>(endpoint: Endpoints, options: MutationOptions<T>) => {
	return useTanstackMutation({
		mutationFn: async () => handleMutation(endpoint, options),
	})
}
