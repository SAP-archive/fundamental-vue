interface TargetWithValue {
  value: unknown;
}

const hasValue = (arg: any): arg is TargetWithValue => {
  return arg.value != null;
};

export const targetValue = (event: Event): unknown => {
  const { target } = event;
  if (target == null) { return null; }
  if (hasValue(target)) {
    return target.value;
  }
};
