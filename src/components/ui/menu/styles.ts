import {
	IconButton,
	IconButtonProps,
	ToggleButton,
	ToggleButtonProps,
	styled,
	toggleButtonClasses,
} from '@mui/material'

import { MEDIUM_WEIGHT } from '@/utils/constants'

export const OptionButton = styled(ToggleButton)<ToggleButtonProps>(({ theme }) => ({
	border: 'none',
	borderRadius: 0,
	display: 'flex',
	flexDirection: 'row',
	gap: theme.spacing(1),
	alignItems: 'center',
	justifyContent: 'start',
	textAlign: 'left',
	paddingRight: theme.spacing(3),
	paddingLeft: theme.spacing(3),
	color: theme.palette.juicy.neutral[40],
	textTransform: 'initial',
	fontSize: 14,
	fontWeight: MEDIUM_WEIGHT,
	lineHeight: 2,
	[`&.${toggleButtonClasses.selected}`]: {
		position: 'relative',
		backgroundColor: theme.palette.juicy.neutral[80],
		color: theme.palette.juicy.secondary[50],
		'&::before': {
			content: String('""'),
			position: 'absolute',
			left: 0,
			width: theme.spacing(0.5),
			height: '100%',
			backgroundColor: theme.palette.juicy.secondary[50],
		},
	},
}))

export const LogoutButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
	'& svg': {
		fill: theme.palette.juicy.neutral[60],
	},
}))
