import { Suspense } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { NavigationLoading } from './components/ui/loadings/app'
import { router } from './routes'
import { queryClient } from './shared/query-client'
import { theme } from './themes'

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ToastContainer autoClose={5000} position="bottom-left" />

			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Suspense fallback={<NavigationLoading />}>
					<RouterProvider router={router} />
				</Suspense>
			</ThemeProvider>
		</QueryClientProvider>
	)
}
