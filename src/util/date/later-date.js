// @ts-check
/**
 * @param {Date} lhs
 * @param {Date} rhs
 * @returns {Date}
 */
const laterDate = (lhs, rhs) => (lhs.getTime() < rhs.getTime() ? rhs : lhs);
export default laterDate;
