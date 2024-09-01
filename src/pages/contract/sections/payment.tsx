import { Divider, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Box } from '@/components/ui/box'
import { Field } from '@/components/ui/field'
import FilePreview from '@/components/ui/file-preview'
import { GridGroup } from '@/components/ui/grid-group'
import { useGetOne } from '@/hooks/get'
import { APIContract } from '@/schemas/contract'
import { formatDate } from '@/utils/date'

const ContractPaymentSection = () => {
	const { contractId } = useParams()

	const { data: contract } = useGetOne<APIContract>(`contracts/${contractId}`)

	if (!contract) return null

	return (
		<>
			<Field label="Tipo de pagamento">{contract.contractTypeId}</Field>

			<Divider />

			<Typography variant="h2">Parcelas</Typography>
			{contract.installments.map((installment) => (
				<Box key={installment.id}>
					<GridGroup columns={3}>
						<Field label="Valor">{installment.value}</Field>
						<Field label="Data prevista de pagamento">
							{formatDate(installment.scheduledDeliveryDate)}
						</Field>
						<Field label="Data de pagamento">{formatDate(installment.paymentDate)}</Field>
						<Field label="Comprovante" xs={3}>
							<FilePreview
								file={
									{
										name: 'comprovante-TED.png',
										size: 2048,
									} as File
								}
							/>
						</Field>
					</GridGroup>
				</Box>
			))}
		</>
	)
}

export default ContractPaymentSection
