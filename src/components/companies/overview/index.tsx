import { Field } from '@/components/ui/field'
import { GridGroup } from '@/components/ui/grid-group'
import { Company } from '@/schemas/company'

interface Props {
	company: Company
}

export const CompanyOverview = ({ company }: Props) => {
	if (!company) return null

	return (
		<GridGroup>
			<Field label="Nome">{company?.name}</Field>
			<Field label="Razão social">{company.corporateName}</Field>
			<Field label="CNPJ">{company.code}</Field>
			<Field label="Telefone">{company.phone}</Field>
			<Field label="E-mail">{company.email}</Field>
			<Field label="Endereço">{company.address}</Field>
		</GridGroup>
	)
}
