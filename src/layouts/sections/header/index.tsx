import { Children, FC, PropsWithChildren, ReactNode } from 'react'

import { Stack, Typography } from '@mui/material'

interface TitleProps extends PropsWithChildren {
	endAdornment?: ReactNode
}

export const PageLayoutHeader: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Stack direction="row" justifyContent="space-between">
			{children}
		</Stack>
	)
}

export const PageLayoutHeaderTitle: FC<TitleProps> = ({ children, endAdornment }) => {
	if (endAdornment) {
		return (
			<Stack direction="row" gap={1}>
				<Typography>{children}</Typography>
				{endAdornment}
			</Stack>
		)
	}

	return <Typography>{children}</Typography>
}

export const PageLayoutRightElementGroup: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Stack direction="row" gap={2}>
			{Children.map(children, (child) => child)}
		</Stack>
	)
}
