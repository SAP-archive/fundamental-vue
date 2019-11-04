// @ts-check
/* eslint-env node */
'strict mode'
// const SaberMarkdown = require('saber-markdown')
// const MarkdownPlugins = require('./../src/docs/_node/markdown-plugins')
// const devalue = require('devalue')
const loaderUtils = require('loader-utils')

const renderMarkdown = require('./../src/docs/_node/markdown/render-markdown')
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

// // /** @type {import("saber-markdown")} */
// const md = new SaberMarkdown({
//   breaks: false,
//   html: true,
//   preset: 'default',
//   typographer: true
// })
// MarkdownPlugins.all.forEach(plugin => md.use(plugin))

// const renderMarkdown = markdown => {
//   return md.render(markdown)
// }

/** @type {import("webpack").loader.Loader} */
module.exports = function(source, map) {
  const callback = this.async()
  if (callback == null) {
    throw Error('async() returned null which is not what was expected')
  }

  const next = () => {
    // const src = `<template><div>noop</div></template>`;
    callback(/* error */ null, source, map)
  }

  const { resourceQuery } = this

  if (resourceQuery == null || resourceQuery === '') {
    next()
    return
  }

  const { asSrc } = loaderUtils.parseQuery(resourceQuery)
  if (asSrc == null) {
    next()
    return
  }

  const markdown = '```markup\n' + source + '\n```'
  const { html } = renderMarkdown(markdown)
  const component = `<template>
  <div>${html}</div>
  </template>`
  callback(null, component, map)
  return // requires per webpack docs

  // // const html = renderMarkdown(md)
  // // @ts-ignore
  // const serializedFrontmatter = devalue(attributes)
  // let component = `<template><div>
  // ${html}
  // </div></template>
  // <script>
  // export default {
  //   beforeCreate() {
  //     this.$frontmatter = ${serializedFrontmatter}
  //   }
  // }
  // </script>
  // `
  // callback(null, component, map)
  // return // requires per webpack docs
}
