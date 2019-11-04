// @ts-check
const { normalize: normalizeHighlightLines } = require('./normalize-highlight-lines-option')
/**
 * @typedef {object} _Options
 * @prop {number[]} highlightLines
 * @prop {boolean} lineNumbers
 */

const createDefaultOptions = () => ({
  highlightLines: [],
  lineNumbers: false
})

/**
 * @param {object} rawOptions
 * @return {_Options}
 */
const normalize = rawOptions => {
  if (rawOptions == null) {
    return createDefaultOptions()
  }
  if (typeof rawOptions !== 'object') {
    return createDefaultOptions()
  }
  return {
    ...createDefaultOptions(),
    highlightLines: normalizeHighlightLines(rawOptions.highlightLines)
  }
}

module.exports = normalize
