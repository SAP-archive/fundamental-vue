// @ts-check

import pagesFromKeys from './../pages-from-keys.js'

describe('pagesFromKeys', () => {
  it('returns [] for undefined keys', () => {
    expect(pagesFromKeys()).toEqual([])
  })
  it('returns [] for null keys', () => {
    expect(pagesFromKeys(null)).toEqual([])
  })
  it('returns valid page for simple key', () => {
    const key = './button/default.md'
    const pages = pagesFromKeys(['./button/default.md'])
    expect(pages).toHaveLength(1)
    const [page] = pages
    expect(page.key).toEqual(key)
    expect(page.pages).toEqual([])
    expect(page.filename).toEqual('default.md')
  })

  it('returns valid page for complex key', () => {
    const pages = pagesFromKeys(['./form/form.md', './form/controls/controls.md'])
    expect(pages).toHaveLength(1)
    const [page] = pages
    expect(page.key).toEqual('./form/form.md')
    const formPages = page.pages
    expect(formPages).toHaveLength(1)
    const controlPage = formPages[0]
  })

  it('works with production data', () => {
    const keys = [
      './basic/basic.md',
      './basic/button/button.md',
      './basic/icon/compact.md',
      './form/form.md',
      './form/controls/default.md',
      './form/sets/sets.md'
    ]
    const pages = pagesFromKeys(keys)
    expect(pages).toHaveLength(2)
    const [basic, form] = pages
    expect(basic.pages).toHaveLength(2)
    const [button, icon] = basic.pages
    expect(button.filename).toEqual('button.md')
    expect(icon.filename).toEqual('compact.md')
    expect(form.pages).toHaveLength(2)
    const [controls, sets] = form.pages
  })

  it('finds child pages', () => {
    const key = './form/form.md'
    const key1 = './form/controls/controls.md'
    const key2 = './form/layouts/layouts.md'
    const pages = pagesFromKeys([key, key1, key2])
    expect(pages).toHaveLength(1)
    const [page] = pages
    const childPages = page.pages
    expect(page.key).toEqual(key)
    expect(childPages).toHaveLength(2)
    const [page1, page2] = childPages

    expect(page1.key).toEqual(key1)

    expect(page2.key).toEqual(key2)
  })
})
