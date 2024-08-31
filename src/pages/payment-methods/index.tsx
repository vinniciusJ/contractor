import { FC } from 'react'

import { Add as AddIcon } from '@carbon/icons-react'
import { Button } from '@mui/material'

import { PaymentMethodForm } from '@/components/payment-methods/form'
import { PaymentMethodsTable } from '@/components/payment-methods/table'
import { useModal } from '@/components/ui/modal/provider'
import { PageLayout } from '@/layouts/page'

const PaymentMethods: FC = () => {
	const paymentMethodFormRef = useModal()

	return (
		<>
			<PageLayout.Root>
				<PageLayout.Header.Root>
					<PageLayout.Header.Title.Root>
						<PageLayout.Header.Title.GoBackButton />
						<PageLayout.Header.Title.Text>Formas de pagamento</PageLayout.Header.Title.Text>
					</PageLayout.Header.Title.Root>

					<PageLayout.Header.RightElementGroup>
						<Button
							startIcon={<AddIcon size={20} />}
							onClick={() => paymentMethodFormRef.current?.openModal()}
						>
							Cadastrar
						</Button>
					</PageLayout.Header.RightElementGroup>
				</PageLayout.Header.Root>

				<PageLayout.Content>
					<PaymentMethodsTable />
				</PageLayout.Content>
			</PageLayout.Root>

			<PaymentMethodForm formRef={paymentMethodFormRef} />
		</>
	)
}

export default PaymentMethods
