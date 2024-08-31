import { useEffect } from 'react'

import { Add as AddIcon, TrashCan as RemoveIcon } from '@carbon/icons-react'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { useFieldArray } from 'react-hook-form'

import { ScrollableArea } from '../scrollable-area'
import { ArrayInputProps } from '@/types/form/array-input'

export function ArrayInput<T extends object>(props: Readonly<ArrayInputProps<T>>) {
	const { defaultValue, control: formController, name, renderInput, label } = props

	const { fields, append, remove } = useFieldArray({ name, control: formController })

	useEffect(() => {
		if (fields.length === 0) {
			append(defaultValue as Parameters<typeof append>['0'])
		}
	}, [])

	return (
		<Stack gap={2} width="100%">
			{label && <Typography variant="h2">{label}</Typography>}

			<ScrollableArea height="56vh" gap={2} mb={2}>
				{fields.map((field, index) => (
					<Stack key={field.id} direction="row" gap={2} justifyContent="center">
						{renderInput(`${name}.${index}`)}

						<IconButton onClick={() => fields.length > 1 && remove(index)}>
							<RemoveIcon size={16} />
						</IconButton>
					</Stack>
				))}
			</ScrollableArea>

			<Button
				sx={{ width: '100%' }}
				variant={'contained'}
				onClick={() => append(defaultValue as Parameters<typeof append>['0'])}
			>
				<AddIcon size={16} />
			</Button>
		</Stack>
	)
}
