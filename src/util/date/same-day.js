// @ts-check
import sameMonth from "./same-month";

/**
 * @param {Date} lhs
 * @param {Date} rhs
 * @returns {Boolean}
 */
export const sameDay = (lhs, rhs) => sameMonth(lhs, rhs) && lhs.getDate() === rhs.getDate();
export default sameDay;
