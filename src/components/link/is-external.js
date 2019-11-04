// @ts-check
const EXTERNAL_URL_RE = /^https?:\/\//

/** @param {string} urlOrPath */
export default urlOrPath => EXTERNAL_URL_RE.test(urlOrPath)
