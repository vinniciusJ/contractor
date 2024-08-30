import { FC } from 'react'

import { Button, Stack, Typography } from '@mui/material'
import { Params, useParams } from 'react-router-dom'

import { Field } from '@/components/ui/field'
import { GridGroup } from '@/components/ui/grid-group'
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
	const { companyType, companyId } = useParams<Params<'companyType' | 'companyId'>>()

	const { data: company } = useGetOne<Company | HiringCompany>(
		getEndpointByType(String(companyType), Number(companyId))
	)

	if (!company) {
		return null
	}

	return (
		<PageLayout.Root>
			<PageLayout.Header.Root>
				<PageLayout.Header.Title>
					Empresa {companyType === 'hiring' ? 'contrante' : 'contratada'} - {companyId}
				</PageLayout.Header.Title>
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
					<Button variant="outlined">Cadastrar</Button>
				</Stack>
			</PageLayout.Content>
		</PageLayout.Root>
	)
}

export default CompanyPage
