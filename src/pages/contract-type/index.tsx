import { FC } from 'react'

import { Add as AddIcon, Edit as EditIcon } from '@carbon/icons-react'
import { Button, Divider, Stack, Typography } from '@mui/material'
import { Params, useParams } from 'react-router-dom'

import { ContractItems } from '@/components/contract-items'
import { ContractTypeForm } from '@/components/contract-type/form'
import { ContractTypeContractItemsForm } from '@/components/contract-type/form/contract-items'
import { Field } from '@/components/ui/field'
import { GridGroup } from '@/components/ui/grid-group'
import { useModal } from '@/components/ui/modal/provider'
import { useGetOne } from '@/hooks/get'
import { PageLayout } from '@/layouts/page'
import { ContractType } from '@/schemas/contractual-type'
import { withEndpoint } from '@/utils/query'

const ContractTypePage: FC = () => {
	const { contractTypeId } = useParams<Params<'contractTypeId'>>()

	const { data: contractType } = useGetOne<ContractType>(withEndpoint`contract-types/${contractTypeId}`)

	const contractItemFormRef = useModal()
	const contractTypeFormRef = useModal()

	if (!contractType) {
		return null
	}

	return (
		<>
			<PageLayout.Root>
				<PageLayout.Header.Root>
					<PageLayout.Header.Title.Root>
						<PageLayout.Header.Title.GoBackButton />
						<PageLayout.Header.Title.Text>
							Tipo de contratação - {contractTypeId}
						</PageLayout.Header.Title.Text>
					</PageLayout.Header.Title.Root>

					<PageLayout.Header.RightElementGroup>
						<Button
							variant="outlined"
							startIcon={<EditIcon size={20} />}
							onClick={() => contractTypeFormRef.current?.openModal()}
						>
							Editar
						</Button>
					</PageLayout.Header.RightElementGroup>
				</PageLayout.Header.Root>

				<PageLayout.Content>
					<GridGroup>
						<Field label="Nome">{contractType.name}</Field>

						<Field label="Objetivo do contrato" xs={3}>
							{contractType.contractObjective}
						</Field>
					</GridGroup>

					<Divider />

					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Typography variant="h2">Items contratuais</Typography>

						<Button
							variant="outlined"
							startIcon={<AddIcon size={20} />}
							onClick={() => contractItemFormRef.current?.openModal()}
						>
							Adicionar item
						</Button>
					</Stack>

					<ContractItems items={contractType.contractItems} />
				</PageLayout.Content>
			</PageLayout.Root>

			<ContractTypeForm formRef={contractTypeFormRef} id={contractTypeId} />
			<ContractTypeContractItemsForm formRef={contractItemFormRef} contractType={contractType} />
		</>
	)
}

export default ContractTypePage
