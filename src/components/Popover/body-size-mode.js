export const AUTO = "auto";
export const EQUALS_TRIGGER = "equal-trigger";
export const AT_LEAST_TRIGGER = "at-least-trigger";

export const all = [
  AUTO, // default
  EQUALS_TRIGGER,
  AT_LEAST_TRIGGER
];

export const isValid = value => all.indexOf(value) >= 0;
export const defaultMode = AUTO;
