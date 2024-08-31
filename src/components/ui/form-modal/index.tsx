import { FormModalContent } from './content'
import { FormModalPreviousButton } from './previous'
import { FormModalRoot } from './root'
import { FormModalStep } from './step'
import { FormModalSteps } from './stepper'
import { FormModalSubmit } from './submit'
import { Modal } from '../modal'

export const FormModal = {
	Root: FormModalRoot,
	Content: FormModalContent,
	Header: Modal.Header,
	Stepper: FormModalSteps,
	StepContent: FormModalStep,
	Actions: {
		Root: Modal.Actions.Root,
		Cancel: FormModalPreviousButton,
		Submit: FormModalSubmit,
	},
}
