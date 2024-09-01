import { FC, PropsWithChildren } from 'react'

import { ChevronDown as ChevronDownIcon, OverflowMenuVertical as OverflowMenuVerticalIcon } from '@carbon/icons-react'
import { Button, IconButton, MenuItem } from '@mui/material'
import { sha256 } from 'js-sha256'

import { Popover, usePopover } from '../popover'
import { openPopover } from '@/utils/ui'

interface ActionOption {
	dispatch: () => void
	label: string
}

interface Props extends PropsWithChildren {
	options: ActionOption[]
}

export const MenuOptionsButton: FC<Props> = ({ options, children }) => {
	const popoverRef = usePopover()

	return (
		<>
			{children ? (
				<Button onClick={openPopover(popoverRef)} endIcon={<ChevronDownIcon size={20} />}>
					{children}
				</Button>
			) : (
				<IconButton onClick={openPopover(popoverRef)}>
					<OverflowMenuVerticalIcon size={20} />
				</IconButton>
			)}

			<Popover ref={popoverRef}>
				{options.map((option) => (
					<MenuItem key={sha256(option.label)} onClick={option.dispatch}>
						{option.label}
					</MenuItem>
				))}
			</Popover>
		</>
	)
}
