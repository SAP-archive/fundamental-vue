// @ts-check
const validValues = new Set(['valid', 'warning', 'information', 'error'])
export const validateRowHighlight = value => value == null || validValues.has(value)
export const classNameFromRowHighlight = value => (value == null ? '' : `fd-table__row--${value}`)
