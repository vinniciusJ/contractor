import { FC, useCallback } from 'react'

import { Button, ButtonProps } from '@mui/material'

import { useModalContext } from '../../provider'

interface Props extends Omit<ButtonProps, 'onClick'> {
	onCancel?: () => void
}

export const ModalCancelActionButton: FC<Props> = ({ onCancel, ...buttonProps }) => {
	const { closeModal } = useModalContext()

	const handleClick = useCallback(() => {
		if (onCancel) {
			onCancel()
		}

		closeModal()
	}, [onCancel])

	return (
		<Button {...buttonProps} variant="outlined" type="button" onClick={handleClick}>
			{buttonProps.children ?? 'Cancelar'}
		</Button>
	)
}
