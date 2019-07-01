/* eslint-env node */

const kebabCased = str =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

module.exports = kebabCased;
