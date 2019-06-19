// @ts-check
/**
 * @param {Date} lhs
 * @param {Date} rhs
 * @returns {Date}
 */
const earlierDate = (lhs, rhs) => (lhs.getTime() < rhs.getTime() ? lhs : rhs);
export default earlierDate;
