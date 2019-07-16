export const backgroundColorClassName = color =>
  color == null ? "" : `fd-has-background-color-${color}`;
export const backgroundColorClasses = color => (color ? [backgroundColorClassName(color)] : []);
