import { FC, MouseEvent, useCallback, useMemo } from 'react'

import {
	Building as CompaniesIcon,
	DocumentMultiple_01 as ContractIcon,
	Logout as LogoutIcon,
} from '@carbon/icons-react'
import { Avatar, Divider, Stack, ToggleButtonGroup, Tooltip, Typography } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { LogoutButton, OptionButton } from './styles'

export const AppMenu: FC = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const currentPage = useMemo(() => location.pathname.split('/')[1], [location])

	const navigatoToPage = useCallback(
		(_: MouseEvent<HTMLElement>, page: string) => {
			const to = page ?? currentPage

			navigate(`${to}/${to === 'companies' ? 'hiring' : 'map'}`)
		},
		[currentPage]
	)

	return (
		<Stack
			pt={2}
			position="fixed"
			top={0}
			left={0}
			bottom={0}
			width="16vw"
			height="100%"
			bgcolor="juicy.neutral.90"
			justifyContent="space-between"
		>
			<Stack gap={2}>
				<Stack justifyContent="center" alignItems="center">
					<Link to="/">
						<Stack component="img" src="/contractor.svg" height="2.5vw" />
					</Link>
				</Stack>

				<Divider flexItem sx={{ bgcolor: 'juicy.neutral.70', mx: 1 }} />

				<ToggleButtonGroup
					orientation="vertical"
					value={currentPage}
					exclusive
					onChange={navigatoToPage}
					sx={{ border: 'none' }}
				>
					<OptionButton value="contracts">
						<ContractIcon />
						Contratos
					</OptionButton>
					<OptionButton value="companies">
						<CompaniesIcon />
						Empresas
					</OptionButton>
				</ToggleButtonGroup>
			</Stack>

			<Stack mx={1} mb={4} direction="row" justifyContent="space-between" alignItems="center">
				<Stack direction="row" gap={2}>
					<Avatar variant="rounded">VJ</Avatar>

					<Stack gap={1}>
						<Typography color="juicy.neutral.40" fontSize={14}>
							Vinicius Jimenez
						</Typography>
						<Typography color="juicy.neutral.60" fontSize={12}>
							vinicius@email.com
						</Typography>
					</Stack>
				</Stack>

				<Tooltip title="Fazer logout">
					<LogoutButton onClick={() => navigate('/login')}>
						<LogoutIcon size={24} />
					</LogoutButton>
				</Tooltip>
			</Stack>
		</Stack>
	)
}
