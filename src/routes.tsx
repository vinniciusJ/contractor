import { lazy } from 'react'

import { Navigate, createBrowserRouter } from 'react-router-dom'

const ContractsPage = lazy(() => import('@/pages/contracts'))

export const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				element: <Navigate to="contracts" />,
			},
			{
				path: 'contracts',
				element: <ContractsPage />,
			},
		],
	},
])
