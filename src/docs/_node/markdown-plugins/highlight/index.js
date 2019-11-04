// @ts-check

const RE = /\s*{([^}]+)}/

const parseOptions = require('./parse-options')
const normalizeOptions = require('./normalize-options')
const renderMask = require('./render-mask')
const highlightFn = require('./highlight')
const generateLineNumbers = code =>
  `<span aria-hidden="true" class="minipress-highlight-line-numbers">${code
    .trim()
    .split('\n')
    .map(() => '<span></span>')
    .join('')}</span>`

module.exports = (md, { lineNumbers = false } = {}) => {
  md.options.highlight = highlightFn

  const renderPreWrapper = ({
    preWrapperAttrs,
    preAttrs,
    codeAttrs,
    code,
    codeMask = '',
    lines = ''
  }) =>
    `<div${preWrapperAttrs}>${codeMask}<pre${preAttrs}><code${codeAttrs}>${lines}${code.trim()}</code></pre></div>`

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, options, env, self] = args
    const token = tokens[idx]

    const parsedOptions = parseOptions(token.info)
    if (parsedOptions instanceof Error) {
      throw parsedOptions
    }

    const fenceOptions = normalizeOptions(parsedOptions)

    const langName = token.info.replace(RE, '').trim()
    const langClass = `language-${langName || 'text'}`
    token.info = langName

    const code = options.highlight
      ? options.highlight(token.content, langName, env)
      : md.utils.escapeHtml(token.content)

    const highlightLines = fenceOptions.highlightLines
    const codeMask = renderMask({
      highlightLines,
      escapedContent: md.utils.escapeHtml(token.content),
      langClass
    })

    const renderAttrs = attrs => self.renderAttrs({ attrs })
    const shouldGenerateLineNumbers =
      // It might be false so check for undefined
      fenceOptions.lineNumbers === undefined
        ? // Defaults to global config
          lineNumbers
        : // If it's set to false, even if the global config says true, ignore
          fenceOptions.lineNumbers
    const lines = shouldGenerateLineNumbers ? generateLineNumbers(code) : ''

    const preAttrs = renderAttrs([
      ...(token.attrs || []),
      ['class', ['minipress-highlight-code', langClass].filter(Boolean).join(' ')]
    ])
    const codeAttrs = renderAttrs([...(token.attrs || []), ['class', langClass]])
    const preWrapperAttrs = renderAttrs([
      ['class', `minipress-highlight${shouldGenerateLineNumbers ? ' has-line-numbers' : ''}`],
      ['v-pre', ''],
      ['data-lang', langName]
    ])

    return renderPreWrapper({
      preWrapperAttrs,
      preAttrs,
      codeAttrs,
      code,
      codeMask,
      lines
    })
  }
}
