export enum SelectionMode {
  single = 'single',
  multiple = 'multiple',
  none = 'none',
}
export const SelectionModes = Object.keys(SelectionMode);
export const SelectionModeValidator = (value: any) => SelectionModes.indexOf(value) >= 0;
