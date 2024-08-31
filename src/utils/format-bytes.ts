export const formatBytes = (size: number): string => {
	const suffixes: string[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

	let i = 0

	while (size >= 1024 && i < suffixes.length - 1) {
		size /= 1024

		i++
	}

	return `${size.toFixed(2)} ${suffixes[i]}`
}
