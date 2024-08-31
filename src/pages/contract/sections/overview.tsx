import { Divider, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { CompanyOverview } from '@/components/companies/overview'
import { ContractOverview } from '@/components/contracts/overview'
import { EmployeeOverview } from '@/components/employees/overview'
import { useGetOne } from '@/hooks/get'
import { BaseContract } from '@/schemas/contract'

const ContractOverviewSection = () => {
	const { contractId } = useParams()

	const { data: contract } = useGetOne<BaseContract>(`contracts/${contractId}`)

	if (!contract) return null

	return (
		<Stack gap={3}>
			<ContractOverview contract={contract} />

			<Divider />

			<Typography variant="h2">Empresa contratante</Typography>
			<CompanyOverview company={contract.subsidiaryCompany} />

			<Divider />

			<Typography variant="h2">Gestor do contrato</Typography>
			<EmployeeOverview employee={contract.contractManager} />

			<Divider />

			<Typography variant="h2">Empresa contratada</Typography>
			<CompanyOverview company={contract.contractedCompany} />

			<Divider />

			<Typography variant="h2">Representante legal</Typography>
			<EmployeeOverview employee={contract.contractManager} />
		</Stack>
	)
}

export default ContractOverviewSection
