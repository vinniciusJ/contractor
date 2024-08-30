export const interpolate = (template: string, variables: { [key: string]: string }): string => {
	const variableKeys = new Set(Object.keys(variables))

	return template.replaceAll(/{([^{}]+)}/g, (match, key) => {
		if (variableKeys.has(key.trim())) {
			return variables[key.trim()]
		}
		return match
	})
}
