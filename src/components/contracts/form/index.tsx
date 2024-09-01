import { FC, useCallback } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { ContractTypeStep } from './steps/contract-type'
import { OverviewStep } from './steps/overview'
import { FormModal } from '@/components/ui/form-modal'
import { useMutation } from '@/hooks/mutations'
import { Company, HiringCompany } from '@/schemas/company'
import { APIContract, ContractFormFields, contractFormSchema } from '@/schemas/contract'
import { ContractType } from '@/schemas/contractual-type'
import { ContractedCompanyEmployee, HiringCompanyEmployee } from '@/schemas/employee'
import { MutationFeedback } from '@/schemas/utils/mutations'
import { Service } from '@/services'
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

const service = new Service()

export const ContractForm: FC<FormProps> = ({ formRef, id }) => {
	const form = useForm<ContractFormFields>({
		defaultValues: getSchemaDefault(contractFormSchema),
		resolver: zodResolver(contractFormSchema),
	})

	const mutation = useMutation<APIContract>('contracts', {
		method: id ? 'PUT' : 'POST',
		feedback: id ? UPDATE_FEEDBACK : CREATE_FEEDBACK,
	})

	const submitForm = useCallback(async (data: ContractFormFields) => {
		const contractType = await service.get<ContractType>(`contract-types/${data.contractTypeId}`)
		const contractedCompany = await service.get<Company>(`contracted-companies/${data.contractedCompanyId}`)
		const subsidiaryCompany = await service.get<HiringCompany>(`hiring-companies/${data.subsidiaryCompanyId}`)
		const contractManager = await service.get<HiringCompanyEmployee>(
			`hiring-company-employees/${data.contractManagerId}`
		)
		const legalRepresentative = await service.get<ContractedCompanyEmployee>(
			`contracted-company-employees/${data.legalRepresentativeId}`
		)

		await mutation.mutateAsync({
			...data,
			contractType,
			contractedCompany,
			subsidiaryCompany,
			contractManager,
			legalRepresentative,
		} as APIContract)
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
