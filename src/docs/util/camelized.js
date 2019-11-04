/**
 * @param {string} text
 */
export default text =>
  text
    .split('-')
    .map(w => w.replace(/./, m => m.toUpperCase()))
    .join('')
