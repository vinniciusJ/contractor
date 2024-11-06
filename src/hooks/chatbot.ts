import { useAtom } from 'jotai'

import { useMutation } from './mutations'
import { messagesAtom } from '@/atoms/chatbot'
import { ChatbotType } from '@/schemas/chatbot'
import { Message } from '@/types/message'

export const useChatbot = () => {
	const [messages, setMessages] = useAtom(messagesAtom)

	const mutation = useMutation<ChatbotType>('chatbot', {
		method: 'POST',
	})

	const addMessage = (sender: 'user' | 'bot', text: string) => {
		const newMessage: Message = { sender, text }
		setMessages((prevMessages) => [...prevMessages, newMessage])
	}

	const clearMessages = () => {
		setMessages([])
	}

	const sendMessage = async (message: string) => {
		addMessage('user', message)

		const response = (await mutation.mutateAsync({ message })) as {
			data: {
				message: string
			}
		}

		addMessage('bot', response.data.message)
	}

	return {
		sendMessage,
		messages,
		isPending: mutation.isPending,
		clearMessages,
	}
}
