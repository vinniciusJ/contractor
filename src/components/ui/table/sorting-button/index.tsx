import { useMemo } from 'react'

import { ArrowDown, ArrowUp, ArrowsVertical } from '@carbon/icons-react'
import { IconButton, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Column } from '@tanstack/react-table'

import { Popover, openPopover, usePopover } from '../../popover'
import { ASC, DESC, useSorting } from '@/hooks/sorting'
import { theme } from '@/themes'

export interface HeaderButtonProps<T> {
	column: Column<T, unknown>
}

export const SortingButton = <T extends object>({ column }: HeaderButtonProps<T>) => {
	const sortingPopover = usePopover()
	const { changeSorting, getIsSortedBy, sortingType } = useSorting()

	const isSortedByThisColumn = useMemo(() => getIsSortedBy(column.id), [getIsSortedBy, column])

	return (
		<>
			<IconButton size="small" onClick={(e) => openPopover(sortingPopover)(e.currentTarget)}>
				{isSortedByThisColumn && (
					<>
						{sortingType == 'ASC' && <ArrowDown color={theme.palette.juicy.primary[60]} />}
						{sortingType == 'DESC' && <ArrowUp color={theme.palette.juicy.primary[60]} />}
					</>
				)}

				{!isSortedByThisColumn && <ArrowsVertical />}
			</IconButton>
			<Popover
				ref={sortingPopover}
				title="table.sorting.sorting"
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				{
					<ToggleButtonGroup
						orientation="vertical"
						value={isSortedByThisColumn && sortingType}
						onChange={(_, value) => {
							changeSorting(column.id, value)
						}}
						exclusive
					>
						<ToggleButton value={ASC}>
							<ArrowDown />
							Crescente
						</ToggleButton>
						<ToggleButton value={DESC}>
							<ArrowUp />
							Decrescente
						</ToggleButton>
					</ToggleButtonGroup>
				}
			</Popover>
		</>
	)
}
