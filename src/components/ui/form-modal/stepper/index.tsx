import { FC, useEffect } from 'react'

import { Stack } from '@mui/material'

import { Stepper } from '../../stepper'
import { useFormModal } from '../provider'

interface Props {
	steps: string[]
}

export const FormModalSteps: FC<Props> = ({ steps }) => {
	const { setSteps } = useFormModal()

	useEffect(() => {
		setSteps(steps)
	}, [steps])

	return (
		<Stack mt={1} mb={3}>
			<Stepper steps={steps} />
		</Stack>
	)
}
