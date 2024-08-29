import { Stack } from '@mui/material'

import { ModalActions } from './actions'
import { ModalHeader } from './header'
import { ModalRoot } from './root'

export const Modal = {
	Root: ModalRoot,
	Header: ModalHeader,
	Content: Stack,
	Actions: ModalActions,
}
