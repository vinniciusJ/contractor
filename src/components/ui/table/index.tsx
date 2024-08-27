import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

interface Props<T extends object> {
	data: T[]
	columns: ColumnDef<T>[]
}

export function Table<T extends object>({ data, columns }: Readonly<Props<T>>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	})

	return (
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
	)
}
