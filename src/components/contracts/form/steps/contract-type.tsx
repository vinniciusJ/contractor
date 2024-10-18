import { Grid, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'

import { FormModal } from '@/components/ui/form-modal'
import { ArrayInput } from '@/components/ui/inputs/array-input'
import { DateInput } from '@/components/ui/inputs/date'
import { Input } from '@/components/ui/inputs/input'
import { Select } from '@/components/ui/inputs/select'
import { useGetList } from '@/hooks/get'
import { ContractFormFields } from '@/schemas/contract'
import { contractItemFormSchema } from '@/schemas/contract-item'
import { ContractType } from '@/schemas/contractual-type'
import { optionsParser } from '@/schemas/utils/form'
import { CONTRACT_TYPE_ITEM_TYPE_LABELS } from '@/utils/constants/labels'
import { parseToOptions } from '@/utils/parse-to-options'
import { getSchemaDefault } from '@/utils/schema'

const ITEMS_OPTIONS = optionsParser.parse(CONTRACT_TYPE_ITEM_TYPE_LABELS)

export const ContractTypeStep = () => {
	const { control } = useFormContext<ContractFormFields>()

	const { data: contractTypes } = useGetList<ContractType>('contract-type')

	return (
		<FormModal.StepContent step={1} columns={2}>
			<Grid item xs={1}>
				<Select
					options={parseToOptions(contractTypes)}
					control={control}
					label="Tipo de contrato"
					name="contractTypeId"
				/>
			</Grid>
			<Grid item xs={1}>
				<Input control={control} label="Objetivo do contrato" name="contractObjective" />
			</Grid>
			<Grid item xs={4}>
				<Typography variant="h2" mb={1}>
					Entregas
				</Typography>
			</Grid>
			<Grid item xs={4}>
				<Grid item xs={4}>
					<ArrayInput
						control={control}
						name="contractItems"
						defaultValue={getSchemaDefault(contractItemFormSchema)}
						renderInput={(name) => (
							<>
								<Input control={control} label="Nome" name={`${name}.name`} />

								<Select control={control} label="Tipo" name={`${name}.type`} options={ITEMS_OPTIONS} />

								<DateInput
									control={control}
									label="Data agendada"
									name={`${name}.scheduledDate`}
									visibleViews={['day', 'month', 'year']}
								/>
							</>
						)}
					/>
				</Grid>
			</Grid>
		</FormModal.StepContent>
	)
}
