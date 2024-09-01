import { z } from 'zod'

import { LabelValue } from '@/types/label-value'

export const optionsParser = z
	.record(z.any())
	.transform<
		LabelValue<string, string>[]
	>((value) => Object.entries(value).map(([key, value]) => ({ label: value, value: key })))
