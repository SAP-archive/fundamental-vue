import { SelectionHandler } from "./types";

const handler: SelectionHandler = (selection, value) => {
  const newSelection = [...selection];
  const index = selection.indexOf(value);
  if (index > -1) {
    newSelection.splice(index);
  } else {
    newSelection.push(value);
  }
  return newSelection;
};
export default handler;
