export const withoutDuplicates = (ids: string[]): string[] => {
  const result: string[] = [];
  ids.forEach(id => {
    if(result.indexOf(id) >= 0) { return; }
    result.push(id);
  });
  return result;
};
