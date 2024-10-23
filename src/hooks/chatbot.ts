import { useAtom } from 'jotai'

import { useMutation } from './mutations'
import { messagesAtom } from '@/atoms/chatbot'
import { ChatbotFormFields } from '@/schemas/chatbot'
import { Message } from '@/types/message'

export const useChatbot = () => {
	const [messages, setMessages] = useAtom(messagesAtom)

	const mutation = useMutation<ChatbotFormFields>('chatbot', {
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
			data: string
		}

		addMessage('bot', response.data)
	}

	return {
		sendMessage,
		messages,
		isPending: mutation.isPending,
		clearMessages,
	}
}
