import { Children, FC, PropsWithChildren, ReactNode } from 'react'

import { ArrowLeft } from '@carbon/icons-react'
import { IconButton, Stack, StackProps, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

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
				<Typography variant="h1">{children}</Typography>
				{endAdornment}
			</Stack>
		)
	}

	return <Typography variant="h1">{children}</Typography>
}

export const PageLayoutHeaderTitleRoot: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Stack alignItems="center" direction="row" gap={1}>
			{children}
		</Stack>
	)
}

export const PageLayoutRightElementGroup: FC<StackProps> = ({ children, ...props }) => {
	return (
		<Stack direction="row" gap={2} {...props}>
			{Children.map(children, (child) => child)}
		</Stack>
	)
}

export const PageLayoutGoBackButton: FC = () => {
	const navigate = useNavigate()

	return (
		<IconButton onClick={() => navigate(-1)}>
			<ArrowLeft size={20} />
		</IconButton>
	)
}
