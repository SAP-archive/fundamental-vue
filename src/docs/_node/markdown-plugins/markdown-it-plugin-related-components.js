/* eslint-env node */
// @ts-check
const MarkdownItContainer = require("markdown-it-container");

/**
 * @typedef {import("markdown-it")} MarkdownIt
 * @typedef {import("markdown-it/lib/token")} Token
 */

/**
 * @param {Token[]} tokens
 * @param {number} index
 * @returns {string}
 */
const renderTip = (tokens, index) => {
  if (tokens[index].nesting === 1) {
    return `<div class="fdd-tip"><div class="fdd-tip__body">`;
  } else {
    return "</div></div>";
  }
};

/** @param {MarkdownIt} md */
const plugin = md => {
  return MarkdownItContainer(md, "tip", {
    render: renderTip
  });
};

module.exports = plugin;
