import { RefObject, useState } from 'react'

import { View as ViewIcon, ViewOff as ViewOffIcon } from '@carbon/icons-react'
import { IconButton, InputAdornment } from '@mui/material'
import { Control, Path } from 'react-hook-form'

import { Input } from './input'

interface PasswordProps<T extends object> {
	control: Control<T>
	required?: boolean
	name: Path<T>
	label?: string
	inputRef?: RefObject<HTMLInputElement>
}

export function PasswordInput<T extends object>(props: Readonly<PasswordProps<T>>) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const showPassword = () => setIsPasswordVisible(!isPasswordVisible)

	return (
		<Input
			control={props.control}
			name={props.name}
			label={props.label}
			type={isPasswordVisible ? 'text' : 'password'}
			inputRef={props.inputRef}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton onClick={showPassword}>
							{isPasswordVisible ? <ViewIcon size={20} /> : <ViewOffIcon size={20} />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	)
}
