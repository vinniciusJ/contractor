import { FC } from 'react'

import { CompanyForm } from '@/components/companies/form'
import { MenuOptionsButton } from '@/components/ui/menu-options-button'
import { useModal } from '@/components/ui/modal/provider'
import { PageLayout } from '@/layouts/page'
import { Section } from '@/types/label-value'

const SECTIONS: Section[] = [
	{ label: 'Contratantes', value: 'hiring' },
	{ label: 'Contratadas', value: 'contracted' },
]

const CompaniesPage: FC = () => {
	const hiringCompanyFormRef = useModal()
	const contractedCompanyFormRef = useModal()

	return (
		<>
			<PageLayout.Root>
				<PageLayout.Header.Root>
					<PageLayout.Header.Title.Root>
						<PageLayout.Header.Title.Text>Empresas</PageLayout.Header.Title.Text>
					</PageLayout.Header.Title.Root>

					<PageLayout.Header.RightElementGroup>
						<MenuOptionsButton
							options={[
								{
									label: 'Cadastrar contratante',
									dispatch: () => hiringCompanyFormRef.current?.openModal(),
								},
								{
									label: 'Cadastrar contratada',
									dispatch: () => contractedCompanyFormRef.current?.openModal(),
								},
							]}
						>
							Cadastrar
						</MenuOptionsButton>
					</PageLayout.Header.RightElementGroup>
				</PageLayout.Header.Root>

				<PageLayout.Sections sections={SECTIONS} />

				<PageLayout.Content />
			</PageLayout.Root>

			<CompanyForm type="hiring" formRef={hiringCompanyFormRef} />
			<CompanyForm type="contracted" formRef={contractedCompanyFormRef} />
		</>
	)
}

export default CompaniesPage
