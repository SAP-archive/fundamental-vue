import { SortOrder } from './SortOrder';
import { isString } from '@/util/is';

type Value = { [prop: string]: any };
export const compareValues = (key: string, order: SortOrder) => {
  return (a: Value, b: Value): number => {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // Property [key] does not exist on a and/or b.
      return 0;
    }
    const varA = a[key];
    const varB = b[key];
    let comparison: number = 0;
    if (isString(varA) && isString(varB)) {
      comparison = varA.localeCompare(varB);
    } else {
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
    }
    return (order === 'descending') ? (comparison * -1) : comparison;
  };
};
