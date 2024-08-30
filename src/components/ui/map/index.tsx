import { ReactNode } from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

interface Props {
	children: ReactNode
	zoom?: number
}

// eslint-disable-next-line sonarjs/no-globals-shadowing
export const Map = ({ children, zoom = 15 }: Props) => {
	return (
		<MapContainer center={[-25.419_218_237_616_92, -54.596_047_442_975_88]} zoom={zoom} style={{ height: '75vh' }}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{children}
		</MapContainer>
	)
}
