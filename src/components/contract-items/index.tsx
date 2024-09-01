import { FC } from 'react'

import { Stack } from '@mui/material'

import { Box } from '../ui/box'
import { Field } from '../ui/field'
import { GridGroup } from '../ui/grid-group'
import { MenuOptionsButton } from '../ui/menu-options-button'
import { ContractItem } from '@/schemas/contract-item'
import { CONTRACT_TYPE_ITEM_TYPE_LABELS } from '@/utils/constants/labels'
import { formatDate } from '@/utils/date'

interface Props {
	items: ContractItem[]
}

const getContractItemsOptions = (item: ContractItem) => {
	const options = [
		{ label: 'Concluir item', dispatch: console.log },
		{ label: 'Editar item', dispatch: console.log },
		{ label: 'Remover item', dispatch: console.log },
	]

	if (item.finishedDate) {
		options.shift()
	}

	return options
}

export const ContractItems: FC<Props> = ({ items }) => {
	return (
		<Stack gap={2}>
			{items.map((item) => (
				<Box key={item.id} direction="row" alignItems="center" justifyContent="space-between">
					<GridGroup columns={4}>
						<Field label="Nome">{item.name}</Field>
						<Field label="Tipo do item">{CONTRACT_TYPE_ITEM_TYPE_LABELS[item.type]}</Field>
						<Field label="Data prevista de conclusão">{formatDate(item.scheduledDate)}</Field>
						<Field label="Data de conclusão">
							{item.finishedDate ? formatDate(item.finishedDate) : '-'}
						</Field>
					</GridGroup>

					<MenuOptionsButton options={getContractItemsOptions(item)} />
				</Box>
			))}
		</Stack>
	)
}
