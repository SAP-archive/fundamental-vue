import { PropOptions } from "vue/types/options";

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
export const $false = (): PropOptions<boolean> => ({
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
export const $enum = (...values: string[]): PropOptions<string | null> => {
  return {
    type: String,
    default: null,
    validator(value: string) {
      return values.indexOf(value) >= 0;
    }
  };
};

function _default(value: boolean): PropOptions<boolean>;
function _default(value: string): PropOptions<string>;
function _default(value: number): PropOptions<number>;
function _default(
  value: number | boolean | string
): PropOptions<number | string | boolean> {
  switch (typeof value) {
    case "string":
      return { type: String, default: value };
    case "number":
      return { type: Number, default: value };
    case "boolean":
      return { type: Boolean, default: value };
  }
}
export const $default = _default;

type ValueType = string | number | boolean;
const ValueCtors = [String, Number, Boolean];
export const $valueWithDefault = (
  value: ValueType
): PropOptions<ValueType> => ({
  type: ValueCtors,
  default: value
});
export const $modelValueWithDefault = (
  value: ValueType | ValueType[]
): PropOptions<ValueType | ValueType[]> => ({
  type: [Array, ...ValueCtors],
  default: value
});
