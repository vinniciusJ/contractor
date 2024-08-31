import { FC } from 'react'

import { ContainerSoftware, CurrencyDollar } from '@carbon/icons-react'
import { Button, Typography } from '@mui/material'

import { Link } from '@/components/ui/link'
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
				<PageLayout.Header.Title.Root>
					<PageLayout.Header.Title.Text>Contratos</PageLayout.Header.Title.Text>
				</PageLayout.Header.Title.Root>

				<PageLayout.Header.RightElementGroup gap={3}>
					<Link to="/payment-methods">
						<CurrencyDollar size={20} />
						<Typography>Tipos de pagamento</Typography>
					</Link>
					<Link to="/contract-types">
						<ContainerSoftware size={20} />
						<Typography>Tipos de contratação</Typography>
					</Link>
					<Button>Cadastrar</Button>
				</PageLayout.Header.RightElementGroup>
			</PageLayout.Header.Root>

			<PageLayout.Sections sections={SECTIONS} />

			<PageLayout.Content />
		</PageLayout.Root>
	)
}

export default Contracts
