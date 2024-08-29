import { FC, PropsWithChildren } from 'react'

import { Stack, StackProps, Typography } from '@mui/material'

import { REGULAR_WEIGHT } from '@/utils/constants'

interface Props extends PropsWithChildren, StackProps {
	bgcolor: StackProps['bgcolor']
	color: StackProps['color']
}

export const Tag: FC<Props> = ({ bgcolor, color, children, ...props }) => {
	return (
		<Stack bgcolor={bgcolor} p={1} width="fit-content" {...props}>
			<Typography color={color} fontWeight={REGULAR_WEIGHT}>
				{children}
			</Typography>
		</Stack>
	)
}
