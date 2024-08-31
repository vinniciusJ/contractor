import { FC, useCallback, useMemo } from 'react'

import { Button, ButtonProps } from '@mui/material'
import { sha256 } from 'js-sha256'

import { ModalCancelActionButton } from '../../modal/actions/cancel'
import { useFormModal } from '../provider'
import { useCurrentStep, useSteps } from '@/hooks/stepts'

const PREVIOUS_BUTTON_KEY = sha256('previous')

const FormModalPreviousStep: FC<ButtonProps> = ({ ...buttonProps }) => {
	const { steps } = useFormModal()
	const [currentStep, setCurrentStep] = useSteps()

	const goBackStep = useCallback(() => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1)
		}
	}, [steps, currentStep])

	return (
		<Button key={PREVIOUS_BUTTON_KEY} {...buttonProps} variant="outlined" onClick={goBackStep}>
			Voltar
		</Button>
	)
}

export const FormModalPreviousButton: FC<ButtonProps> = ({ ...buttonProps }) => {
	const { steps } = useFormModal()
	const currentStep = useCurrentStep()

	const canGoBack = useMemo(() => currentStep > 0, [steps, currentStep])

	if (steps.length > 0 && canGoBack) {
		return <FormModalPreviousStep {...buttonProps} variant="contained" />
	}

	return <ModalCancelActionButton {...buttonProps} />
}
