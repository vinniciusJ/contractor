import { FC } from 'react'

import { Skeleton, Stack } from '@mui/material'

export const NavigationLoading: FC = () => {
	return (
		<Stack direction="row" width="100vw" height="100vh">
			<Skeleton width="16vw" variant="rectangular" height="100vh" />

			<Stack p={3} gap={3} width="84vw">
				<Stack direction="row" justifyContent="space-between">
					<Skeleton variant="text" width="20%" height="5vh" />
					<Skeleton variant="text" width="10%" height="5vh" />
				</Stack>

				<Stack direction="row" gap={0.5}>
					<Skeleton variant="text" width="10%" height="5vh" />
					<Skeleton variant="text" width="10%" height="5vh" />
					<Skeleton variant="text" width="10%" height="5vh" />
				</Stack>

				<Skeleton width="100%" variant="rectangular" height="100vh" />
			</Stack>
		</Stack>
	)
}
