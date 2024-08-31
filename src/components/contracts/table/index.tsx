import { FC } from 'react'

import { ColumnDef, createColumnHelper } from '@tanstack/react-table'

import { Table } from '@/components/ui/table'
import { useGetPageable } from '@/hooks/get'
import { BaseContract } from '@/schemas/contract'
import { formatDate } from '@/utils/date'

const columnHelper = createColumnHelper<BaseContract>()

const columns = [
	columnHelper.accessor('name', {
		id: 'name',
		header: 'Nome',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('contractType', {
		id: 'contractType',
		header: 'Tipo do contrato',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('installments', {
		id: 'installments',
		header: 'Parcelas',
		cell: (props) => props.getValue().length,
	}),
	columnHelper.accessor('contractedCompany.name', {
		id: 'contractedCompany.name',
		header: 'Empresa contratada',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('contractManager.name', {
		id: 'contractManager.name',
		header: 'Gestor do contrato',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('legalRepresentative.name', {
		id: 'legalRepresentative.name',
		header: 'Representante legal',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('startDate', {
		id: 'startDate',
		header: 'Data de início',
		cell: (props) => formatDate(props.getValue()),
	}),
	columnHelper.accessor('endDate', {
		id: 'endDate',
		header: 'Data de fim',
		cell: (props) => formatDate(props.getValue()),
	}),
] as ColumnDef<BaseContract>[]

export const ContractsTable: FC = () => {
	const { data: contracts } = useGetPageable<BaseContract>('contracts')

	return <Table columns={columns} data={contracts.data} items={contracts.items} to="/contracts/{id}/overview" />
}
