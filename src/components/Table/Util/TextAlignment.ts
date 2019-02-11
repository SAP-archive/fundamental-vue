export enum TextAlignment {
  default = "default",
  center = "center"
}
export const TextAlignments = Object.values(TextAlignment);
export const isTextAlignment = (value: any) =>
  TextAlignments.indexOf(value) >= 0;
