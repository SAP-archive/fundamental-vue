// @ts-check
import createPage from './create-page'
import pageFromKey from './page-from-key'

/** @param {import('./page').Page} page */
const isRootPage = ({ parentDirs }) => parentDirs.length === 1
/** @param {import('./page').Page} page */
const isChildPage = ({ parentDirs }) => parentDirs.length >= 2
/** @param {import('./page').PageCollection} page */
const toPageCollection = page => ({
  ...page,
  pages: []
})
/**
 * @param {string[]=} keys
 * @param {import('./page').PagesLoader=} pagesLoader
 * @return {import('./page').PageCollection[]}
 */
export default (keys, pagesLoader) => {
  if (Array.isArray(keys) === false) {
    return []
  }

  const rawPages = keys.map(key => {
    const loader = () => pagesLoader(key)
    return pageFromKey(key, loader)
  })

  const rootPages = rawPages.filter(isRootPage).map(toPageCollection)

  const childPages = rawPages.filter(isChildPage)
  const pages = rootPages
  childPages.forEach(childPage => {
    const rootPage = rootPages.find(rp => {
      return rp.parentDirs[0] === childPage.parentDirs[0]
    })
    rootPage.pages.push(childPage)
  })
  return pages
}
