import { FC } from 'react'

import { Divider, Stack, Typography } from '@mui/material'
import { Params, useParams } from 'react-router-dom'

import Loading from '@/components/ui/loading'
import { ActionOption, MenuOptionsButton } from '@/components/ui/menu-options-button'
import { StatusTag } from '@/components/ui/tag/status-tag'
import { useGetOne } from '@/hooks/get'
import { PageLayout } from '@/layouts/page'
import { Contract } from '@/schemas/contract'
import { Section } from '@/types/label-value'

const ContractOptions: ActionOption[] = [
	{ label: 'Editar contrato', dispatch: console.log },
	{ label: 'Excluir contrato', dispatch: console.log },
]

const SECTIONS: Section[] = [
	{ label: 'Visão Geral', value: 'overview' },
	{ label: 'Tipo de contrato', value: 'contract-type' },
	{ label: 'Pagamento', value: 'payment' },
]

const ContractPage: FC = () => {
	const { contractId } = useParams<Params>()

	const { data: contract, isLoading } = useGetOne<Contract>(`contract/${contractId}`)
	console.log(contract)

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
						<StatusTag status={contract.status} />
						<Divider orientation="vertical" />
						<Typography fontSize={12} fontWeight={500}>
							Avanço financeiro:
							<Typography
								component="span"
								ml={1}
								fontWeight={600}
								color={(theme) => theme.palette.juicy.secondary[60]}
							>
								{contract.financialProgress}
							</Typography>
						</Typography>
					</Stack>
				</PageLayout.Header.Title.Root>
				<PageLayout.Header.RightElementGroup>
					<MenuOptionsButton options={ContractOptions} />
				</PageLayout.Header.RightElementGroup>
			</PageLayout.Header.Root>

			<PageLayout.Sections sections={SECTIONS} />

			<PageLayout.Content />
		</PageLayout.Root>
	)
}

export default ContractPage
