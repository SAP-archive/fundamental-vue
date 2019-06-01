// A little helper that converts a NodeList into a real array.
// We are not using Array.from(…) in order to work in IE without Polyfills.

/**
 * @param {NodeList} nodeList
 * @returns {Node[]}
 */
const arrayFromNodeList = nodeList => Array.prototype.slice.call(nodeList);
export default arrayFromNodeList;
