// @ts-check
const single = "single";
const range = "range";
const all = [single, range];
const validator = mode => all.indexOf(mode) >= 0;
const defaultValue = single;

export default {
  all,
  single,
  range,
  validator,
  default: defaultValue,
  prop: {
    mode: {
      type: String,
      validator,
      default: defaultValue
    }
  }
};
