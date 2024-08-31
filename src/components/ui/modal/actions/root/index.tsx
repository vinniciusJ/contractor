import { FC } from 'react'

import { Stack, StackProps } from '@mui/material'

export const ModalActionsRoot: FC<StackProps> = ({ children, ...props }) => {
	return (
		<Stack alignItems="flex-end" gap={2}>
			<Stack gap={2} direction="row" alignItems="flex-end" {...props}>
				{children}
			</Stack>
		</Stack>
	)
}
