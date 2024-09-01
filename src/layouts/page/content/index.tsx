import { FC, PropsWithChildren } from 'react'

import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

interface Props extends PropsWithChildren {
	[key: string]: unknown
}

export const PageLayoutContent: FC<Props> = ({ children, ...context }) => {
	if (children) {
		return <Stack gap={3}>{children}</Stack>
	}

	return <Outlet context={context} />
}
