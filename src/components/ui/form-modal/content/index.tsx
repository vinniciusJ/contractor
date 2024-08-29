import { FC, ReactNode } from 'react'

import { Grid, GridProps } from '@mui/material'

import { Modal } from '../../modal'

interface Props extends GridProps {
	children: ReactNode
}

export const FormModalContent: FC<Props> = ({ children, ...gridProps }) => {
	return (
		<Modal.Content>
			<Grid container columns={4} {...gridProps}>
				{children}
			</Grid>
		</Modal.Content>
	)
}
