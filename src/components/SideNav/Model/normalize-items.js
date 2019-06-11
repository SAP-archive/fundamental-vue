// @ts-check
import { shortUuid } from "./../../../lib";

const $_FDID = "$_fdId";
const $_FDCHILDREN = "$_fdChildren";

/**
 * @typedef {object} NormalizedItem
 * @prop {string} $_fdId;
 * @prop {NormalizedItem[]} $_fdChildren;
 */

/**
 * @param {NormalizedItem} item
 * @returns {string}
 */
export const normalizedId = item => item[$_FDID];
/**
 * @param {NormalizedItem} item
 * @returns {NormalizedItem[]}
 */
export const normalizedChildren = item => item[$_FDCHILDREN];

/**
 * @param {any} raw
 * @returns {NormalizedItem}
 */
export function normalizeItem(raw) {
  if (raw == null) {
    return normalizeItem({});
  }
  const id = raw.id || shortUuid();
  const children = normalizeItems(raw.children || []);
  return {
    ...raw,
    id,
    children,
    [$_FDID]: id,
    [$_FDCHILDREN]: children
  };
}

function normalizeItems(items) {
  return items.map(normalizeItem);
}

export default normalizeItems;
