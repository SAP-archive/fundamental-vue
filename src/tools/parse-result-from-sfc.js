/* eslint-env node */
// @ts-check
const { parser } = require("@vuese/parser");

/**
 * @param {string} str
 * @returns {string}
 */
const kebabCased = str =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

/**
 * Two things happen here:
 *    1. We ensure that there is a kebab-cased name-prop in the result we export.
 *    2. We ensure that there are no duplicate slots.
 * @param {string} code
 * @returns {import("@vuese/parser").ParserResult}
 */
const parseResultFromSfc = code => {
  try {
    const result = parser(code);
    const { name = "" } = result;
    const slots = [];
    for (const slotToAdd of result.slots || []) {
      const index = slots.findIndex(slot => slot.name === slotToAdd.name);
      if (index < 0) {
        slots.push(slotToAdd);
      } else {
        const existingSlot = slots[index];
        if (existingSlot.target === "template") {
          continue;
        }
        slots.splice(index, 1, slotToAdd);
      }
    }
    return {
      ...result,
      slots,
      name: kebabCased(name)
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to parse code: %s", code);
    return {};
  }
};
module.exports = parseResultFromSfc;
