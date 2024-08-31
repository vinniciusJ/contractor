import { Tag } from '..'
import { Status } from '@/schemas/contract'
import { theme } from '@/themes'

interface Props {
	status: Status
}
const STATUS_COLORS = {
	'EM ANDAMENTO': { bgcolor: theme.palette.juicy.secondary[20], color: theme.palette.juicy.secondary[60] },
	'EM CONTRATAÇÃO': { bgcolor: theme.palette.juicy.primary[20], color: theme.palette.juicy.primary[60] },
	CANCELADO: { bgcolor: theme.palette.juicy.red[10], color: theme.palette.juicy.red[100] },
	PARALISADO: { bgcolor: theme.palette.juicy.olive[10], color: theme.palette.juicy.olive[100] },
}

export const StatusTag = ({ status }: Props) => {
	const { bgcolor, color } = STATUS_COLORS[status]

	return (
		<Tag bgcolor={bgcolor} color={color}>
			{status.toLowerCase()}
		</Tag>
	)
}
