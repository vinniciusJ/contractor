import { FC } from 'react'

import { Add as AddIcon, Edit as EditIcon } from '@carbon/icons-react'
import { Button, Divider, Stack, Typography } from '@mui/material'
import { Params, useParams } from 'react-router-dom'

import { ContractTypeForm } from '@/components/contract-type/form'
import { ContractTypeContractItemsForm } from '@/components/contract-type/form/contract-items'
import { Box } from '@/components/ui/box'
import { Field } from '@/components/ui/field'
import { GridGroup } from '@/components/ui/grid-group'
import { MenuOptionsButton } from '@/components/ui/menu-options-button'
import { useModal } from '@/components/ui/modal/provider'
import { useGetOne } from '@/hooks/get'
import { PageLayout } from '@/layouts/page'
import { ContractItem } from '@/schemas/contract-item'
import { ContractType } from '@/schemas/contractual-type'
import { CONTRACT_TYPE_ITEM_TYPE_LABELS } from '@/utils/constants/labels'
import { formatDate } from '@/utils/date'
import { withEndpoint } from '@/utils/query'

const getContractItemsOptions = (item: ContractItem) => {
	const options = [
		{ label: 'Concluir item', dispatch: console.log },
		{ label: 'Editar item', dispatch: console.log },
		{ label: 'Remover item', dispatch: console.log },
	]

	if (item.finishedDate) {
		options.shift()
	}

	return options
}

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

					<Stack gap={2}>
						{contractType.contractItems.map((item) => (
							<Box key={item.id} direction="row" alignItems="center" justifyContent="space-between">
								<GridGroup columns={4}>
									<Field label="Nome">{item.name}</Field>
									<Field label="Tipo do item">{CONTRACT_TYPE_ITEM_TYPE_LABELS[item.type]}</Field>
									<Field label="Data prevista de conclusão">{formatDate(item.scheduledDate)}</Field>
									<Field label="Data de conclusão">
										{item.finishedDate ? formatDate(item.finishedDate) : '-'}
									</Field>
								</GridGroup>

								<MenuOptionsButton options={getContractItemsOptions(item)} />
							</Box>
						))}
					</Stack>
				</PageLayout.Content>
			</PageLayout.Root>

			<ContractTypeForm formRef={contractTypeFormRef} id={contractTypeId} />
			<ContractTypeContractItemsForm formRef={contractItemFormRef} contractType={contractType} />
		</>
	)
}

export default ContractTypePage
