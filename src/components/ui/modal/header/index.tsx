import { FC, SyntheticEvent, useCallback } from 'react'

import { Close as CloseIcon } from '@carbon/icons-react'
import { IconButton, Stack, Typography } from '@mui/material'

import { useModalContext } from '../provider'
import { REGULAR_WEIGHT } from '@/utils/constants'

interface Props {
	children: string
}

export const ModalHeader: FC<Props> = ({ children }) => {
	const { closeModal } = useModalContext()

	const handleClosing = useCallback((event: SyntheticEvent) => {
		event.stopPropagation()

		closeModal()
	}, [])

	return (
		<Stack direction="row" justifyContent="space-between" alignItems="center" gap={2} mb={2}>
			<Typography fontWeight={REGULAR_WEIGHT} color="juicy.neutral.100" fontSize={16}>
				{children}
			</Typography>

			<IconButton onClick={handleClosing}>
				<CloseIcon fontSize="medium" />
			</IconButton>
		</Stack>
	)
}
