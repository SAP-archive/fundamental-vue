export default <T>(values: T[]): T[] => {
  const result: T[] = [];
  values.forEach(value => {
    if (result.indexOf(value) >= 0) {
      return;
    }
    result.push(value);
  });
  return result;
};
