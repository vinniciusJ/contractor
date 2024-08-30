import { FC } from 'react'

import { Button, Stack, Typography } from '@mui/material'
import { Params, useParams } from 'react-router-dom'

import { EmployeeForm } from '@/components/employees/form'
import { EmployeesTable } from '@/components/employees/table'
import { Field } from '@/components/ui/field'
import { GridGroup } from '@/components/ui/grid-group'
import { useModal } from '@/components/ui/modal/provider'
import { useGetOne } from '@/hooks/get'
import { PageLayout } from '@/layouts/page'
import { Company, HiringCompany } from '@/schemas/company'
import { withEndpoint } from '@/utils/query'

const getEndpointByType = (type: string, companyId: number) => {
	if (type === 'hiring') {
		return withEndpoint`hiring-companies/${companyId}`
	}

	return withEndpoint`contracted-companies/${companyId}`
}

const CompanyPage: FC = () => {
	const params = useParams<Params<'companyType' | 'companyId'>>()
	const companyType = params.companyType as 'hiring' | 'contracted'

	const employeeFormRef = useModal()

	const { data: company } = useGetOne<Company | HiringCompany>(
		getEndpointByType(String(companyType), Number(params.companyId))
	)

	if (!company) {
		return null
	}

	return (
		<>
			<PageLayout.Root>
				<PageLayout.Header.Root>
					<PageLayout.Header.Title.Root>
						<PageLayout.Header.Title.GoBackButton />

						<PageLayout.Header.Title.Text>
							Empresa {companyType === 'hiring' ? 'contrante' : 'contratada'} - {params.companyId}
						</PageLayout.Header.Title.Text>
					</PageLayout.Header.Title.Root>
				</PageLayout.Header.Root>

				<PageLayout.Content>
					<GridGroup mb={3}>
						<Field label="Nome">{company?.name}</Field>
						<Field label="Razão social">{company.corporateName}</Field>
						<Field label="CNPJ">{company.code}</Field>
						<Field label="Telefone">{company.phone}</Field>
						<Field label="E-mail">{company.email}</Field>
						<Field label="Endereço">{company.email}</Field>
					</GridGroup>

					<Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
						<Typography variant="h2">Funcionários</Typography>
						<Button variant="outlined" onClick={() => employeeFormRef.current?.openModal()}>
							Cadastrar
						</Button>
					</Stack>

					<EmployeesTable companyType={companyType} companyId={Number(params.companyId)} />
				</PageLayout.Content>
			</PageLayout.Root>

			<EmployeeForm formRef={employeeFormRef} companyType={companyType} />
		</>
	)
}

export default CompanyPage
