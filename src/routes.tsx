import { lazy } from 'react'

import { Navigate, createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/app'

const ContractsPage = lazy(() => import('@/pages/contracts'))
const ContractsMapPage = lazy(() => import('@/pages/contracts/sections/map'))
const CompaniesPageLayout = lazy(() => import('@/pages/companies'))

const CompanyPage = lazy(() => import('@/pages/company'))

const HiringCompaniesSection = lazy(() => import('@/pages/companies/sections/hiring'))
const ContractedCompaniesSection = lazy(() => import('@/pages/companies/sections/contracted'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Navigate to="contracts/map" />,
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
				children: [
					{
						element: <CompaniesPageLayout />,
						children: [
							{
								path: 'hiring',
								element: <HiringCompaniesSection />,
							},
							{
								path: 'contracted',
								element: <ContractedCompaniesSection />,
							},
						],
					},
					{
						path: ':companyType/:companyId',
						element: <CompanyPage />,
					},
				],
			},
		],
	},
])
