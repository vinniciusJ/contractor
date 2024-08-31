import { ForwardedRef, forwardRef, useCallback, useImperativeHandle } from 'react'

import { Stack } from '@mui/material'
import { FormProvider, UseFormReturn } from 'react-hook-form'

import { Modal } from '../../modal'
import { ModalOptions, useModal } from '../../modal/provider'
import { ModalRootProps } from '../../modal/root'
import { FormModalProvider } from '../provider'

interface Props<T extends object> extends ModalRootProps {
	form: UseFormReturn<T>
	onSubmit: (data: T) => Promise<void>
	loading?: boolean
}

export function FormModalRootComponent<T extends object>(props: Props<T>, ref: ForwardedRef<ModalOptions>) {
	const modalRef = useModal()

	const onClose = useCallback(() => {
		if (props.onClose) {
			props.onClose()
		}

		props.form.reset()
	}, [])

	const onSubmit = useCallback(async (data: T) => {
		await props.onSubmit(data)

		props.form.reset()
		modalRef.current?.closeModal()
	}, [])

	useImperativeHandle(ref, () => ({
		openModal: () => modalRef.current?.openModal(),
		closeModal: () => modalRef.current?.closeModal(),
	}))

	if (props.loading) {
		return <p>Loading...</p>
	}

	return (
		<FormModalProvider>
			<Modal.Root ref={modalRef} onClose={onClose} {...props}>
				<FormProvider {...props.form}>
					<form onSubmit={props.form.handleSubmit(onSubmit)}>
						<Stack gap={3}>{props.children}</Stack>
					</form>
				</FormProvider>
			</Modal.Root>
		</FormModalProvider>
	)
}

export const FormModalRoot = forwardRef(FormModalRootComponent) as <T extends object>(
	props: Props<T> & { ref?: ForwardedRef<ModalOptions> }
) => ReturnType<typeof FormModalRootComponent>
