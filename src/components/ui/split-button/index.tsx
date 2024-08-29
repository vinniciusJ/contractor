import { FC, useCallback, useMemo, useState } from 'react'

import { ChevronDown } from '@carbon/icons-react'
import { Button, ButtonGroup, MenuItem } from '@mui/material'
import { sha256 } from 'js-sha256'

import { openPopover } from '../../../utils/ui'
import { Popover, usePopover } from '../popover'
import { closePopover } from '@/utils/ui'

interface ActionOption {
	dispatch: () => void
	label: string
}

interface Props {
	options: ActionOption[]
}

export const SplitButton: FC<Props> = ({ options }) => {
	const [selectedOption, setSelectedOption] = useState<number>(0)

	const currentOption = useMemo(() => options[selectedOption], [selectedOption, options])

	const popoverRef = usePopover()

	const handleOptionClick = useCallback((index: number) => {
		setSelectedOption(index)
		options[index].dispatch()
		closePopover(popoverRef)()
	}, [])

	return (
		<>
			<ButtonGroup>
				<Button fullWidth onClick={currentOption.dispatch}>
					{currentOption.label}
				</Button>
				<Button onClick={openPopover(popoverRef)} sx={{ p: 0, width: 16 }}>
					<ChevronDown width={16} height={16} />
				</Button>
			</ButtonGroup>

			<Popover ref={popoverRef}>
				{options.map((option, index) => (
					<MenuItem key={sha256(option.label)} onClick={() => handleOptionClick(index)}>
						{option.label}
					</MenuItem>
				))}
			</Popover>
		</>
	)
}
