export const SelectionMode = {
  single: "single",
  multiple: "multiple",
  none: "none"
};
export const SelectionModes = Object.keys(SelectionMode);
export const SelectionModeValidator = value => SelectionModes.indexOf(value) >= 0;
