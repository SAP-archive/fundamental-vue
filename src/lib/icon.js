// @ts-check

export const iconClass = icon => `sap-icon--${icon}`;
/**
 * @param {string | null} icon
 * @param {("s" | "m" | "l" | "xl")=} size
 */
export const iconClasses = (icon, size) => {
  if (icon == null) {
    return [];
  }
  const classes = [`sap-icon--${icon}`];
  if (size != null) {
    classes.push(`sap-icon--${size}`);
  }
  return classes;
};
