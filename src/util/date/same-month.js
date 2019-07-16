// @ts-check
import sameYear from "./same-year";

/**
 * @param {Date} lhs
 * @param {Date} rhs
 * @returns {Boolean}
 */
const sameMonth = (lhs, rhs) => sameYear(lhs, rhs) && lhs.getMonth() === rhs.getMonth();
export default sameMonth;
