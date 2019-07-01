/* eslint-env node */

// @ts-check

/** @param {string} text */
const capitalized = text => {
  if (text.length === 0) {
    return text;
  }
  const firstLetter = text.charAt(0);
  return `${firstLetter.toUpperCase()}${text.substring(1)}`;
};

/** @param {string} text */
const deslugify = text => {
  const parts = text.split("-");
  return parts.map(capitalized).join(" ");
};

module.exports = deslugify;
