import { ReactNode } from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

interface Props {
	children: ReactNode
	zoom?: number
}

// eslint-disable-next-line sonarjs/no-globals-shadowing
export const Map = ({ children, zoom = 4 }: Props) => {
	return (
		<MapContainer center={[-10.333_333_3, -53.2]} zoom={zoom} style={{ height: '75vh' }}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{children}
		</MapContainer>
	)
}
