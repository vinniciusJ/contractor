import { useCallback } from 'react'

import {
	Table as MuiTable,
	Stack,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'

import { FilteringButton } from './filtering-button'
import { SortingButton } from './sorting-button'
import { usePagination } from '@/hooks/pagination'
import { interpolate } from '@/utils/interpolate'

interface Props<T extends object> {
	data: T[]
	totalDataSize: number
	columns: ColumnDef<T>[]
	to?: string
}

export function Table<T extends object>({ data, totalDataSize, to, columns }: Readonly<Props<T>>) {
	const { page, pageSize, setPage, setPageSize } = usePagination()

	const navigate = useNavigate()

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true,
		state: { pagination: { pageIndex: page, pageSize: pageSize } },
	})

	const navigateTo = useCallback(
		(data: T) => {
			if (to) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				navigate(interpolate(to, { ...data } as any))
			}
		},
		[to]
	)

	const handleRowPerPageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setPageSize(Number.parseInt(event.target.value, 10))
	}, [])

	const handlePageChange = useCallback((_event: unknown, newPage: number) => {
		setPage(newPage + 1)
	}, [])

	return (
		<Stack>
			<TableContainer>
				<MuiTable>
					<TableHead>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableCell key={header.id}>
										{flexRender(header.column.columnDef.header, header.getContext())}
										{header.column.getCanSort() && <SortingButton column={header.column} />}
										{header.column.getCanFilter() && <FilteringButton />}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableHead>
					<TableBody>
						{table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								{...(to && { onClick: () => navigateTo(row.original), sx: { cursor: 'pointer' } })}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</MuiTable>
			</TableContainer>

			{totalDataSize > 0 && (
				<TablePagination
					count={totalDataSize}
					rowsPerPage={pageSize}
					page={page}
					onPageChange={handlePageChange}
					onRowsPerPageChange={handleRowPerPageChange}
					labelRowsPerPage={'Linhas por página:'}
					rowsPerPageOptions={[5, 10, 25, 100]}
					labelDisplayedRows={(props) => `${props.from} a ${props.to} de ${props.count}`}
				/>
			)}
		</Stack>
	)
}
