import { useCallback, useMemo } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

export const useSection = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const section = useMemo(() => String(location.pathname.split('/').at(-1)), [location])

	const setSection = useCallback((section: string) => navigate(section), [])

	return [section, setSection] as const
}

export const useSectionValue = () => useSection()[0]
export const useSetSection = () => useSection()[1]
