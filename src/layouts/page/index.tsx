import { PageLayoutContent } from './content'
import { PageLayoutHeader, PageLayoutHeaderTitle, PageLayoutRightElementGroup } from './header'
import { PageLayoutRoot } from './root'
import { PageLayoutSections } from './tabs'

export const PageLayout = {
	Root: PageLayoutRoot,
	Sections: PageLayoutSections,
	Content: PageLayoutContent,
	Header: {
		Root: PageLayoutHeader,
		Title: PageLayoutHeaderTitle,
		RightElementGroup: PageLayoutRightElementGroup,
	},
}
