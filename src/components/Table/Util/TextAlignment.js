export const TextAlignment = {
  default: "default",
  center: "center"
};
export const TextAlignments = Object.keys(TextAlignment);
export const isTextAlignment = value => TextAlignments.indexOf(value) >= 0;
