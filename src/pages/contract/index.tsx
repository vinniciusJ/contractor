import { FC } from 'react'

import { Divider, Stack, Typography } from '@mui/material'
import { Params, useParams } from 'react-router-dom'

import Loading from '@/components/ui/loading'
import { StatusTag } from '@/components/ui/tag/status-tag'
import { useGetOne } from '@/hooks/get'
import { PageLayout } from '@/layouts/page'
import { APIContract, Contract } from '@/schemas/contract'
import { PaymentMethod } from '@/schemas/payment-method'
import { Section } from '@/types/label-value'

const SECTIONS: Section[] = [
	{ label: 'Visão Geral', value: 'overview' },
	{ label: 'Tipo de contrato', value: 'contract-type' },
	{ label: 'Pagamento', value: 'payment' },
]

const ContractPage: FC = () => {
	const { contractId } = useParams<Params>()

	const { data, isLoading } = useGetOne<APIContract>(`contracts/${contractId}`)
	const { data: paymentMethod } = useGetOne<PaymentMethod>(`payment-methods/${data?.paymentMethodId}`)

	const contract: Contract = {
		...data,
		paymentMethod: paymentMethod,
	} as unknown as Contract

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

			<PageLayout.Sections sections={SECTIONS} />

			<PageLayout.Content />
		</PageLayout.Root>
	)
}

export default ContractPage
