// @ts-check
/* eslint-env node */
'strict mode'
const renderMarkdown = require('./../src/docs/_node/markdown/render-markdown')
const devalue = require('devalue')

/**
 * @typedef {object} PreprocessResult
 * @prop {string} processedSource
 * @prop {string=} serializedVueMixin
 *
 * @typedef {(source: string) => PreprocessResult} Preprocessor
 * @typedef {(source: string) => string} MarkdownRenderer
 *
 * @typedef {object} Options
 * @prop {Preprocessor} preprocess
 * @prop {MarkdownRenderer} renderMarkdown
 */

/** @type {import("webpack").loader.Loader} */
module.exports = function(source, map) {
  const source_ = String(source)
  const callback = this.async()
  const { frontmatter, html } = renderMarkdown(source_)
  // @ts-ignore
  const serializedFrontmatter = devalue(frontmatter.attributes)

  let component = `<template><div>
  ${html}
  </div></template>
  <script>
  export default {
    $frontmatter: ${serializedFrontmatter},
    beforeCreate() {
      this.$frontmatter = ${serializedFrontmatter}
    }
  }
  </script>
  `
  callback(null, component, map)
  return // requires per webpack docs
}
