import { FC } from 'react'

import { Stack, StackProps } from '@mui/material'

export const PageLayoutRoot: FC<StackProps> = (props) => {
	return <Stack {...props} gap={2} />
}
