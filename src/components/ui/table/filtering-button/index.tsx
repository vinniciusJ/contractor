import { Filter } from '@carbon/icons-react'
import { Button, IconButton, Stack } from '@mui/material'

import { Popover, openPopover, usePopover } from '../../popover'

export const FilteringButton = () => {
	const filteringPopover = usePopover()

	return (
		<>
			<IconButton size="small" onClick={(e) => openPopover(filteringPopover)(e.currentTarget)}>
				<Filter />
			</IconButton>

			<Popover ref={filteringPopover} title="table.filter.filters" sx={{ minWidth: 200 }}>
				<Stack direction="row" gap={1} justifyContent="space-evenly">
					<Button variant="text">Limpar</Button>
				</Stack>
			</Popover>
		</>
	)
}
