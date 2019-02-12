// poor mans Object.values because of IE.
export default <T>(object: { [s: string]: T } |  ArrayLike<T>): T[] => {
  const result: T[] = [];
  for(const key in object) {
    // Ignore 'has no index signature'
    // @ts-ignore TS7017
    const value = object[key];
    result.push(value);
  }
  return result;
};
