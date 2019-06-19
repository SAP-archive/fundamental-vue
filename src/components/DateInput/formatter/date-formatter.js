export default date => {
  if (date == null) {
    return;
  }
  if (date === "") {
    return;
  }
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};
