import { CircularProgress, Stack, StackProps } from '@mui/material'

const Loading: React.FC<StackProps> = ({ ...props }) => {
	return (
		<Stack width="100%" alignItems="center" mt={2} {...props}>
			<CircularProgress color="primary" />
		</Stack>
	)
}

export default Loading
