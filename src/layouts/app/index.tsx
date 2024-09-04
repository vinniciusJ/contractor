import { FC } from 'react'

import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { AppMenu } from '@/components/ui/menu'

export const AppLayout: FC = () => {
	return (
		<Stack>
			<AppMenu />

			<Stack ml="16vw" p={3}>
				<Outlet />
			</Stack>
		</Stack>
	)
}
