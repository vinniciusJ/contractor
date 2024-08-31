import { FC, PropsWithChildren } from 'react'

import { To } from 'react-router-dom'

import { LinkContainer } from './styles'

interface Props extends PropsWithChildren {
	to: To
}

export const Link: FC<Props> = ({ to, children }) => {
	return <LinkContainer to={to}>{children}</LinkContainer>
}
