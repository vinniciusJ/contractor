import { Field } from '@/components/ui/field'
import { GridGroup } from '@/components/ui/grid-group'
import { APIContract } from '@/schemas/contract'
import { formatDate } from '@/utils/date'

interface Props {
	contract: APIContract
}

export const ContractOverview = ({ contract }: Props) => {
	return (
		<GridGroup>
			<Field label="Nome">{contract.name}</Field>
			<Field label="Data inicial">{formatDate(contract.startDate)}</Field>
			<Field label="Data final">{formatDate(contract.endDate)}</Field>
			<Field label="Valor">{contract.contractedValue}</Field>
			<Field label="Local de execução" xs={2}>
				{contract.executionLocal}
			</Field>
		</GridGroup>
	)
}
