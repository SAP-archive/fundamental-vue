import normalizeValue from './../normalize-value'

describe('normalizeValue', () => {
  it('turns string into array', () => {
    expect(normalizeValue('a')).toEqual(['a'])
  })

  it('turns array into array', () => {
    expect(normalizeValue(['a'])).toEqual(['a'])
  })
})
