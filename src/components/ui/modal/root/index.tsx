import {
	CSSProperties,
	ForwardRefRenderFunction,
	PropsWithChildren,
	forwardRef,
	useCallback,
	useImperativeHandle,
	useState,
} from 'react'

import { Dialog, Portal, Stack } from '@mui/material'

import { ModalOptions, ModalProvider } from '../provider'

export interface ModalRootProps extends PropsWithChildren {
	width?: CSSProperties['width']
	onClose?: () => void
}

const ModalRootComponent: ForwardRefRenderFunction<ModalOptions, ModalRootProps> = (props, ref) => {
	const [isOpened, setIsOpened] = useState(false)

	const openModal = useCallback(() => {
		setIsOpened(true)
	}, [])

	const closeModal = useCallback(() => {
		if (props.onClose) {
			props.onClose()
		}

		setIsOpened(false)
	}, [])

	useImperativeHandle(ref, () => ({
		openModal,
		closeModal,
	}))

	if (!isOpened) return null

	return (
		<Portal container={document.body}>
			<Dialog
				open={isOpened}
				onClose={closeModal}
				sx={{ '& .MuiDialog-paper': { maxWidth: props.width ?? '30vw', width: props.width ?? '30vw' } }}
			>
				<Stack gap={4} px={4} py={2}>
					<ModalProvider openModal={openModal} closeModal={closeModal}>
						<Stack paddingY={1} gap={4}>
							{props.children}
						</Stack>
					</ModalProvider>
				</Stack>
			</Dialog>
		</Portal>
	)
}

export const ModalRoot = forwardRef(ModalRootComponent)
