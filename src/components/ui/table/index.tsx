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

import { usePagination } from '@/hooks/pagination'

interface Props<T extends object> {
	data: T[]
	items: number
	columns: ColumnDef<T>[]
}

export function Table<T extends object>({ data, items, columns }: Readonly<Props<T>>) {
	const { page, pageSize, setPage, setPageSize } = usePagination()

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true,
		state: { pagination: { pageIndex: page, pageSize: pageSize } },
	})

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
									</TableCell>
								))}
							</TableRow>
						))}
					</TableHead>
					<TableBody>
						{table.getRowModel().rows.map((row) => (
							<TableRow key={row.id}>
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

			<TablePagination
				count={items}
				rowsPerPage={pageSize}
				page={page - 1}
				onPageChange={handlePageChange}
				onRowsPerPageChange={handleRowPerPageChange}
			/>
		</Stack>
	)
}
