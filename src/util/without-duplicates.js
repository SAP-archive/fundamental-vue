export default values => {
  const result = [];
  values.forEach(value => {
    if (result.indexOf(value) >= 0) {
      return;
    }
    result.push(value);
  });
  return result;
};
