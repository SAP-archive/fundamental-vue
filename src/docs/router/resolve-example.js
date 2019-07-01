// @ts-check

/**
 * @typedef {object} Options
 * @prop {string} collection
 * @prop {string} example
 */
/**
 * @param {Options} options
 * @returns {import("vue-router").Location}
 */
export const resolveExample = ({ collection, example }) => {
  return {
    name: "example",
    params: {
      collection,
      example
    }
  };
};
