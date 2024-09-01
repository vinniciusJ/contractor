import { ContractItemType, contractItemType } from '@/schemas/contract-item'

export const CONTRACT_TYPE_ITEM_TYPE_LABELS: Record<ContractItemType, string> = {
	[contractItemType.enum.SERVICE]: 'Serviço',
	[contractItemType.enum.DELIVERY]: 'Entrega',
}
