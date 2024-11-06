import { Stack, Typography } from '@mui/material'

import { theme } from '@/themes'
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
			gap={1}
		>
			{sender == 'bot' && (
				<Typography fontWeight={600} color={theme.palette.juicy.secondary[80]}>
					Trac
				</Typography>
			)}
			<Typography sx={{ whiteSpace: 'pre-wrap' }}>{text}</Typography>
		</Stack>
	)
}
