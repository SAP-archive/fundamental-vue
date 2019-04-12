export default (selection, value) => {
  const isSelected = selection.indexOf(value) >= 0;
  return isSelected ? [] : [value];
};
