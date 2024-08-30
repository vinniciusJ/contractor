import { lazy } from 'react'

import { Navigate, createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/app'

const ContractsPage = lazy(() => import('@/pages/contracts'))
const ContractsMapPage = lazy(() => import('@/pages/contracts/sections/map'))
const CompaniesPageLayout = lazy(() => import('@/pages/companies'))
const HiringCompaniesPage = lazy(() => import('@/pages/companies/sections/hiring'))

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
						element: <ContractsMapPage />,
					},
					{
						path: 'list',
						element: <p>Lista</p>,
					},
				],
			},
			{
				path: 'companies',
				element: <CompaniesPageLayout />,
				children: [
					{
						path: 'hiring',
						element: <HiringCompaniesPage />,
					},
					{
						path: 'contracted',
					},
				],
			},
		],
	},
])
