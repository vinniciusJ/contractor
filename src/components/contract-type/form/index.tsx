import { FC, useCallback } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Grid } from '@mui/material'
import { useForm } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { ArrayInput } from '@/components/ui/inputs/array-input'
import { DateInput } from '@/components/ui/inputs/date'
import { Input } from '@/components/ui/inputs/input'
import { Select } from '@/components/ui/inputs/select'
import { useMutation } from '@/hooks/mutations'
import { contractItemFormSchema } from '@/schemas/contract-item'
import { ContractTypeFormFields, contractTypeFormSchema } from '@/schemas/contractual-type'
import { optionsParser } from '@/schemas/utils/form'
import { MutationFeedback } from '@/schemas/utils/mutations'
import { FormProps } from '@/types/form'
import { CONTRACT_TYPE_ITEM_TYPE_LABELS } from '@/utils/constants/labels'
import { get } from '@/utils/form'
import { getSchemaDefault } from '@/utils/schema'

const CREATE_FEEDBACK: MutationFeedback = {
	success: 'Empresa cadastrada com sucesso',
	error: 'Houve um erro durante o cadastro da empresa',
}

const UPDATE_FEEDBACK: MutationFeedback = {
	success: 'Empresa cadastrada com sucesso',
	error: 'Houve um erro durante o cadastro da empresa',
}

const ITEMS_OPTIONS = optionsParser.parse(CONTRACT_TYPE_ITEM_TYPE_LABELS)
const FORM_DEFAULT_VALUES = getSchemaDefault(contractTypeFormSchema)

export const ContractTypeForm: FC<FormProps> = ({ formRef, id }) => {
	const form = useForm<ContractTypeFormFields>({
		defaultValues: id ? async () => get(`contract-types/${id}`) : FORM_DEFAULT_VALUES,
		resolver: zodResolver(contractTypeFormSchema),
	})

	const createMutation = useMutation<ContractTypeFormFields>('contract-types', {
		method: 'POST',
		feedback: CREATE_FEEDBACK,
	})

	const updateMutation = useMutation<ContractTypeFormFields>(`contract-types/${id}`, {
		method: 'PUT',
		feedback: UPDATE_FEEDBACK,
	})

	const submitForm = useCallback(
		async (data: ContractTypeFormFields) => {
			if (id) {
				await updateMutation.mutateAsync(data)
			}

			await createMutation.mutateAsync(data)
		},
		[id]
	)

	return (
		<FormModal.Root form={form} onSubmit={submitForm} ref={formRef} width="50vw">
			<FormModal.Header>Tipos de contratação</FormModal.Header>

			<FormModal.Stepper steps={['Visão geral', 'Itens contratuais']} />

			<FormModal.StepContent step={0}>
				<Grid item xs={4}>
					<Input control={form.control} label="Nome" name="name" />
				</Grid>
				<Grid item xs={4}>
					<Input control={form.control} label="Objeto contratual" multiline name="contractObjective" />
				</Grid>
			</FormModal.StepContent>

			<FormModal.StepContent step={1}>
				<Grid item xs={4}>
					<ArrayInput
						control={form.control}
						name="contractItems"
						defaultValue={getSchemaDefault(contractItemFormSchema)}
						renderInput={(name) => (
							<>
								<Input control={form.control} label="Nome" name={`${name}.name`} />

								<Select
									control={form.control}
									label="Tipo"
									name={`${name}.type`}
									options={ITEMS_OPTIONS}
								/>

								<DateInput
									control={form.control}
									label="Data agendada"
									name={`${name}.scheduledDate`}
									visibleViews={['day', 'month', 'year']}
								/>
							</>
						)}
					/>
				</Grid>
			</FormModal.StepContent>

			<FormModal.Actions.Root>
				<FormModal.Actions.Cancel />
				<FormModal.Actions.Submit>Cadastrar</FormModal.Actions.Submit>
			</FormModal.Actions.Root>
		</FormModal.Root>
	)
}
