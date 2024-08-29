import { ForwardedRef, forwardRef, useCallback, useImperativeHandle } from 'react'

import { FormProvider, UseFormReturn } from 'react-hook-form'

import { Modal } from '../../modal'
import { ModalOptions, useModal } from '../../modal/provider'
import { ModalRootProps } from '../../modal/root'

interface Props<T extends object> extends ModalRootProps {
	form: UseFormReturn<T>
	onSubmit: (data: T) => Promise<void>
	loading?: boolean
}

export function FormModalRootComponent<T extends object>(props: Props<T>, ref: ForwardedRef<ModalOptions>) {
	const modalRef = useModal()

	const onSubmit = useCallback(async (data: T) => {
		await props.onSubmit(data)
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
		<Modal.Root ref={modalRef} onClose={props.onClose}>
			<FormProvider {...props.form}>
				<form onSubmit={props.form.handleSubmit(onSubmit)}>{props.children}</form>
			</FormProvider>
		</Modal.Root>
	)
}

export const FormModalRoot = forwardRef(FormModalRootComponent) as <T extends object>(
	props: Props<T> & { ref?: ForwardedRef<ModalOptions> }
) => ReturnType<typeof FormModalRootComponent>
