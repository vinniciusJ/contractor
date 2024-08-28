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

export type FontWeight = 'bold' | 'regular' | 'medium' | 'light' | 'extralight'

export interface Font {
	[k: string]: `
	@font-face {
		font-family: ${string};
		font-style: normal;
		font-display: swap;
		font-weight: ${number};
		src: local(${string}), local(${string}), url(${string}) format(${string});
		unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
	}
`
}

declare module '@mui/material/styles' {
	interface Palette extends JuicyPallete {}
	interface PaletteOptions extends JuicyPallete {}
}
