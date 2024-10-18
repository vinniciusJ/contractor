export const parseToOptions = (items: { name: string; id: number }[]) =>
	items.map((item) => ({
		label: item.name,
		value: item.id,
	}))
