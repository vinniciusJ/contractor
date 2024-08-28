/* eslint-disable @typescript-eslint/no-empty-object-type */
import { CSSProperties } from 'react'

export interface ColorVariants {
	10: CSSProperties['color']
	20: CSSProperties['color']
	30: CSSProperties['color']
	40: CSSProperties['color']
	50: CSSProperties['color']
	60: CSSProperties['color']
	70: CSSProperties['color']
	80: CSSProperties['color']
	90: CSSProperties['color']
	100: CSSProperties['color']
}

export type MinColorVariants = Pick<ColorVariants, 10 | 50 | 100>

export interface Pallete {
	primary: ColorVariants
	secondary: ColorVariants
	neutral: ColorVariants
	green: MinColorVariants
	red: MinColorVariants
	orange: MinColorVariants
	purple: MinColorVariants
	olive: MinColorVariants
}

interface JuicyPallete {
	juicy: Pallete
}

declare module '@mui/material/styles' {
	interface Palette extends JuicyPallete {}
	interface PaletteOptions extends JuicyPallete {}
}
