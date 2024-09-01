import { Grid } from '@mui/material'
import { useFormContext } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { DateInput } from '@/components/ui/inputs/date'
import { Input } from '@/components/ui/inputs/input'
import { ContractFormFields } from '@/schemas/contract'

export const OverviewStep = () => {
	const { control } = useFormContext<ContractFormFields>()

	return (
		<FormModal.StepContent step={0} columns={4}>
			<Grid item xs={2}>
				<Input control={control} label="Nome" name="name" />
			</Grid>
			<Grid item xs={2}>
				<Input control={control} label="Valor" name="contractedValue" type="number" />
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
			<Grid item xs={4}>
				<Input control={control} label="Local de execução" name="executionLocal" />
			</Grid>
			<Grid item xs={2}>
				<Input control={control} label="Empresa contratante" name="subsidiaryCompanyId" />
			</Grid>
			<Grid item xs={2}>
				<Input control={control} label="Gestor de contrato" name="contractManagerId" />
			</Grid>
			<Grid item xs={2}>
				<Input control={control} label="Empresa contrata" name="contractedCompanyId" />
			</Grid>
			<Grid item xs={2}>
				<Input control={control} label="Representante legal" name="legalRepresentativeId" />
			</Grid>
		</FormModal.StepContent>
	)
}
