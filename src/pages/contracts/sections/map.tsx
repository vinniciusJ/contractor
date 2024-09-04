import { Button, Stack } from '@mui/material'
import { Marker, Popup } from 'react-leaflet'

import { Field } from '@/components/ui/field'
import { Map } from '@/components/ui/map'
import { useGetList } from '@/hooks/get'
import { APIContract } from '@/schemas/contract'
import { formatDate } from '@/utils/date'

const ContractsMapPage = () => {
	const { data: contracts } = useGetList<APIContract>('contracts')

	return (
		<Map>
			{contracts?.map((contract) => (
				<Marker key={contract.id} position={[contract.latitude, contract.longitude]}>
					<Popup>
						<Stack gap={3}>
							<Field component="stack" label="Nome">
								{contract.name}
							</Field>
							<Field component="stack" label="Tipo de contrato">
								{contract.contractTypeId}
							</Field>
							<Field component="stack" label="Local de execução">
								{contract.executionLocal}
							</Field>
							<Field component="stack" label="Valor">
								{contract.contractedValue}
							</Field>
							<Field component="stack" label="Período">
								{formatDate(contract.startDate)} - {formatDate(contract.endDate)}
							</Field>
							<Field component="stack" label="Status de execução">
								{contract.status ?? 'Paralisado'}
							</Field>
							<Field component="stack" label="Avanço financeiro">
								{contract.financialProgress ?? '45%'}
							</Field>
							<Button
								href={`${contract.id.toString()}/overview`}
								size="small"
								sx={{ textDecoration: 'none', color: '#FFF !important' }}
							>
								Ver detalhes
							</Button>
						</Stack>
					</Popup>
				</Marker>
			))}
		</Map>
	)
}

export default ContractsMapPage
