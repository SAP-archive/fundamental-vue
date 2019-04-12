// poor mans Object.values because of IE.
export default object => {
  const result = [];
  for (const key in object) {
    result.push(object[key]);
  }
  return result;
};
