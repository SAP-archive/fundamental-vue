import parseDate from "./date-parser";

/**
 * @typedef {object} DateRange
 * @prop {Date=} from
 * @prop {Date=} to
 *
 * Default Range Parser
 * @param {string=} rangeString
 * @returns {DateRange=}
 */
export default rangeString => {
  if (rangeString == null) {
    return { from: null, to: null };
  }
  if (rangeString === "") {
    return { from: null, to: null };
  }

  const rangeDelimiter = " - ";
  const [rawStart, rawEnd] = rangeString.split(rangeDelimiter);
  const from = parseDate(rawStart);
  const to = parseDate(rawEnd);
  return { from, to };
};
