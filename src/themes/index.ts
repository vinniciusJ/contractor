import { createTheme } from '@mui/material'

import { COLORS } from './colors'

export const theme = createTheme({
	palette: {
		juicy: {
			primary: COLORS.primary,
			secondary: COLORS.secondary,
			neutral: COLORS.neutral,
			green: COLORS.green,
			olive: COLORS.olive,
			orange: COLORS.orange,
			purple: COLORS.purple,
			red: COLORS.red,
		},
	},
})
