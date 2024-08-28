import { FC } from 'react'

import { PageLayout } from '@/layouts/page'
import { Section } from '@/types/label-value'

const SECTIONS: Section[] = [
	{ label: 'Mapa', value: 'map' },
	{ label: 'Lista', value: 'list' },
]

const Contracts: FC = () => {
	return (
		<PageLayout.Root>
			<PageLayout.Header.Root>
				<PageLayout.Header.Title>Contratos</PageLayout.Header.Title>
			</PageLayout.Header.Root>

			<PageLayout.Sections sections={SECTIONS} />

			<PageLayout.Content />
		</PageLayout.Root>
	)
}

export default Contracts
