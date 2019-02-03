export type PropType =
  | FunctionConstructor
  | ObjectConstructor
  | NumberConstructor
  | StringConstructor
  | BooleanConstructor
  | ArrayConstructor
  | DateConstructor
  | (new (...args: any[]) => any & object)
  | (() => any)
  ;

export const stringifyPropType = (type: PropType): string => {
  const name = type.name;
  if(name === '') { return 'Function'; }
  return name;
};

export const stringifyPropTypes = (types: PropType[]): string[] => {
  return types.map(stringifyPropType);
};
