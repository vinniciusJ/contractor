import { lazy } from 'react'

import { Navigate, createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/app'

const ContractsPage = lazy(() => import('@/pages/contracts'))
const ContractsMapPage = lazy(() => import('@/pages/contracts/sections/map'))
const ContractsListPage = lazy(() => import('@/pages/contracts/sections/list'))

const CompaniesPageLayout = lazy(() => import('@/pages/companies'))

const CompanyPage = lazy(() => import('@/pages/company'))
const PaymentMethodsPage = lazy(() => import('@/pages/payment-methods'))
const ContractTypesPage = lazy(() => import('@/pages/contract-types'))

const HiringCompaniesSection = lazy(() => import('@/pages/companies/sections/hiring'))
const ContractedCompaniesSection = lazy(() => import('@/pages/companies/sections/contracted'))
const ContractTypePage = lazy(() => import('@/pages/contract-type'))

const ContractPageLayout = lazy(() => import('@/pages/contract'))
const ContractOverviewSection = lazy(() => import('@/pages/contract/sections/overview'))
const ContractTypeSection = lazy(() => import('@/pages/contract/sections/contract-type'))
const ContractPaymentSection = lazy(() => import('@/pages/contract/sections/payment'))
const LoginPage = lazy(() => import('@/pages/login'))

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
				children: [
					{
						element: <ContractsPage />,
						children: [
							{
								path: 'map',
								element: <ContractsMapPage />,
							},
							{
								path: 'list',
								element: <ContractsListPage />,
							},
						],
					},
					{
						path: ':contractId',
						element: <ContractPageLayout />,
						children: [
							{
								path: 'overview',
								element: <ContractOverviewSection />,
							},
							{
								path: 'contract-type',
								element: <ContractTypeSection />,
							},
							{
								path: 'payment',
								element: <ContractPaymentSection />,
							},
						],
					},
					{
						path: 'payment-methods',
						element: <PaymentMethodsPage />,
					},
					{
						path: 'contract-types',
						children: [
							{
								index: true,
								element: <ContractTypesPage />,
							},
							{
								path: ':contractTypeId',
								element: <ContractTypePage />,
							},
						],
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
	{
		path: '/login',
		element: <LoginPage />,
	},
])
