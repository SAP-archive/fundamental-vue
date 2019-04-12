// This file contains short hands for creating props.

/*
  { props: {
    flag: { type: Boolean, default: false }
  }
  ---- vs. ----
  { props: {
    flag: $false()
  }
}
*/
export const $false = () => ({
  type: Boolean,
  default: false
});

/*
  { props: {
    size: {
      type: String,
      default: null,
      validator: val => ["x", "l", "s"].indexOf(value) >= 0}
    }
  }
  ---- vs. ----
  { props: {
    size: $enum("x", "l", "s")
  }
*/
export const $enum = (...values) => {
  return {
    type: String,
    default: null,
    validator(value) {
      return values.indexOf(value) >= 0;
    }
  };
};

/**
 *
 * @param {number | boolean | string} value
 */
const _default = value => {
  switch (typeof value) {
    case "string":
      return { type: String, default: value };
    case "number":
      return { type: Number, default: value };
    case "boolean":
      return { type: Boolean, default: value };
  }
};
export const $default = _default;

const ValueCtors = [String, Number, Boolean];
export const $valueWithDefault = value => ({
  type: ValueCtors,
  default: value
});
export const $modelValueWithDefault = value => ({
  type: [Array, ...ValueCtors],
  default: value
});
