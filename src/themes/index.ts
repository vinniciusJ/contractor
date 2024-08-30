import { createTheme, formLabelClasses, menuItemClasses, tabClasses } from '@mui/material'

import { COLORS } from './colors'
import { IBM_PLEX_SANS_FONT_FAMILY, fonts } from './fonts'
import { LIGHT_WEIGHT, MEDIUM_WEIGHT, REGULAR_WEIGHT, SEMIBOLD_WEIGHT } from '@/utils/constants'

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
	typography: {
		fontFamily: IBM_PLEX_SANS_FONT_FAMILY,
		h4: undefined,
		h5: undefined,
		h6: undefined,
		h1: {
			fontWeight: MEDIUM_WEIGHT,
			fontSize: 24,
			lineHeight: 0.75,
		},
		h2: {
			fontWeight: LIGHT_WEIGHT,
			fontSize: 18,
			lineHeight: 1.5,
		},
		h3: {
			fontWeight: SEMIBOLD_WEIGHT,
			fontSize: 12,
			lineHeight: 1,
		},
		body1: {
			fontWeight: REGULAR_WEIGHT,
			fontSize: 14,
			lineHeight: 1,
		},
		allVariants: {
			fontFamily: IBM_PLEX_SANS_FONT_FAMILY,
			color: COLORS.neutral[100],
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: Object.values(fonts).join('\n'),
		},
		MuiButton: {
			styleOverrides: {
				root: {
					fontFamily: IBM_PLEX_SANS_FONT_FAMILY,
					textTransform: 'initial',
					width: '100%',
					borderRadius: 0,
				},
			},
			variants: [
				{
					props: { variant: 'outlined' },
					style: {
						borderColor: COLORS.neutral[50],
						color: COLORS.neutral[100],
						transition: 'background',
						'&:hover': {
							background: 'rgba(218, 218, 218, .5)',
							borderColor: COLORS.neutral[50],
						},
						'&:active': {
							background: 'rgba(138, 139, 141, .5)',
							borderColor: COLORS.neutral[50],
						},
						'& svg': { fill: COLORS.neutral[60] },
					},
				},
				{
					props: { variant: 'contained' },
					style: {
						background: COLORS.secondary[60],
						'&:hover': {
							background: COLORS.secondary[70],
						},
					},
				},
			],
			defaultProps: {
				disableRipple: true,
				disableFocusRipple: true,
				variant: 'contained',
			},
		},
		MuiButtonGroup: {
			variants: [
				{
					props: { variant: 'outlined' },
					style: {
						'&:hover': {
							background: 'rgba(218, 218, 218, .5)',
							borderColor: COLORS.neutral[50],
						},
					},
				},
			],
		},
		MuiTabs: {
			styleOverrides: {
				indicator: {
					backgroundColor: COLORS.secondary[60],
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					fontSize: 16,
					lineHeight: 2,
					fontWeight: MEDIUM_WEIGHT,
					textTransform: 'initial',
					[`&.${tabClasses.selected}`]: {
						color: COLORS.secondary[60],
					},
				},
			},
		},
		MuiTable: {
			styleOverrides: {
				root: {
					tableLayout: 'fixed',
				},
			},
		},
		MuiTableRow: {
			styleOverrides: {
				head: {
					background: COLORS.neutral[30],
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					fontSize: 12,
					lineHeight: 1,
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
				},
				head: {
					fontWeight: SEMIBOLD_WEIGHT,
				},
			},
		},
		MuiTablePagination: {
			styleOverrides: {
				root: {
					border: 'none',
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					padding: 16,
					transition: 'background',
					'&:hover': {
						background: COLORS.neutral[20],
					},
					'&:active': {
						background: COLORS.neutral[40],
					},
					[`&.${menuItemClasses.selected}`]: {
						background: COLORS.neutral[30],
						color: COLORS.secondary[60],
						'&:hover': {
							background: COLORS.neutral[30],
						},
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					background: COLORS.neutral[20],
				},
			},
			defaultProps: {
				variant: 'standard',
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					padding: 8,
					[`&.${formLabelClasses.focused}`]: {
						color: COLORS.secondary[60],
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					padding: 8,
					marginTop: 0,
					'&::after': {
						borderBottom: `2px solid ${COLORS.secondary[60]} !important`,
					},
				},
			},
		},
	},
})
