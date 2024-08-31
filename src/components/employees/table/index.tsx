import { FC } from 'react'

import { Table } from '@/components/ui/table'
import { Tag } from '@/components/ui/tag'
import { useGetPageable } from '@/hooks/get'
import { ContractedCompanyEmployee, HiringCompanyEmployee } from '@/schemas/employee'
import { createColumns } from '@/utils/create-columns'

interface Props {
	companyId: number
	companyType: 'contracted' | 'hiring'
}

const getEmployeesTableColumns = (companyType: Props['companyType']) => {
	const isHiringCompany = companyType === 'hiring'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const accessorKey = isHiringCompany ? 'isProjectManager' : ('isLegalRepresentative' as any)

	return createColumns<HiringCompanyEmployee | ContractedCompanyEmployee>((helper) => [
		helper.accessor('name', {
			id: 'name',
			header: 'Nome',
			cell: (props) => props.getValue(),
		}),
		helper.accessor('code', {
			id: 'code',
			header: 'CPF',
			cell: (props) => props.getValue(),
		}),
		helper.accessor('email', {
			id: 'email',
			header: 'E-mail',
			cell: (props) => props.getValue(),
		}),
		helper.accessor('phone', {
			id: 'phone',
			header: 'Telefone',
			cell: (props) => props.getValue(),
		}),
		helper.accessor(accessorKey, {
			id: accessorKey,
			header: isHiringCompany ? 'Gestor de projeto' : 'Representante legal',
			cell: (props) =>
				props.getValue() && (
					<Tag bgcolor="juicy.primary.20" color="juicy.primary.60" justifyContent="flex-end">
						Sim
					</Tag>
				),
		}),
	])
}

export const EmployeesTable: FC<Props> = ({ companyId, companyType = 'hiring' }) => {
	const columns = getEmployeesTableColumns(companyType)

	const {
		data: { data: employees, items },
	} = useGetPageable<HiringCompanyEmployee | ContractedCompanyEmployee>(`${companyType}-company-employees`, {
		'company.id': Number(companyId),
	})

	return <Table columns={columns} data={employees} items={items} />
}
