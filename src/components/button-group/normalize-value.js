// @ts-check
/**
 * @typedef {string | number | boolean} Value
 * @param {Value[] | Value} value
 * @returns {Value[]}
 */
export default value => {
  if (Array.isArray(value)) {
    return [...value]
  }
  return [value]
}
