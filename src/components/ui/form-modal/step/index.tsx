import { FC } from 'react'

import { GridProps } from '@mui/material'

import { FormModalContent } from '../content'
import { useCurrentStep } from '@/hooks/stepts'

interface Props extends GridProps {
	step: number
}

export const FormModalStep: FC<Props> = ({ step, children, ...props }) => {
	const currentStep = useCurrentStep()

	if (currentStep !== step) {
		return null
	}

	return <FormModalContent {...props}>{children}</FormModalContent>
}
