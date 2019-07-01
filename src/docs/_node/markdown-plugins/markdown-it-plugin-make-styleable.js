/* eslint-env node */

// @ts-check
const markdownItClass = require("@toycode/markdown-it-class");

/**
 * @param  {...string} tags
 * @returns {{ [tag:string] : string }}
 */
const mapTags = (...tags) => {
  /** @type {{ [tag:string] : string }} */
  const result = {};
  tags.forEach(tag => {
    result[tag] = `fdd-md--${tag}`;
  });
  return result;
};

/** @param {import("markdown-it")} md */
const plugin = md => {
  const mapping = mapTags(
    "ul",
    "ol",
    "li",
    "blockquote",
    "code",
    "pre",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
  );
  return markdownItClass(md, mapping);
};

module.exports = plugin;
