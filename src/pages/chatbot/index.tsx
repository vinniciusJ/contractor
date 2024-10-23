import { FC, useCallback, useState } from 'react'

import { SendFilled } from '@carbon/icons-react'
import { Button, IconButton, Stack, TextField } from '@mui/material'

import { Message } from '@/components/chatbot/message'
import Loading from '@/components/ui/loading'
import { useChatbot } from '@/hooks/chatbot'
import { PageLayout } from '@/layouts/page'

const Chatbot: FC = () => {
	const [message, setMessage] = useState('')
	const { sendMessage, messages, isPending, clearMessages } = useChatbot()

	const handleSubmit = useCallback(() => {
		sendMessage(message)
		setMessage('')
	}, [message])

	return (
		<PageLayout.Root>
			<PageLayout.Header.Root>
				<PageLayout.Header.Title.Root>
					<PageLayout.Header.Title.Text>Chatbot</PageLayout.Header.Title.Text>
				</PageLayout.Header.Title.Root>
				<PageLayout.Header.RightElementGroup>
					<Button variant="text" onClick={clearMessages} disabled={messages.length === 0}>
						Limpar chat
					</Button>
				</PageLayout.Header.RightElementGroup>
			</PageLayout.Header.Root>

			<PageLayout.Content>
				<Stack justifyContent="space-between" gap={3}>
					<Stack
						bgcolor={(theme) => theme.palette.juicy.neutral[20]}
						width="100%"
						height="80vh"
						p={3}
						gap={3}
						sx={{ overflowY: 'auto' }}
					>
						{messages.map((message, index) => (
							<Message key={index + message.text} {...message} />
						))}

						{isPending && <Loading />}
					</Stack>

					<TextField
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter' && message.length > 0 && !isPending) {
								e.preventDefault()
								handleSubmit()
							}
						}}
						InputProps={{
							endAdornment: (
								<IconButton
									disabled={message.length === 0 || isPending}
									size="large"
									sx={{ color: (theme) => theme.palette.juicy.secondary[60] }}
									onClick={handleSubmit}
								>
									<SendFilled size={32} />
								</IconButton>
							),
						}}
						placeholder="Digite aqui a sua pergunta"
					/>
				</Stack>
			</PageLayout.Content>
		</PageLayout.Root>
	)
}

export default Chatbot
