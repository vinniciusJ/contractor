import { FC, useCallback } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Grid } from '@mui/material'
import { useForm } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { Input } from '@/components/ui/inputs/input'
import { useMutation } from '@/hooks/mutations'
import { CompanyFormFields, companyFormSchema, companySchema } from '@/schemas/company'
import { MutationFeedback } from '@/schemas/utils/mutations'
import { FormProps } from '@/types/form'
import { getSchemaDefault } from '@/utils/schema'

interface Props extends FormProps {
	type: 'hiring' | 'contracted'
}

const CREATE_FEEDBACK: MutationFeedback = {
	success: 'Empresa cadastrada com sucesso',
	error: 'Houve um erro durante o cadastro da empresa',
}

const UPDATE_FEEDBACK: MutationFeedback = {
	success: 'Empresa cadastrada com sucesso',
	error: 'Houve um erro durante o cadastro da empresa',
}

export const CompanyForm: FC<Props> = ({ formRef, type, id }) => {
	const form = useForm<CompanyFormFields>({
		defaultValues: getSchemaDefault(companySchema),
		resolver: zodResolver(companyFormSchema),
	})

	const mutation = useMutation<CompanyFormFields>(`${type}-companies`, {
		method: id ? 'PUT' : 'POST',
		feedback: id ? UPDATE_FEEDBACK : CREATE_FEEDBACK,
	})

	const submitForm = useCallback(async (data: CompanyFormFields) => {
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
					<Input control={form.control} label="Razão social" name="corporateName" />
				</Grid>
				<Grid item xs={2}>
					<Input control={form.control} label="CNPJ" name="code" />
				</Grid>
				<Grid item xs={2}>
					<Input control={form.control} label="Endereço" name="address" />
				</Grid>
				<Grid item xs={2}>
					<Input control={form.control} label="Telefone" name="phone" />
				</Grid>
				<Grid item xs={2}>
					<Input control={form.control} label="E-mail" name="email" />
				</Grid>
			</FormModal.Content>

			<FormModal.Actions.Root>
				<FormModal.Actions.Cancel />
				<FormModal.Actions.Submit>Cadastrar</FormModal.Actions.Submit>
			</FormModal.Actions.Root>
		</FormModal.Root>
	)
}
