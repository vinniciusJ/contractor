import { FC, useCallback } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { ContractTypeStep } from './steps/contract-type'
import { OverviewStep } from './steps/overview'
import { FormModal } from '@/components/ui/form-modal'
import { useMutation } from '@/hooks/mutations'
import { ContractFormFields, contractFormSchema } from '@/schemas/contract'
import { MutationFeedback } from '@/schemas/utils/mutations'
import { FormProps } from '@/types/form'
import { getSchemaDefault } from '@/utils/schema'

const CREATE_FEEDBACK: MutationFeedback = {
	success: 'Contrato cadastrado com sucesso',
	error: 'Houve um erro durante o cadastro do contrato',
}

const UPDATE_FEEDBACK: MutationFeedback = {
	success: 'Contrato cadastrado com sucesso',
	error: 'Houve um erro durante o cadastro do contrato',
}

export const ContractForm: FC<FormProps> = ({ formRef, id }) => {
	const form = useForm<ContractFormFields>({
		defaultValues: getSchemaDefault(contractFormSchema),
		resolver: zodResolver(contractFormSchema),
	})

	const mutation = useMutation<ContractFormFields>('contract', {
		method: id ? 'PUT' : 'POST',
		feedback: id ? UPDATE_FEEDBACK : CREATE_FEEDBACK,
	})

	const submitForm = useCallback(async (data: ContractFormFields) => {
		const response = await axios.get('https://nominatim.openstreetmap.org/search', {
			params: {
				q: data.executionLocal,
				format: 'json',
				limit: 1,
				countrycodes: 'br',
				featuretype: 'city',
			},
		})

		const result = response.data[0]

		if (result) {
			const latitude = Number.parseFloat(result.lat)
			const longitude = Number.parseFloat(result.lon)

			await mutation.mutateAsync({ ...data, latitude, longitude })
			toast.success('Contrato cadastrado com sucesso!')
		} else {
			toast.error('Cidade do local de execução não encontrada!')
		}
	}, [])

	return (
		<FormModal.Root form={form} onSubmit={submitForm} ref={formRef}>
			<FormModal.Header>Contrato</FormModal.Header>

			<FormModal.Stepper steps={['Informações gerais', 'Tipo de contratação']} />

			<OverviewStep />

			<ContractTypeStep />

			<FormModal.Actions.Root>
				<FormModal.Actions.Cancel />
				<FormModal.Actions.Submit>Cadastrar</FormModal.Actions.Submit>
			</FormModal.Actions.Root>
		</FormModal.Root>
	)
}
