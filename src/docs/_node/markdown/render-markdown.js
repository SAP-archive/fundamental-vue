// @ts-check
/* eslint-env node */
"strict mode";

const SaberMarkdown = require("saber-markdown");
const getFrontMatter = require("./get-front-matter");
const highlight = require("./highlight");
const MarkdownPlugins = require("./../markdown-plugins");

/**
 * @typedef {import("./frontmatter")} Frontmatter
 *
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

/**
 * @param {string} source
 * @returns {{html: string, frontmatter: Frontmatter}}
 */
const renderMarkdown = source => {
  const frontmatter = getFrontMatter(source);
  const html = md.render(frontmatter.markdownContent);
  return { html, frontmatter };
};
module.exports = renderMarkdown;
