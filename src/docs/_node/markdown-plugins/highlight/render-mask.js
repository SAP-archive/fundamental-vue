// @ts-check

/**
 * @typedef {object} Options
 * @prop {number[]} highlightLines
 * @prop {string=} langClass
 * @prop {string} escapedContent
 */

/**
 * @param {Options} options
 */
const render = ({ highlightLines, langClass, escapedContent }) => {
  const lines = escapedContent.split('\n')

  return highlightLines.length === 0
    ? ''
    : `<div class="minipress-highlight-mask${langClass ? ` ${langClass}` : ''}">${lines
        .map((split, index) => {
          split = split || '&#8203;'
          const lineNumber = index + 1
          const isHighlighted = highlightLines.includes(lineNumber)
          return `<div class="code-line${isHighlighted ? ' highlighted' : ''}">${split}</div>`
        })
        .join('')}</div>`
}

module.exports = render
