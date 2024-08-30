import { ElementType, FC, useMemo } from 'react'

import { Grid, GridProps, Stack, StackProps, Typography } from '@mui/material'

interface StackFieldProps extends Omit<StackProps, 'component'> {
	label: string
	component?: 'stack'
}

interface GridFieldProps extends Omit<GridProps, 'component'> {
	component?: 'grid'
	label: string
}

type Props = StackFieldProps | GridFieldProps

export const Field: FC<Props> = ({ component = 'grid', children, label, ...props }) => {
	const isGridComponent = useMemo(() => component === 'grid', [component])
	const Component: ElementType = isGridComponent ? Grid : Stack

	return (
		<Component {...(isGridComponent && { item: true, xs: 1 })} {...props}>
			<Stack gap={1}>
				<Typography variant="h3">{label}</Typography>
				<Typography variant="body1">{children}</Typography>
			</Stack>
		</Component>
	)
}
