import { Field } from '@/components/ui/field'
import { GridGroup } from '@/components/ui/grid-group'
import { Employee } from '@/schemas/employee'

interface Props {
	employee: Employee
}

export const EmployeeOverview = ({ employee }: Props) => {
	return (
		<GridGroup>
			<Field label="Nome">{employee?.name}</Field>
			<Field label="E-mail">{employee.email}</Field>
			<Field label="Telefone">{employee.phone}</Field>
		</GridGroup>
	)
}
