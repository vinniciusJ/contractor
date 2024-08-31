import { FC } from 'react'

import { Table } from '../../ui/table'
import { useGetPageable } from '@/hooks/get'
import { ContractType } from '@/schemas/contractual-type'
import { createColumns } from '@/utils/create-columns'

const columns = createColumns<ContractType>((helper) => [
	helper.accessor('name', {
		id: 'name',
		header: 'Nome',
		cell: (props) => props.getValue(),
	}),
	helper.accessor('contractObjective', {
		id: 'contractObjective',
		header: 'Objeto contratual',
		cell: (props) => props.getValue(),
	}),
	helper.accessor('contractItems', {
		id: 'contractItems',
		header: 'Items contratuais',
		cell: (props) => props.getValue().length,
	}),
])

export const ContractTypesTable: FC = () => {
	const {
		data: { data: contractTypes, items },
	} = useGetPageable<ContractType>('contract-types')

	return <Table columns={columns} data={contractTypes} items={items} />
}
