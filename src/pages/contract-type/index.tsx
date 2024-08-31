import { FC } from 'react'

import { Add as AddIcon } from '@carbon/icons-react'
import { Button } from '@mui/material'

import { ContractTypeForm } from '@/components/contract-type/form'
import { ContractTypesTable } from '@/components/contract-type/table'
import { useModal } from '@/components/ui/modal/provider'
import { PageLayout } from '@/layouts/page'

const ContractTypes: FC = () => {
	const contractTypeFormRef = useModal()

	return (
		<>
			<PageLayout.Root>
				<PageLayout.Header.Root>
					<PageLayout.Header.Title.Root>
						<PageLayout.Header.Title.GoBackButton />
						<PageLayout.Header.Title.Text>Tipos de contratação</PageLayout.Header.Title.Text>
					</PageLayout.Header.Title.Root>

					<PageLayout.Header.RightElementGroup>
						<Button
							startIcon={<AddIcon size={20} />}
							onClick={() => contractTypeFormRef.current?.openModal()}
						>
							Cadastrar
						</Button>
					</PageLayout.Header.RightElementGroup>
				</PageLayout.Header.Root>

				<PageLayout.Content>
					<ContractTypesTable />
				</PageLayout.Content>
			</PageLayout.Root>

			<ContractTypeForm formRef={contractTypeFormRef} />
			{/* <PaymentMethodForm formRef={contractTypeFormRef} /> */}
		</>
	)
}

export default ContractTypes
