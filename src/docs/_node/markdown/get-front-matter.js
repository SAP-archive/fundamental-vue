// @ts-check
/* eslint-env node */
"use strict";

const grayMatter = require("gray-matter");
const Frontmatter = require("./frontmatter");

/**
 * @param {string} source
 * @returns {Frontmatter}
 */
module.exports = source => {
  const file = grayMatter(source);
  return new Frontmatter(file);
};
