import { FC } from 'react'

import { Divider, Stack, Typography } from '@mui/material'
import { Params, useParams } from 'react-router-dom'

import { CompanyOverview } from '@/components/companies/overview'
import { ContractOverview } from '@/components/contracts/overview'
import { EmployeeOverview } from '@/components/employees/overview'
import Loading from '@/components/ui/loading'
import { StatusTag } from '@/components/ui/tag/status-tag'
import { useGetOne } from '@/hooks/get'
import { PageLayout } from '@/layouts/page'
import { BaseContract, Contract } from '@/schemas/contract'
import { PaymentMethod } from '@/schemas/payment-method'

const ContractPage: FC = () => {
	const { contractId } = useParams<Params>()

	const { data, isLoading } = useGetOne<BaseContract>(`contracts/${contractId}`)
	const { data: paymentMethod } = useGetOne<PaymentMethod>(`payment-methods/${data?.paymentMethodId}`)

	const contract: Contract = {
		...data,
		paymentMethod: paymentMethod as PaymentMethod,
	} as Contract

	if (isLoading) {
		return <Loading />
	}

	if (!contract) {
		return null
	}

	return (
		<PageLayout.Root>
			<PageLayout.Header.Root>
				<PageLayout.Header.Title.Root>
					<PageLayout.Header.Title.GoBackButton />

					<PageLayout.Header.Title.Text>Contrato {contractId}</PageLayout.Header.Title.Text>

					<Stack gap={1} direction="row" alignItems="center">
						<StatusTag status="PARALISADO" />
						<Divider orientation="vertical" />
						<Typography fontSize={12} fontWeight={500}>
							Avanço financeiro:
							<Typography
								component="span"
								ml={1}
								fontWeight={600}
								color={(theme) => theme.palette.juicy.secondary[60]}
							>
								45%
							</Typography>
						</Typography>
					</Stack>
				</PageLayout.Header.Title.Root>
			</PageLayout.Header.Root>

			<PageLayout.Content>
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
			</PageLayout.Content>
		</PageLayout.Root>
	)
}

export default ContractPage
