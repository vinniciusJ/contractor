import { RefObject } from 'react'

import { ModalOptions } from '@/components/ui/modal/provider'

export type FormProps<T extends string = 'id'> = {
	formRef: RefObject<ModalOptions>
	onClose?: () => void
} & {
	[K in T]?: unknown
}
