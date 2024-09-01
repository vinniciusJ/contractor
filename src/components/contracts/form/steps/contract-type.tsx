import { useCallback } from 'react'

import { Add, TrashCan } from '@carbon/icons-react'
import { Button, Grid, IconButton, Typography } from '@mui/material'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { DateInput } from '@/components/ui/inputs/date'
import { Input } from '@/components/ui/inputs/input'
import { Select } from '@/components/ui/inputs/select'
import { ContractFormFields } from '@/schemas/contract'

export const ContractTypeStep = () => {
	const { control } = useFormContext<ContractFormFields>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'contractItems',
	})

	const addContractItem = useCallback(() => append({ name: '', scheduledDate: '', type: 'DELIVERY' }), [append])

	return (
		<FormModal.StepContent step={1} columns={2}>
			<Grid item xs={1}>
				<Input control={control} label="Tipo de contrato" name="contractTypeId" />
			</Grid>
			<Grid item xs={1}>
				<Input control={control} label="Objetivo do contrato" name="contractObjective" />
			</Grid>
			<Grid item xs={2}>
				<Typography variant="h2" mb={1}>
					Entregas
				</Typography>
				{fields.map((field, index) => (
					<Grid container columns={13} key={field.id} marginBottom={2} direction="row" gap={1}>
						<Grid item xs={6}>
							<Input label="Nome" name={`contractItems.${index}.name`} control={control} />
						</Grid>
						<Grid item xs={3}>
							<DateInput
								label="Data Prevista"
								name={`contractItems.${index}.scheduledDate`}
								control={control}
								visibleViews={['day', 'month', 'year']}
							/>
						</Grid>
						<Grid item xs={3}>
							<Select
								name={`contractItems.${index}.type`}
								options={[
									{
										label: 'Serviço',
										value: 'SERVICE',
									},
									{
										label: 'Entrega',
										value: 'DELIVERY',
									},
								]}
								label="Tipo"
								control={control}
							/>
						</Grid>
						<Grid item xs={1}>
							<IconButton onClick={() => remove(index)}>
								<TrashCan />
							</IconButton>
						</Grid>
					</Grid>
				))}
				<Button sx={{ width: '100%' }} variant="outlined" onClick={addContractItem}>
					<Add />
				</Button>
			</Grid>
		</FormModal.StepContent>
	)
}
