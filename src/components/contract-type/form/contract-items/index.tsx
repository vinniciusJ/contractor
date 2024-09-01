import { FC, useCallback } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Grid } from '@mui/material'
import { useForm } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { DateInput } from '@/components/ui/inputs/date'
import { Input } from '@/components/ui/inputs/input'
import { Select } from '@/components/ui/inputs/select'
import { useMutation } from '@/hooks/mutations'
import { ContractItemFormFields, contractItemFormSchema } from '@/schemas/contract-item'
import { ContractType, ContractTypeFormFields } from '@/schemas/contractual-type'
import { optionsParser } from '@/schemas/utils/form'
import { MutationFeedback } from '@/schemas/utils/mutations'
import { FormProps } from '@/types/form'
import { CONTRACT_TYPE_ITEM_TYPE_LABELS } from '@/utils/constants/labels'
import { withEndpoint } from '@/utils/query'
import { getSchemaDefault } from '@/utils/schema'

interface Props extends FormProps {
	contractType: ContractType
}

const UPDATE_FEEDBACK: MutationFeedback = {
	success: 'Empresa cadastrada com sucesso',
	error: 'Houve um erro durante o cadastro da empresa',
}

const contractItemTypesOptions = optionsParser.parse(CONTRACT_TYPE_ITEM_TYPE_LABELS)

export const ContractTypeContractItemsForm: FC<Props> = ({ formRef, contractType }) => {
	const form = useForm<ContractItemFormFields>({
		defaultValues: getSchemaDefault(contractItemFormSchema),
		resolver: zodResolver(contractItemFormSchema),
	})

	const mutation = useMutation<ContractTypeFormFields>(withEndpoint`contract-types/${contractType.id}`, {
		method: 'PUT',
		feedback: UPDATE_FEEDBACK,
	})

	const submitForm = useCallback(
		async (data: ContractItemFormFields) => {
			await mutation.mutateAsync({ ...contractType, contractItems: [...contractType.contractItems, data] })
		},
		[contractType]
	)

	return (
		<FormModal.Root form={form} onSubmit={submitForm} ref={formRef}>
			<FormModal.Header>Adicionar novo item contratual</FormModal.Header>

			<FormModal.Content>
				<Grid item xs={2}>
					<Input control={form.control} label="Nome" name={'name'} />
				</Grid>

				<Grid item xs={2}>
					<Select control={form.control} label="Tipo" name="type" options={contractItemTypesOptions} />
				</Grid>

				<Grid item xs={2}>
					<DateInput
						control={form.control}
						label="Data agendada"
						name={'scheduledDate'}
						visibleViews={['day', 'month', 'year']}
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
