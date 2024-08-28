import { Font, FontWeight } from '../types/theme'
import ibmPlexSansLight from '@/assets/fonts/ibm-plex-sans-light.ttf'
import ibmPlexSansMedium from '@/assets/fonts/ibm-plex-sans-medium.ttf'
import ibmPlexSansRegular from '@/assets/fonts/ibm-plex-sans-regular.ttf'
import ibmPlexSansSemibold from '@/assets/fonts/ibm-plex-sans-semibold.ttf'
import { LIGHT_WEIGHT, MEDIUM_WEIGHT, REGULAR_WEIGHT, SEMIBOLD_WEIGHT } from '@/utils/constants'

export const IBM_PLEX_SANS_FONT_FAMILY = 'IBM Plex Sans'

interface CreateFontFaceProps {
	url: string
	fontWeight: number
	family: string
	format: 'truetype' | 'opentype'
}

export const FONT_WEIGHTS: Record<FontWeight, number> = {
	bold: 700,
	medium: 600,
	regular: 400,
	light: 300,
	extralight: 200,
}

const createFontFace = (props: CreateFontFaceProps): Font[string] => `
	@font-face {
		font-family: ${props.family};
		font-style: normal;
		font-display: swap;
		font-weight: ${props.fontWeight};
		src: local(${props.family}), local(${props.family}), url(${props.url}) format(${props.format});
		unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
	}
`

export const fonts: Font = {
	light: createFontFace({
		family: IBM_PLEX_SANS_FONT_FAMILY,
		fontWeight: LIGHT_WEIGHT,
		format: 'truetype',
		url: ibmPlexSansLight,
	}),
	regular: createFontFace({
		family: IBM_PLEX_SANS_FONT_FAMILY,
		fontWeight: REGULAR_WEIGHT,
		format: 'truetype',
		url: ibmPlexSansRegular,
	}),
	medium: createFontFace({
		family: IBM_PLEX_SANS_FONT_FAMILY,
		fontWeight: MEDIUM_WEIGHT,
		format: 'truetype',
		url: ibmPlexSansMedium,
	}),
	semibold: createFontFace({
		family: IBM_PLEX_SANS_FONT_FAMILY,
		fontWeight: SEMIBOLD_WEIGHT,
		format: 'truetype',
		url: ibmPlexSansSemibold,
	}),
}
