import { FC } from 'react'

import { Stack, StackProps } from '@mui/material'

export const ModalActionsRoot: FC<StackProps> = ({ children, ...props }) => {
	return (
		<Stack alignItems="flex-end" gap={2} {...props}>
			<Stack gap={2} width="50%" direction="row">
				{children}
			</Stack>
		</Stack>
	)
}
