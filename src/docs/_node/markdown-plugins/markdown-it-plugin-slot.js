/* eslint-env node */
// @ts-check
const MarkdownItContainer = require("markdown-it-container");

/**
 * @typedef {import("markdown-it")} MarkdownIt
 * @typedef {import("markdown-it/lib/token")} Token
 * @typedef {object} Options
 * @prop {string} slot
 */

/**
 * @param {MarkdownIt} md
 * @param {Token[]} tokens
 * @param {number} index
 * @returns {string}
 */
const renderSlot = (md, tokens, index) => {
  const match = tokens[index].info.trim().match(/^slot\s+(.*)$/);
  if (tokens[index].nesting === 1) {
    return `<d-md-slot name="${md.utils.escapeHtml(match[1])}">\n`;
  } else {
    return "</d-md-slot>\n";
  }
};

/** @param {MarkdownIt} md */
const plugin = md => {
  return MarkdownItContainer(md, "slot", {
    validate(params) {
      return params.trim().match(/^slot\s+(.*)$/) != null;
    },
    render: (tokens, index) => renderSlot(md, tokens, index)
  });
};

module.exports = plugin;
