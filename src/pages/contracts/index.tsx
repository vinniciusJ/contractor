import { FC } from 'react'

import { Button } from '@mui/material'

import { PageLayout } from '@/layouts/sections'
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

				<PageLayout.Header.RightElementGroup>
					<Button>Tipos de contratação</Button>
					<Button>Tipos de pagamento</Button>
					<Button>Cadastrar</Button>
				</PageLayout.Header.RightElementGroup>
			</PageLayout.Header.Root>

			<PageLayout.Tabs sections={SECTIONS} />

			<PageLayout.Content />
		</PageLayout.Root>
	)
}

export default Contracts
