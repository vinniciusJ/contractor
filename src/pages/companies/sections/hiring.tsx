import { FC } from 'react'

import { ColumnDef, createColumnHelper } from '@tanstack/react-table'

import { Table } from '@/components/ui/table'
import { useGetPageable } from '@/hooks/get'
import { HiringCompany } from '@/schemas/company'

const columnHelper = createColumnHelper<HiringCompany>()

const columns = [
	columnHelper.accessor('name', {
		id: 'name',
		header: 'Nome',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('corporateName', {
		id: 'corporateName',
		header: 'Razão social',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('code', {
		id: 'code',
		header: 'CNPJ',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('phone', {
		id: 'phone',
		header: 'Telefone',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('email', {
		id: 'email',
		header: 'E-mail',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('address', {
		id: 'address',
		header: 'Endereço',
		cell: (props) => props.getValue(),
	}),
	columnHelper.accessor('matrix', {
		id: 'matrix',
		header: '',
		cell: (props) => (props.getValue() ? 'Sim' : 'Não'),
	}),
] as ColumnDef<HiringCompany>[]

const HiringCompaniesPage: FC = () => {
	const {
		data: { data: companies, items },
	} = useGetPageable<HiringCompany>('hiring-companies')

	return <Table columns={columns} data={companies} items={items} />
}

export default HiringCompaniesPage
