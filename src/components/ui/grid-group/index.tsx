import { FC } from 'react'

import { Grid, GridProps, Stack, Typography } from '@mui/material'

interface Props extends GridProps {
	title?: string
}

export const GridGroup: FC<Props> = ({ title, children, ...gridProps }) => {
	return (
		<Stack gap={4} width="100%">
			{title ? <Typography variant="h2">{title}</Typography> : null}

			<Grid container columns={4} columnSpacing={15} rowSpacing={4} {...gridProps}>
				{children}
			</Grid>
		</Stack>
	)
}
