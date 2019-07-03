import { isString } from "../../../util/is";

export default (key, order) => {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // Property [key] does not exist on a and/or b.
      return 0;
    }
    const varA = a[key];
    const varB = b[key];
    let comparison = 0;
    if (isString(varA) && isString(varB)) {
      comparison = varA.localeCompare(varB);
    } else {
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
    }
    return order === "descending" ? comparison * -1 : comparison;
  };
};
