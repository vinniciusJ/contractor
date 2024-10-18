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
])

export const ContractTypesTable: FC = () => {
	const { data: contractTypes, totalDataSize } = useGetPageable<ContractType>('contract-type')

	return <Table columns={columns} data={contractTypes} totalDataSize={totalDataSize} to="{id}" />
}
