const sizeMapping = {
  none: "none",
  tiny: "tiny",
  small: "small",
  medium: "medium",
  large: "large"
};

const Sizes = Object.keys(sizeMapping);
const isSize = value => value === undefined || Sizes.indexOf(value) >= 0;

// Helper
const addClasses = (list, classes) => classes.forEach(cssClass => list.add(cssClass));

// Actual Design System Utils
const designClass = (prefix, size, side) =>
  side == null ? `fd-has-${prefix}-${size}` : `fd-has-${prefix}-${side}-${size}`;
const designClasses = (prefix, size, modifiers = {}) => {
  const { top, left, right, bottom } = modifiers;
  if (top == null && left == null && right == null && bottom == null) {
    return [designClass(prefix, size)];
  }
  const classes = [];
  if (top === true) {
    classes.push(designClass(prefix, size, "top"));
  }
  if (bottom === true) {
    classes.push(designClass(prefix, size, "bottom"));
  }
  if (left === true) {
    classes.push(designClass(prefix, size, "left"));
  }
  if (right === true) {
    classes.push(designClass(prefix, size, "right"));
  }
  return classes;
};
export const paddingClasses = (size, modifiers = {}) => designClasses("padding", size, modifiers);
const marginClasses = (size, modifiers = {}) => designClasses("margin", size, modifiers);

/*
  Usage:
  v-fd-padding:small
  v-fd-padding:small.left.right.bottom
            ^---^ ^---------------^
             arg      modifiers
*/
export const padding = ({ classList }, binding) => {
  const { arg, modifiers } = binding;
  if (!isSize(arg)) {
    return;
  }
  const size = arg;
  addClasses(classList, paddingClasses(size || "none", modifiers));
};

export const margin = ({ classList }, binding) => {
  const { arg, modifiers } = binding;
  if (!isSize(arg)) {
    return;
  }
  const size = arg;
  addClasses(classList, marginClasses(size || "none", modifiers));
};

const isFontWeight = value => ["light", "bold", "normal"].indexOf(value) > -1;
export const fontWeight = ({ classList }, binding) => {
  const { arg } = binding;
  if (!isFontWeight(arg)) {
    return;
  }
  addClasses(classList, [`fd-has-font-weight-${arg}`]);
};

const isFontFamily = value => ["body", "header", "code"].indexOf(value) >= 0;
export const fontFamily = ({ classList }, { arg }) => {
  if (!isFontFamily(arg)) {
    return;
  }
  addClasses(classList, [`fd-has-font-family-${arg}`]);
};

// Valid values for arg are -1, 0, …, 6 (as strings)
// We don't validate this but the only thing we do it to fix "-1" by replacing it with "minus-1".
export const type = ({ classList }, { arg }) => {
  if (arg == null) {
    return "fd-has-type";
  }
  addClasses(classList, [`fd-has-type-${arg === "-1" ? "minus-1" : arg}`]);
};
