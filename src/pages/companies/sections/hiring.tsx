import { FC } from 'react'

import { Table } from '@/components/ui/table'
import { Tag } from '@/components/ui/tag'
import { useGetPageable } from '@/hooks/get'
import { HiringCompany } from '@/schemas/company'
import { createColumns } from '@/utils/create-columns'

const columns = createColumns<HiringCompany>((helper) => [
	helper.accessor('name', {
		id: 'name',
		header: 'Nome',
		cell: (props) => props.getValue(),
	}),
	helper.accessor('corporateName', {
		id: 'corporateName',
		header: 'Razão social',
		cell: (props) => props.getValue(),
	}),
	helper.accessor('code', {
		id: 'code',
		header: 'CNPJ',
		cell: (props) => props.getValue(),
	}),
	helper.accessor('phone', {
		id: 'phone',
		header: 'Telefone',
		cell: (props) => props.getValue(),
	}),
	helper.accessor('email', {
		id: 'email',
		header: 'E-mail',
		cell: (props) => props.getValue(),
	}),
	helper.accessor('address', {
		id: 'address',
		header: 'Endereço',
		cell: (props) => props.getValue(),
	}),
	helper.accessor('matrix', {
		id: 'matrix',
		header: '',
		cell: (props) =>
			props.getValue() && (
				<Tag bgcolor="juicy.primary.20" color="juicy.primary.60" justifyContent="flex-end">
					Matriz
				</Tag>
			),
	}),
])

const HiringCompaniesPage: FC = () => {
	const {
		data: { data: companies, items },
	} = useGetPageable<HiringCompany>('hiring-companies')

	return <Table columns={columns} data={companies} items={items} />
}

export default HiringCompaniesPage
