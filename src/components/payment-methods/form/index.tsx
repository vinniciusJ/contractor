import { FC, useCallback } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Grid } from '@mui/material'
import { useForm } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { Input } from '@/components/ui/inputs'
import { useMutation } from '@/hooks/mutations'
import { PaymentMethodFormFields, paymentMethodFormSchema } from '@/schemas/payment-method'
import { MutationFeedback } from '@/schemas/utils/mutations'
import { FormProps } from '@/types/form'
import { getSchemaDefault } from '@/utils/schema'

const CREATE_FEEDBACK: MutationFeedback = {
	success: 'Empresa cadastrada com sucesso',
	error: 'Houve um erro durante o cadastro da empresa',
}

const UPDATE_FEEDBACK: MutationFeedback = {
	success: 'Empresa cadastrada com sucesso',
	error: 'Houve um erro durante o cadastro da empresa',
}

export const PaymentMethodForm: FC<FormProps> = ({ formRef, id }) => {
	const form = useForm<PaymentMethodFormFields>({
		defaultValues: getSchemaDefault(paymentMethodFormSchema),
		resolver: zodResolver(paymentMethodFormSchema),
	})

	const mutation = useMutation<PaymentMethodFormFields>('payment-methods', {
		method: id ? 'PUT' : 'POST',
		feedback: id ? UPDATE_FEEDBACK : CREATE_FEEDBACK,
	})

	const submitForm = useCallback(async (data: PaymentMethodFormFields) => {
		await mutation.mutateAsync(data)
	}, [])

	return (
		<FormModal.Root form={form} onSubmit={submitForm} ref={formRef}>
			<FormModal.Header>Forma de pagamento</FormModal.Header>
			<FormModal.Content>
				<Grid item xs={2}>
					<Input control={form.control} label="Nome" name="name" />
				</Grid>
				<Grid item xs={2}>
					<Input
						control={form.control}
						type="number"
						label="Frequência de pagamento (em meses)"
						name="frequency"
						InputProps={{ inputProps: { min: 1 } }}
					/>
				</Grid>
			</FormModal.Content>

			<FormModal.Actions.Root>
				<FormModal.Actions.Cancel />
				<FormModal.Actions.Submit>Cadastrar</FormModal.Actions.Submit>
			</FormModal.Actions.Root>
		</FormModal.Root>
	)
}
