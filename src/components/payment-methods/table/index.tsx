import { FC } from 'react'

import { Table } from '@/components/ui/table'
import { useGetPageable } from '@/hooks/get'
import { PaymentMethod } from '@/schemas/payment-method'
import { createColumns } from '@/utils/create-columns'

const columns = createColumns<PaymentMethod>((helper) => [
	helper.accessor('name', {
		id: 'name',
		header: 'Nome',
		cell: (props) => props.getValue(),
	}),
	helper.accessor('frequency', {
		id: 'frequency',
		header: 'Frequência de pagamento (meses)',
		cell: (props) => props.getValue(),
	}),
])

export const PaymentMethodsTable: FC = () => {
	const {
		data: { data: paymentMethods, items },
	} = useGetPageable<PaymentMethod>('payment-methods')

	return <Table columns={columns} data={paymentMethods} items={items} />
}
