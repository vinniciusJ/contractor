import { FC, useCallback, useMemo } from 'react'

import { Button, ButtonProps } from '@mui/material'
import { sha256 } from 'js-sha256'

import { useFormModal } from '../provider'
import { useCurrentStep, useSteps } from '@/hooks/stepts'

const NEXT_BUTTON_KEY = sha256('next')
const SUBMIT_BUTTON_KEY = sha256('submitc')

const FormModalNextStep: FC<ButtonProps> = ({ children, ...buttonProps }) => {
	const { steps } = useFormModal()
	const [currentStep, setCurrentStep] = useSteps()

	const goToNextStep = useCallback(() => {
		if (currentStep < steps.length) {
			setCurrentStep(currentStep + 1)
		}
	}, [steps, currentStep])

	return (
		<Button key={NEXT_BUTTON_KEY} {...buttonProps} variant="contained" onClick={goToNextStep}>
			{children}
		</Button>
	)
}

export const FormModalSubmit: FC<ButtonProps> = ({ children, ...buttonProps }) => {
	const { steps } = useFormModal()
	const currentStep = useCurrentStep()

	const canGoNext = useMemo(() => currentStep < steps.length - 1, [steps, currentStep])

	if (steps.length > 0 && canGoNext) {
		return (
			<FormModalNextStep {...buttonProps} variant="contained">
				Próximo
			</FormModalNextStep>
		)
	}

	return (
		<Button key={SUBMIT_BUTTON_KEY} {...buttonProps} variant="contained" type="submit">
			{children}
		</Button>
	)
}
