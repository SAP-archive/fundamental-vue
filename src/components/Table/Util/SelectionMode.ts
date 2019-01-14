export enum SelectionMode {
  single = 'single',
  multiple = 'multiple',
  none = 'none',
}
export const SelectionModes = Object.keys(SelectionMode);
export const SelectionModeValidator = SelectionModes.includes;
