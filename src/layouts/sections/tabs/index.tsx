import { FC, SyntheticEvent, useCallback } from 'react'

import { Tab, Tabs } from '@mui/material'

import { useSection } from '@/hooks/section'
import { LabelValue } from '@/types/label-value'

interface Props {
	sections: LabelValue<string, string>[]
}

export const PageLayoutSections: FC<Props> = ({ sections }) => {
	const [section, setSection] = useSection()

	const handleTabChange = useCallback((_event: SyntheticEvent, value: string) => {
		setSection(value)
	}, [])

	return (
		<Tabs value={section} onChange={handleTabChange}>
			{sections.map((section) => (
				<Tab key={section.value} {...section} />
			))}
		</Tabs>
	)
}
