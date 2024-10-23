import { atomWithStorage } from 'jotai/utils'

import { Message } from '@/types/message'

export const messagesAtom = atomWithStorage<Message[]>('chatbot-messages', [])
