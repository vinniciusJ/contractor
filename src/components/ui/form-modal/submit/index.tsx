import { FC } from 'react'

import { Button, ButtonProps } from '@mui/material'

export const FormModalSubmit: FC<ButtonProps> = ({ children, ...buttonProps }) => {
	return (
		<Button {...buttonProps} variant="contained" type="submit">
			{children}
		</Button>
	)
}
