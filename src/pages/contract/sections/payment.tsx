import { DocumentAdd as DocumentIcon } from '@carbon/icons-react'
import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Box } from '@/components/ui/box'
import { Field } from '@/components/ui/field'
import FilePreview from '@/components/ui/file-preview'
import { GridGroup } from '@/components/ui/grid-group'
import { ActionOption, MenuOptionsButton } from '@/components/ui/menu-options-button'
import { useGetOne } from '@/hooks/get'
import { APIContract } from '@/schemas/contract'
import { formatDate } from '@/utils/date'

const ContractTypeOptions: ActionOption[] = [
	{ label: 'Editar parcela', dispatch: console.log },
	{ label: 'Excluir parcela', dispatch: console.log },
]

const ContractPaymentSection = () => {
	const { contractId } = useParams()

	const { data: contract } = useGetOne<APIContract>(`contracts/${contractId}`)

	if (!contract) return null

	return (
		<>
			<Field label="Tipo de pagamento">Bimestral</Field>

			<Divider />

			<Typography variant="h2">Parcelas</Typography>
			{contract.installments.map((installment) => (
				<Box key={installment.id} position="relative">
					<Stack gap={4}>
						<GridGroup columns={3}>
							<Field label="Valor">{installment.value}</Field>
							<Field label="Data prevista de pagamento">
								{formatDate(installment.scheduledDeliveryDate)}
							</Field>
							<Field label="Data de pagamento">{formatDate(installment.paymentDate)}</Field>
							{installment.paymentReceipt ? (
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
							) : (
								<Grid item xs={3}>
									<Button variant="outlined" startIcon={<DocumentIcon size={20} />} fullWidth>
										Adicionar comprovante de pagamento
									</Button>
								</Grid>
							)}
						</GridGroup>
					</Stack>
					<MenuOptionsButton options={ContractTypeOptions} sx={{ position: 'absolute', top: 4, right: 4 }} />
				</Box>
			))}
		</>
	)
}

export default ContractPaymentSection
