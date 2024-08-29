import { FC } from 'react'

import { Stack, StackProps } from '@mui/material'

export const ModalActionsRoot: FC<StackProps> = ({ children, ...props }) => {
	return (
		<Stack direction="row" justifyContent="flex-end" gap={2} {...props}>
			{children}
		</Stack>
	)
}
