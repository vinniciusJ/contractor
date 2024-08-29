import { FC, useCallback } from 'react'

import { Button, ButtonProps } from '@mui/material'

import { useModalContext } from '../../provider'

interface Props extends Omit<ButtonProps, 'onClick'> {
	onConclude: () => void | Promise<void>
}

export const ModalConcludeActionButton: FC<Props> = ({ onConclude, ...buttonProps }) => {
	const { closeModal } = useModalContext()

	const handleConclude = useCallback(async () => {
		await onConclude()
		closeModal()
	}, [])

	return (
		<Button {...buttonProps} variant="contained" onClick={handleConclude}>
			{buttonProps.children ?? 'Concluir'}
		</Button>
	)
}
