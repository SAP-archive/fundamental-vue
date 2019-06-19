/**
 * Default Parser
 * @param {string=} dateString
 * @returns {Date=}
 */
export default dateString => {
  if (dateString == null) {
    return;
  }
  return new Date(dateString);
};
