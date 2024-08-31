import { CSSProperties, FC } from 'react'

import { Stack, StackProps, styled } from '@mui/material'

interface Props extends StackProps {
	height: CSSProperties['height']
}

const ScrollableAreaComponent = styled(Stack)<StackProps>(({ theme }) => ({
	overflowY: 'scroll',
	padding: theme.spacing(0.5),
	'&::-webkit-scrollbar': {
		width: '0.4em',
	},
	'&::-webkit-scrollbar-track': {
		display: 'none',
	},
	'&::-webkit-scrollbar-thumb': {
		background: '#c6c6c6',
		borderRadius: '4px',
	},
}))

export const ScrollableArea: FC<Props> = ({ height, ...stackProps }) => {
	return <ScrollableAreaComponent {...stackProps} sx={{ maxHeight: height }} />
}
