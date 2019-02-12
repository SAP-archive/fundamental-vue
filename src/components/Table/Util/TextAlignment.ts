export enum TextAlignment {
  default = "default",
  center = "center"
}
export const TextAlignments = Object.keys(TextAlignment);
export const isTextAlignment = (value: any) =>
  TextAlignments.indexOf(value) >= 0;
