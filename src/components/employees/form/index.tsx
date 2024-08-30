import { FC, useCallback } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Grid } from '@mui/material'
import { useForm } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { Input } from '@/components/ui/inputs'
import { useMutation } from '@/hooks/mutations'
import { EmployeeFormFields, employeeFormSchema, employeeSchema } from '@/schemas/employee'
import { MutationFeedback } from '@/schemas/utils/mutations'
import { FormProps } from '@/types/form'
import { getSchemaDefault } from '@/utils/schema'

interface Props extends FormProps {
	companyType: 'hiring' | 'contracted'
}

const CREATE_FEEDBACK: MutationFeedback = {
	success: 'Empregado cadastrado com sucesso',
	error: 'Houve um erro durante o cadastro do empregado',
}

const UPDATE_FEEDBACK: MutationFeedback = {
	success: 'Empregado cadastrado com sucesso',
	error: 'Houve um erro durante o cadastro do empregado',
}

export const EmployeeForm: FC<Props> = ({ formRef, companyType: type, id }) => {
	const form = useForm<EmployeeFormFields>({
		defaultValues: getSchemaDefault(employeeSchema),
		resolver: zodResolver(employeeFormSchema),
	})

	const mutation = useMutation<EmployeeFormFields>(`${type}-company-employees`, {
		method: id ? 'PUT' : 'POST',
		feedback: id ? UPDATE_FEEDBACK : CREATE_FEEDBACK,
	})

	const submitForm = useCallback(async (data: EmployeeFormFields) => {
		await mutation.mutateAsync(data)
	}, [])

	return (
		<FormModal.Root form={form} onSubmit={submitForm} ref={formRef}>
			<FormModal.Header>Empresa {type === 'hiring' ? 'contrante' : 'contratada'}</FormModal.Header>

			<FormModal.Content>
				<Grid item xs={2}>
					<Input control={form.control} label="Nome" name="name" />
				</Grid>
				<Grid item xs={2}>
					<Input control={form.control} label="E-mail" name="email" />
				</Grid>
				<Grid item xs={2}>
					<Input control={form.control} label="Telefone" name="phone" />
				</Grid>
			</FormModal.Content>

			<FormModal.Actions.Root>
				<FormModal.Actions.Cancel />
				<FormModal.Actions.Submit>Cadastrar</FormModal.Actions.Submit>
			</FormModal.Actions.Root>
		</FormModal.Root>
	)
}
