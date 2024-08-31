import { DocumentBlank, Download } from '@carbon/icons-react'
import { IconButton, Stack, Typography } from '@mui/material'

import { Box } from '../box'
import { formatBytes } from '@/utils/format-bytes'

interface Props {
	file?: File | null
}

const FilePreview = ({ file }: Props) => {
	if (!file) {
		return null
	}

	return (
		<Box direction="row" justifyContent="space-between" p={1} alignItems="center">
			<Stack direction="row" gap={1} alignItems="center">
				<DocumentBlank />
				<Stack>
					<Typography>{file.name}</Typography>
					<Typography variant="caption">{formatBytes(file.size)}</Typography>
				</Stack>
			</Stack>

			<IconButton onClick={() => {}}>
				<Download />
			</IconButton>
		</Box>
	)
}

export default FilePreview
