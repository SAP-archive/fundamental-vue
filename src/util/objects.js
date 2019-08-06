/**
 *
 * @param {Object} obj the object that we want to query
 * @param {string} path the path of the property that we want to extract
 * @param {Object} fallback the default value to be returned in case of error
 */
export function getPropertyByPath(obj, path, fallback) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== "string") return fallback;
  if (obj[path] !== undefined) return obj[path];
  // convert indexes to properties
  path = path.replace(/\[(\w+)\]/g, ".$1");
  // strip a leading dot
  path = path.replace(/^\./, "");
  return getNestedValue(obj, path.split("."), fallback);
}

function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;

  if (last < 0) return obj === undefined ? fallback : obj;

  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }
    obj = obj[path[i]];
  }

  if (obj == null) return fallback;

  return obj[path[last]] === undefined ? fallback : obj[path[last]];
}
