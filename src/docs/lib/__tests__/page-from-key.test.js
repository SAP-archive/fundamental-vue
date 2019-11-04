import pageFromKey from './../page-from-key.js'

describe('pageFromKey', () => {
  it('returns undefined for undefined key', () => {
    expect(pageFromKey()).toBeUndefined()
  })

  it('returns undefined for null key', () => {
    expect(pageFromKey(null)).toBeUndefined()
  })

  it('returns valid page for simple key', () => {
    const key = './button/default.md'
    const page = pageFromKey(key)
    expect(page.key).toEqual(key)
    expect(page.parentDirs).toEqual(['button'])
    expect(page.filename).toEqual('default.md')
  })

  it('works', () => {
    const key = './form/controls/controls.md'
    const page = pageFromKey(key)
    expect(page.parentDirs).toEqual(['form', 'controls'])
    expect(page.key).toEqual(key)
    expect(page.filename).toEqual('controls.md')
  })

  it('returns valid page for complex key', () => {
    const key = './form/controls/default.md'
    const page = pageFromKey(key)
    expect(page.key).toEqual(key)
    expect(page.parentDirs).toEqual(['form', 'controls'])
    expect(page.filename).toEqual('default.md')
  })
})
