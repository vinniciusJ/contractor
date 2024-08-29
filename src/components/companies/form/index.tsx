import { FC, useCallback } from 'react'

import { Grid } from '@mui/material'
import { useForm } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { Company } from '@/schemas/company'
import { FormProps } from '@/types/form'

export const CompanyForm: FC<FormProps> = ({ formRef, onClose }) => {
	const form = useForm<Company>()

	const submitForm = useCallback(async (data: Company) => console.log(data), [])

	return (
		<FormModal.Root form={form} onSubmit={submitForm} ref={formRef} onClose={onClose}>
			<FormModal.Header>Empresas</FormModal.Header>
			<FormModal.Content>
				<Grid item xs={1}></Grid>
			</FormModal.Content>

			<FormModal.Actions.Root>
				<FormModal.Actions.Cancel />
				<FormModal.Actions.Submit>Cadastrar</FormModal.Actions.Submit>
			</FormModal.Actions.Root>
		</FormModal.Root>
	)
}
