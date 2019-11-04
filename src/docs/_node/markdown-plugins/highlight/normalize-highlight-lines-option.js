// @ts-check
/**
 *
 * @param {any=} raw - can be a single line number (1) or a range ('1-4')
 * @return {number[]} - returns an array of line numbers
 */
const normalizeEntry = raw => {
  if (raw == null) {
    return []
  }
  if (typeof raw === 'number') {
    return [raw]
  }
  if (typeof raw !== 'string') {
    return []
  }

  const [from, to] = raw.split('-').map(component => parseInt(component.trim(), 10))
  const _from = Math.min(from, to)
  const _to = Math.max(from, to)
  const length = Math.abs(_to - _from) + 1
  return Array.from({ length }).map((_, index) => index + _from)
}

/**
 * @param {any=} rawLines
 */
const normalize = rawLines => {
  if (rawLines == null) {
    return []
  }

  if (Array.isArray(rawLines)) {
    return rawLines.map(normalizeEntry).flat()
  }
  return []
}

module.exports = { normalizeEntry, normalize }
