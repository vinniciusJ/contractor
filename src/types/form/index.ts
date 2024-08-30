import { RefObject } from 'react'

import { Control, Path } from 'react-hook-form'

import { ModalOptions } from '@/components/ui/modal/provider'

export type FormProps<T extends string = 'id'> = {
	formRef: RefObject<ModalOptions>
	onClose?: () => void
} & {
	[K in T]?: unknown
}

export type WithForm<T extends object, P extends object> = {
	control: Control<T>
	name: Path<T>
	defaultValue?: never
} & P
