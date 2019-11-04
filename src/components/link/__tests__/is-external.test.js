import isExternal from './../is-external'

describe('isExternal', () => {
  it('works on external urls', () => {
    expect(isExternal('https://example.org')).toBeTruthy()
  })
})
