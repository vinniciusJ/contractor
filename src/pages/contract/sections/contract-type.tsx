import { Divider, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Box } from '@/components/ui/box'
import { Field } from '@/components/ui/field'
import { GridGroup } from '@/components/ui/grid-group'
import { useGetOne } from '@/hooks/get'
import { BaseContract } from '@/schemas/contract'
import { formatDate } from '@/utils/date'

const ContractTypeSection = () => {
	const { contractId } = useParams()

	const { data: contract } = useGetOne<BaseContract>(`contracts/${contractId}`)

	if (!contract) return null

	return (
		<>
			<GridGroup>
				<Field label="Tipo de pagamento">{contract.contractType}</Field>
				<Field xs={3} label="Objeto do contrato">
					{contract.contractObjective}
				</Field>
			</GridGroup>

			<Divider />

			<Typography variant="h2">Entregas/serviços</Typography>
			{contract.contractItems.map((item) => (
				<Box key={item.id}>
					<GridGroup columns={3}>
						<Field label="Nome">{item.name}</Field>
						<Field label="Data prevista de conclusão">{formatDate(item.scheduledDate)}</Field>
						<Field label="Data de conclusão">{formatDate(item.scheduledDate)}</Field>
					</GridGroup>
				</Box>
			))}
		</>
	)
}

export default ContractTypeSection
