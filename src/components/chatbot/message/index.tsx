import { Stack, Typography } from '@mui/material'

import { Message as MessageType } from '@/types/message'

export const Message = ({ sender, text }: MessageType) => {
	return (
		<Stack
			sx={{
				backgroundColor: (theme) => (sender === 'user' ? '#FFF' : theme.palette.juicy.secondary[20]),
				alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
			}}
			p={2}
			borderRadius={1}
		>
			<Typography>{text}</Typography>
		</Stack>
	)
}
