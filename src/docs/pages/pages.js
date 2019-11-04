// @ts-check
import pagesFromKeys from './../lib/pages-from-keys'

// eslint-disable-next-line no-undef
const markdownContext = require
  // @ts-ignore
  .context('./', true, /\.md$/, 'lazy')
export const getExamplePages = () => {
  const loader = key => markdownContext(key)
  return pagesFromKeys(markdownContext.keys(), loader)
}

export const pageKeys = markdownContext.keys()
