import formatDate from "./date-formatter";

export default ({ start, end }) => {
  const formattedStart = formatDate(start);
  const formattedEnd = formatDate(end);
  if (formattedStart == null && formattedEnd == null) {
    return;
  }
  if (formattedEnd == null) {
    return formattedStart;
  }
  if (formattedStart == null) {
    return formattedEnd;
  }
  return `${formattedStart} - ${formattedEnd}`;
};
