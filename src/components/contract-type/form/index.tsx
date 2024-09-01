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
import { getSchemaDefault } from '@/utils/schema'

const CREATE_FEEDBACK: MutationFeedback = {
	success: 'Empresa cadastrada com sucesso',
	error: 'Houve um erro durante o cadastro da empresa',
}

const UPDATE_FEEDBACK: MutationFeedback = {
	success: 'Empresa cadastrada com sucesso',
	error: 'Houve um erro durante o cadastro da empresa',
}

const contractItemTypesOptions = optionsParser.parse(CONTRACT_TYPE_ITEM_TYPE_LABELS)

export const ContractTypeForm: FC<FormProps> = ({ formRef, id }) => {
	const form = useForm<ContractTypeFormFields>({
		defaultValues: getSchemaDefault(contractTypeFormSchema),
		resolver: zodResolver(contractTypeFormSchema),
	})

	const mutation = useMutation<ContractTypeFormFields>('contract-types', {
		method: id ? 'PUT' : 'POST',
		feedback: id ? UPDATE_FEEDBACK : CREATE_FEEDBACK,
	})

	const submitForm = useCallback(async (data: ContractTypeFormFields) => {
		await mutation.mutateAsync(data)
	}, [])

	return (
		<FormModal.Root form={form} onSubmit={submitForm} ref={formRef} width="50vw">
			<FormModal.Header>Forma de pagamento</FormModal.Header>

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
									options={contractItemTypesOptions}
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
