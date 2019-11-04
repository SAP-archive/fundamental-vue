// @ts-check
import createPage from './create-page'
import deslugify from './../util/deslugify'
import slugify from './../util/slugify'

/**
 * @param {string} key
 * @param {import('./page').PageLoader} loader
 * @return {import('./page').Page}
 */
export default (key, loader) => {
  if (key == null) {
    return
  }
  // a key looks like:
  // './button/hello-world.md'
  //          ~~ or ~~
  // './forms/controls/input.md'
  const cleanKey = key.replace('./', '')
  const [c1, c2, c3] = cleanKey.split('/')
  const filename = c3 != null ? c3 : c2
  const parentDirs = c3 != null ? [c1, c2] : [c1]
  return createPage({
    key,
    parentDirs,
    filename,
    async component() {
      return loader()
    }
  })
}
