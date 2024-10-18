import { Grid } from '@mui/material'
import { useFormContext } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { DateInput } from '@/components/ui/inputs/date'
import { Input } from '@/components/ui/inputs/input'
import { Select } from '@/components/ui/inputs/select'
import { useGetList } from '@/hooks/get'
import { Company, HiringCompany } from '@/schemas/company'
import { ContractFormFields } from '@/schemas/contract'
import { ContractedCompanyEmployee, HiringCompanyEmployee } from '@/schemas/employee'
import { PaymentMethod } from '@/schemas/payment-method'

const parseToOptions = (items: { name: string; id: number }[]) =>
	items.map((item) => ({
		label: item.name,
		value: item.id,
	}))

export const OverviewStep = () => {
	const { control } = useFormContext<ContractFormFields>()

	const { data: paymentMethods } = useGetList<PaymentMethod>('payment-method')
	const { data: contractedCompanies } = useGetList<Company>('contracted-company')
	const { data: subsidiaryCompanies } = useGetList<HiringCompany>('hiring-company')
	const { data: contractManagers } = useGetList<HiringCompanyEmployee>('hiring-company-employee')
	const { data: legalRepresentatives } = useGetList<ContractedCompanyEmployee>('contracted-company-employee')

	return (
		<FormModal.StepContent step={0} columns={4}>
			<Grid item xs={2}>
				<Input control={control} label="Nome" name="name" />
			</Grid>
			<Grid item xs={2}>
				<Input control={control} label="Local de execução" name="executionLocal" />
			</Grid>
			<Grid item xs={2}>
				<DateInput
					control={control}
					label="Data de início"
					name="startDate"
					visibleViews={['day', 'month', 'year']}
				/>
			</Grid>
			<Grid item xs={2}>
				<DateInput
					control={control}
					label="Data de fim"
					name="endDate"
					visibleViews={['day', 'month', 'year']}
				/>
			</Grid>
			<Grid item xs={2}>
				<Input control={control} label="Valor" name="contractedValue" type="number" />
			</Grid>
			<Grid item xs={2}>
				<Select
					options={parseToOptions(paymentMethods)}
					control={control}
					label="Forma de pagamento"
					name="paymentMethodId"
				/>
			</Grid>
			<Grid item xs={2}>
				<Select
					options={parseToOptions(subsidiaryCompanies)}
					control={control}
					label="Empresa contratante"
					name="subsidiaryCompanyId"
				/>
			</Grid>
			<Grid item xs={2}>
				<Select
					options={parseToOptions(contractManagers)}
					control={control}
					label="Gestor de contrato"
					name="contractManagerId"
				/>
			</Grid>
			<Grid item xs={2}>
				<Select
					options={parseToOptions(contractedCompanies)}
					control={control}
					label="Empresa contrata"
					name="contractedCompanyId"
				/>
			</Grid>
			<Grid item xs={2}>
				<Select
					options={parseToOptions(legalRepresentatives)}
					control={control}
					label="Representante legal"
					name="legalRepresentativeId"
				/>
			</Grid>
		</FormModal.StepContent>
	)
}
