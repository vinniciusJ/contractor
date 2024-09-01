import { SxProps } from '@mui/material'

export const selectMenuStyles: SxProps = {
	maxHeight: 200,
	overflowY: 'auto',
	margin: 0,
	padding: 0,
	listStyle: 'none',
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
}
