import { Grid, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { Input } from '@/components/ui/inputs/input'
import { ContractFormFields } from '@/schemas/contract'

export const ContractTypeStep = () => {
	const { control } = useFormContext<ContractFormFields>()

	return (
		<FormModal.StepContent step={1} columns={2}>
			<Grid item xs={1}>
				<Input control={control} label="Tipo de contrato" name="contractTypeId" />
			</Grid>
			<Grid item xs={1}>
				<Input control={control} label="Objetivo do contrato" name="contractObjective" />
			</Grid>
			<Grid item xs={2}>
				<Typography variant="h2">Entregas</Typography>
			</Grid>
		</FormModal.StepContent>
	)
}
