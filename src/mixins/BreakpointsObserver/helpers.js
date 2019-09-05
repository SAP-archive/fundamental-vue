/**
 *
 * @param {Object | Array} value
 */
export function ensureArray(value) {
  return Array.isArray(value) ? value : [value];
}

/**
 * Split each query string into separate query strings if 2+ queries are
 * provided as comma separated
 * @param {String[]} queries
 */
export function splitMediaQueries(queries) {
  return queries
    .map(query => query.split(","))
    .reduce((a1, a2) => a1.concat(a2))
    .map(query => query.trim());
}
