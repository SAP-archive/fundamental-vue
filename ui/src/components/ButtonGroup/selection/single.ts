import { SelectionHandler } from "./types";

const handler: SelectionHandler = (selection, value) => {
  const isSelected = selection.indexOf(value) >= 0;
  return isSelected ? [] : [value];
};
export default handler;
