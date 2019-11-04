/* eslint-env node */

// @ts-check

const MarkdownItComponentLinkPluin = require('./component-api-link')
const MarkdownItPluginTip = require('./tip')
const MarkdownItPluginMakeStyleable = require('./make-styleable')
const MarkdownItPluginHighlight = require('./highlight')
const MarkdownItPluginLink = require('./link')

module.exports = {
  all: [
    MarkdownItComponentLinkPluin,
    MarkdownItPluginTip,
    MarkdownItPluginMakeStyleable,
    MarkdownItPluginHighlight,
    MarkdownItPluginLink
  ]
}
