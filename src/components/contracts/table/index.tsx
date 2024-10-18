import { FC } from 'react'

import { ColumnDef, createColumnHelper } from '@tanstack/react-table'

import { Table } from '@/components/ui/table'
import { StatusTag } from '@/components/ui/tag/status-tag'
import { useGetPageable } from '@/hooks/get'
import { Contract } from '@/schemas/contract'
import { formatDate } from '@/utils/date'

const columnHelper = createColumnHelper<Contract>()

const columns = [
	columnHelper.accessor('name', {
		id: 'name',
		header: 'Nome',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('contractType.id', {
		id: 'contractType',
		header: 'Tipo do contrato',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('subsidiaryCompany.name', {
		id: 'subsidiaryCompany.name',
		header: 'Emp. Contratante',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('contractedCompany.name', {
		id: 'contractedCompany.name',
		header: 'Emp. Contratada',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor((row) => ({ startDate: row.startDate, endDate: row.endDate }), {
		id: 'periodo',
		header: 'Período',
		cell: (props) => {
			const { startDate, endDate } = props.getValue()
			return `${formatDate(startDate)} - ${formatDate(endDate)}`
		},
	}),
	columnHelper.accessor('financialProgress', {
		id: 'financialProgress',
		header: 'Avanço Financeiro',
		cell: (props) => `${props.getValue()}%`,
	}),
	columnHelper.accessor('status', {
		id: 'status',
		header: 'Status',
		cell: (props) => <StatusTag status={props.getValue()} />,
		enableSorting: false,
	}),
] as ColumnDef<Contract>[]

export const ContractsTable: FC = () => {
	const { data: contracts, totalDataSize } = useGetPageable<Contract>('contract')

	return <Table columns={columns} data={contracts} totalDataSize={totalDataSize} to="/contracts/{id}/overview" />
}
