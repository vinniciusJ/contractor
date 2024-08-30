import { FC, MouseEvent, useCallback, useMemo } from 'react'

import { Building as CompaniesIcon, DocumentMultiple_01 as ContractIcon } from '@carbon/icons-react'
import { Divider, Stack, ToggleButtonGroup } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { OptionButton } from './styles'

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
			gap={2}
			position="fixed"
			top={0}
			left={0}
			bottom={0}
			width="15vw"
			height="100%"
			bgcolor="juicy.neutral.90"
		>
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
	)
}
