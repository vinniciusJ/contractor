import { FC } from 'react'

import { Outlet } from 'react-router-dom'

export const PageLayoutContent: FC<unknown> = (...props) => {
	return <Outlet context={props} />
}
