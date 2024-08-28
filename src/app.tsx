import { Suspense } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import { queryClient } from './shared/query-client'
import { theme } from './themes'

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Suspense>
					<RouterProvider router={router} />
				</Suspense>
			</ThemeProvider>
		</QueryClientProvider>
	)
}
