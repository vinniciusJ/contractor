import { PropsWithChildren } from 'react'

import { Stack, StackProps } from '@mui/material'

export const Box = ({ children, ...other }: PropsWithChildren & StackProps) => {
	return (
		<Stack border={(theme) => `1px solid ${theme.palette.juicy.neutral[40]}`} p={2} {...other}>
			{children}
		</Stack>
	)
}
