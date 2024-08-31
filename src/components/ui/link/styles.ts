import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
	color: theme.palette.juicy.secondary[70],
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: theme.spacing(1),
	'& *': {
		color: theme.palette.juicy.secondary[70],
	},
	'& svg': {
		fill: theme.palette.juicy.secondary[70],
	},
	'&:hover': {
		textDecoration: 'underline',
	},
}))
