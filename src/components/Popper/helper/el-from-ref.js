const isVueComponent = component => component != null && component._isVue;

export default ref => {
  if (ref == null) {
    if (process.env.NODE_ENV === "development") {
      throw Error("[FdPopper] cannot get element from null-ref.");
    }
    return;
  }

  if (isVueComponent(ref)) {
    const el = ref.$el;
    if (process.env.NODE_ENV === "development") {
      if (el == null) {
        throw Error(`[FdPopper] ref "${ref}" is not a Vue component…`);
      }
    }
    return el;
  }
  return ref;
};
