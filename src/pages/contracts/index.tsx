import { FC } from 'react'

import { useGetAll } from '@/hooks/get'
import { Contract } from '@/schemas/contract'

const Contracts: FC = () => {
	const contracts = useGetAll<Contract>('contracts')

	console.log(contracts)

	return <div></div>
}

export default Contracts
