import { ColumnDef, ColumnHelper, createColumnHelper } from '@tanstack/react-table'

type RenderCells<T extends object> = (helper: ColumnHelper<T>) => unknown[]

export const createColumns = <T extends object>(renderCell: RenderCells<T>): ColumnDef<T>[] => {
	const columnHelper = createColumnHelper<T>()

	return renderCell(columnHelper) as ColumnDef<T>[]
}
