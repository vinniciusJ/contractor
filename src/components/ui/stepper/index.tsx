import { FC } from 'react'

import { Stepper as MuiStepper, Step, StepLabel } from '@mui/material'
import { sha256 } from 'js-sha256'

import { useCurrentStep } from '@/hooks/stepts'

interface Props {
	steps: string[]
}

export const Stepper: FC<Props> = ({ steps }) => {
	const currentStep = useCurrentStep()

	return (
		<MuiStepper activeStep={currentStep} sx={{ mb: 0 }}>
			{steps.map((step) => (
				<Step key={sha256(step)} sx={{ '&:first-of-type': { pl: 0 } }}>
					<StepLabel>{step}</StepLabel>
				</Step>
			))}
		</MuiStepper>
	)
}
