import { FC, SyntheticEvent, useCallback, useEffect } from 'react'

import { Stack, Tab, Tabs } from '@mui/material'

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

	useEffect(() => {
		setSection(sections[0].value)
	}, [])

	return (
		<Stack borderBottom={1} borderColor="divider">
			<Tabs value={section} onChange={handleTabChange}>
				{sections.map((section) => (
					<Tab key={section.value} {...section} />
				))}
			</Tabs>
		</Stack>
	)
}
