import { lazy } from 'react'

import { Navigate, createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/app'

const ContractsPage = lazy(() => import('@/pages/contracts'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Navigate to="contracts" />,
			},
			{
				path: 'contracts',
				element: <ContractsPage />,
				children: [
					{
						path: 'map',
						element: <p>Map</p>,
					},
					{
						path: 'list',
						element: <p>Lista</p>,
					},
				],
			},
			{
				path: 'companies',
				element: <p>companies</p>,
			},
		],
	},
])
