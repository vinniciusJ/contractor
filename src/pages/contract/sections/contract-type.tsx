import { Add as AddIcon } from '@carbon/icons-react'
import { Button, Divider, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { ContractItems } from '@/components/contract-items'
import { Field } from '@/components/ui/field'
import { GridGroup } from '@/components/ui/grid-group'
import { useGetOne } from '@/hooks/get'
import { APIContract } from '@/schemas/contract'

const ContractTypeSection = () => {
	const { contractId } = useParams()

	const { data: contract } = useGetOne<APIContract>(`contracts/${contractId}`)

	if (!contract) return null

	return (
		<>
			<GridGroup>
				<Field label="Tipo de pagamento">{contract.name}</Field>
				<Field xs={3} label="Objeto do contrato">
					{contract.contractObjective}
				</Field>
			</GridGroup>

			<Divider />

			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Typography variant="h2">Items contratuais</Typography>

				<Button variant="outlined" startIcon={<AddIcon size={20} />} onClick={console.log}>
					Adicionar item
				</Button>
			</Stack>

			<ContractItems items={contract.contractItems} />
		</>
	)
}

export default ContractTypeSection
