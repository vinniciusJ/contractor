import { Button, Stack } from '@mui/material'
import { Marker, Popup } from 'react-leaflet'

import { Field } from '@/components/ui/field'
import { Map } from '@/components/ui/map'
import { useGetList } from '@/hooks/get'
import { BaseContract } from '@/schemas/contract'

const ContractsMapPage = () => {
	const { data: contracts } = useGetList<BaseContract>('contracts')

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
								{contract.contractType}
							</Field>
							<Field component="stack" label="Local de execução">
								{contract.executionLocal}
							</Field>
							<Field component="stack" label="Valor">
								{contract.contractedValue}
							</Field>
							<Field
								component="stack"
								label="Período"
							>{`${contract.startDate} - ${contract.endDate}`}</Field>
							<Field component="stack" label="Status de execução">
								{contract.status ?? '-'}
							</Field>
							<Field component="stack" label="Avanço financeiro">
								{contract.financialProgress ?? '-'}
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
