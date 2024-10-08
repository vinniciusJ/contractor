import { PageLayoutContent } from './content'
import {
	PageLayoutGoBackButton,
	PageLayoutHeader,
	PageLayoutHeaderTitle,
	PageLayoutHeaderTitleRoot,
	PageLayoutRightElementGroup,
} from './header'
import { PageLayoutRoot } from './root'
import { PageLayoutSections } from './sections'

export const PageLayout = {
	Root: PageLayoutRoot,
	Sections: PageLayoutSections,
	Content: PageLayoutContent,
	Header: {
		Root: PageLayoutHeader,
		Title: {
			Root: PageLayoutHeaderTitleRoot,
			GoBackButton: PageLayoutGoBackButton,
			Text: PageLayoutHeaderTitle,
		},
		RightElementGroup: PageLayoutRightElementGroup,
	},
}
