import makeSingleSelection from './../single'
import makeMultipleSelection from './../multiple'

describe('Selection Mode', () => {
  describe('Single', () => {
    it('works with empty selection', () => {
      expect(makeSingleSelection([], 'a')).toEqual('a')
      expect(makeSingleSelection(['a'], 'a')).toEqual(null)
    })
    it('deletes existing selection when something new is added', () => {
      expect(makeSingleSelection(['a'], 'b')).toEqual('b')
    })
    it('transforms multiple selection if new value is selected', () => {
      expect(makeSingleSelection(['a', 'b', 'c'], 'd')).toEqual('d')
    })
    it('transforms multiple selection to empty selection', () => {
      expect(makeSingleSelection(['a', 'b', 'c'], 'b')).toEqual(null)
    })
  })
  describe('Multiple', () => {
    it('works with empty selection', () => {
      expect(makeMultipleSelection([], 'a')).toEqual(['a'])
      expect(makeMultipleSelection(['a'], 'a')).toEqual([])
    })
    it('adds to existing selection when something is added', () => {
      expect(makeMultipleSelection(['a'], 'b')).toEqual(['a', 'b'])
    })
    it('removes value from multiple selection if already present', () => {
      expect(makeMultipleSelection(['a', 'b', 'c'], 'c')).toEqual(['a', 'b'])
    })
    // This was a nasty bug:
    // multipleSelection-mode used split(…) without a delete count.
    // Thus all values were removed that came after the toggled
    // value. d'oh.
    it('removes only a single value from multiple selection if already present', () => {
      expect(makeMultipleSelection(['a', 'b', 'c'], 'a')).toEqual(['b', 'c'])
    })
  })
})
