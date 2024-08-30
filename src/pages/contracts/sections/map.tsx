import { Marker } from 'react-leaflet'

import { Map } from '@/components/ui/map'
import { useGetList } from '@/hooks/get'
import { Contract } from '@/schemas/contract'

const ContractsMapPage = () => {
	const { data: contracts } = useGetList<Contract>('contracts')
	console.log(contracts)
	return (
		<Map>
			<Marker position={[-25.419_218_237_616_92, -54.596_047_442_975_88]}></Marker>
		</Map>
	)
}

export default ContractsMapPage
