// @ts-check
/* eslint-env node */
"strict mode";
const highlight = require("./../src/docs/_node/markdown/highlight");
const getFrontmatterFromSource = require("gray-matter");
const SaberMarkdown = require("saber-markdown");
const MarkdownPlugins = require("./../src/docs/_node/markdown-plugins");

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

/** @type {import("saber-markdown")} */
const md = new SaberMarkdown({
  typographer: true,
  preset: "default",
  breaks: false,
  html: true,
  highlight
});
MarkdownPlugins.all.forEach(plugin => md.use(plugin));

const renderMarkdown = markdown => {
  return md.render(markdown);
};

/** @type {Preprocessor} */
const defaultPreprocess = function(source) {
  const frontmatter = getFrontmatterFromSource(source);
  const fdFrontmatter = frontmatter.data;

  const relatedComponents = frontmatter.data.fdRelatedComponents || [];
  const renderRelatedComponents = () => {
    if (relatedComponents.length === 0) {
      return "";
    }
    const rendered = `\n\n<d-related-components-section :component-names="fdFrontmatter.fdRelatedComponents" />\n\n`;
    return rendered;
  };
  let processedSource = "";
  processedSource += frontmatter.content;
  processedSource += renderRelatedComponents();
  return {
    processedSource,
    serializedVueMixin: `{ data() { return { fdFrontmatter: ${JSON.stringify(fdFrontmatter)} }} }`
  };
};

/** @type {import("webpack").loader.Loader} */
module.exports = function(source, map) {
  const source_ = String(source);
  const callback = this.async();
  const preprocess = defaultPreprocess;
  const preprocessResult = preprocess(source_);

  const html = renderMarkdown(preprocessResult.processedSource);
  const mixin = preprocessResult.serializedVueMixin || "{}";
  const mixinVar = `\nconst PreprocessMixin = ${mixin};\n`;

  let component = `<template><div>
  ${html}
  </div></template>
  <script>
  ${mixinVar}
  export default {
    mixins: [PreprocessMixin]
  }
  </script>
  `;
  callback(null, component, map);
  return; // requires per webpack docs
};
