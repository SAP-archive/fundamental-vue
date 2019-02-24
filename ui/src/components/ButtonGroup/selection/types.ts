type Value = number | string | boolean;
export type SelectionHandler = (
  selection: Value[],
  valueOfInteraction: Value
) => Value[];
