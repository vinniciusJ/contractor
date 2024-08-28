import { PageLayoutContent } from './content'
import { PageLayoutHeader, PageLayoutHeaderTitle, PageLayoutRightElementGroup } from './header'
import { PageLayoutRoot } from './root'
import { PageLayoutSections } from './sections'

export const PageLayout = {
	Root: PageLayoutRoot,
	Tabs: PageLayoutSections,
	Content: PageLayoutContent,
	Header: {
		Root: PageLayoutHeader,
		Title: PageLayoutHeaderTitle,
		RightElementGroup: PageLayoutRightElementGroup,
	},
}
