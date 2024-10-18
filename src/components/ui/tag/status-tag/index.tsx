import { Tag } from '..'
import { Status } from '@/schemas/contract'
import { theme } from '@/themes'

interface Props {
	status: Status
}
const STATUS_COLORS = {
	IN_PROGRESS: { bgcolor: theme.palette.juicy.secondary[20], color: theme.palette.juicy.secondary[60] },
	UNDER_CONTRACT: { bgcolor: theme.palette.juicy.primary[20], color: theme.palette.juicy.primary[60] },
	CANCELED: { bgcolor: theme.palette.juicy.red[10], color: theme.palette.juicy.red[100] },
	PARALYZED: { bgcolor: theme.palette.juicy.olive[10], color: theme.palette.juicy.olive[100] },
}

const STATUS_MAP = {
	IN_PROGRESS: 'Em progresso',
	UNDER_CONTRACT: 'Em contratação',
	CANCELED: 'Cancelado',
	PARALYZED: 'Paralisado',
}

export const StatusTag = ({ status }: Props) => {
	const { bgcolor, color } = STATUS_COLORS[status]

	return (
		<Tag bgcolor={bgcolor} color={color}>
			{STATUS_MAP[status]}
		</Tag>
	)
}
