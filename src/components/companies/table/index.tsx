import { FC } from 'react'

import { Table } from '@/components/ui/table'
import { Tag } from '@/components/ui/tag'
import { useGetPageable } from '@/hooks/get'
import { Company, HiringCompany } from '@/schemas/company'
import { createColumns } from '@/utils/create-columns'

interface Props {
	type: 'contracted' | 'hiring'
}

const getCompaniesTableColumns = (type: Props['type']) => {
	return createColumns<HiringCompany | Company>((helper) => {
		const baseColumns = [
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
		]

		if (type === 'hiring') {
			return [
				...baseColumns,
				helper.accessor('matrix', {
					id: 'matrix',
					header: '',
					cell: (props) =>
						props.getValue() && (
							<Tag bgcolor="juicy.primary.20" color="juicy.primary.60" justifyContent="flex-end">
								Matriz
							</Tag>
						),
					enableSorting: false,
					enableColumnFilter: false,
				}),
			]
		}

		return baseColumns
	})
}

export const CompaniesTable: FC<Props> = ({ type }) => {
	const {
		data: { data: companies, items },
	} = useGetPageable<Company>(`${type}-companies`)

	const columns = getCompaniesTableColumns(type)

	return <Table columns={columns} data={companies} items={items} to="{id}" />
}
