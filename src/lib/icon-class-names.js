// @ts-check
import iconClassName from './icon-class-name'

/**
 * @param {string | null} icon
 * @param {("s" | "m" | "l" | "xl")=} size
 */
export default (icon, size) => {
  if (icon == null) {
    return []
  }
  return [iconClassName(icon), ...(size == null ? [] : [`sap-icon--${size}`])]
}
