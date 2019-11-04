export default (selection, value, { allowsEmptySelection = true } = {}) => {
  const isSelected = selection.indexOf(value) >= 0
  if (isSelected) {
    return allowsEmptySelection ? null : value
  }
  return value
}
