import { FC, useEffect } from 'react'

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

	return <Stepper steps={steps} sx={{ mb: 1 }} />
}
