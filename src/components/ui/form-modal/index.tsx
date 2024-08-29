import { FormModalContent } from './content'
import { FormModalRoot } from './root'
import { FormModalSubmit } from './submit'
import { Modal } from '../modal'

export const FormModal = {
	Root: FormModalRoot,
	Content: FormModalContent,
	Header: Modal.Header,
	Actions: {
		Root: Modal.Actions.Root,
		Cancel: Modal.Actions.Cancel,
		Submit: FormModalSubmit,
	},
}
