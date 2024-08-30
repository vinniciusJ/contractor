import { Marker } from 'react-leaflet'

import { Map } from '@/components/ui/map'
import { useGetList } from '@/hooks/get'
import { Contract } from '@/schemas/contract'

const ContractsMapPage = () => {
	const { data: contracts } = useGetList<Contract>('contracts')

	return (
		<Map>
			{contracts?.map((contract) => (
				<Marker key={contract.id} position={[contract.latitude, contract.longitude]}></Marker>
			))}
		</Map>
	)
}

export default ContractsMapPage
