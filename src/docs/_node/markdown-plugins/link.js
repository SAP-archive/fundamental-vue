// @ts-check
// const { stringify } = require('@minipress/utils')
const stringify = JSON.stringify
const pathForRelativeFile = ({ href }) => href

// markdown-it plugin for:
// 1. adding target="_blank" to external links
// 2. converting internal links to <router-link>

const renderOutboundLink = () => ''
const options = {
  externalAttrs: {
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}
module.exports = md => {
  const { externalAttrs } = options

  function toRouterLink(token, link) {
    link[0] = ':to'
    const to = pathForRelativeFile({ href: link[1] })
    link[1] = to
    return Object.create(token, {
      tag: { value: 'FdLink' }
    })
  }

  function toFdLink(token, link) {
    link[0] = 'href'
    const to = pathForRelativeFile({ href: link[1] })
    link[1] = to
    return Object.create(token, {
      tag: { value: 'FdLink' }
    })
  }
  let hasOpenRouterLink = false
  let hasOpenExternalLink = false

  // eslint-disable-next-line camelcase
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    // const { page = {} } = env
    // const { file = {} } = page
    // const relativePath = file.relative || '/'
    const token = tokens[idx]
    const hrefIndex = token.attrIndex('href')
    if (hrefIndex >= 0) {
      const link = token.attrs[hrefIndex]
      const href = link[1]
      const isExternal = /^https?:/.test(href)
      const isSourceLink = /(\/|\.md|\.html|\.vue)(#.*)?$/.test(href)
      if (isExternal) {
        tokens[idx] = toFdLink(token, link)
      } else {
        hasOpenRouterLink = true
        tokens[idx] = toRouterLink(token, link)
      }
    }
    return self.renderToken(tokens, idx, options)
  }

  // eslint-disable-next-line camelcase
  md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    token.tag = 'FdLink'
    return self.renderToken(tokens, idx, options)
  }
}
