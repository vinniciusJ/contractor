import { FC } from 'react'

import { SplitButton } from '@/components/ui/split-button'
import { PageLayout } from '@/layouts/page'
import { Section } from '@/types/label-value'

const SECTIONS: Section[] = [
	{ label: 'Contratantes', value: 'hiring' },
	{ label: 'Contratadas', value: 'contracted' },
]

const CompaniesPage: FC = () => {
	return (
		<PageLayout.Root>
			<PageLayout.Header.Root>
				<PageLayout.Header.Title>Empresas</PageLayout.Header.Title>

				<PageLayout.Header.RightElementGroup>
					<SplitButton
						options={[
							{ label: 'Cadastrar contratante', dispatch: () => console.log('oii') },
							{ label: 'Cadastrar contratada', dispatch: () => console.log('oiie') },
						]}
					/>
				</PageLayout.Header.RightElementGroup>
			</PageLayout.Header.Root>

			<PageLayout.Sections sections={SECTIONS} />

			<PageLayout.Content />
		</PageLayout.Root>
	)
}

export default CompaniesPage
