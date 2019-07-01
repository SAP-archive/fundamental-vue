// @ts-check

/** @type {import("vue").DirectiveOptions} */
const directive = {
  bind(el, { arg }, vnode) {
    const onClick = event => {
      const { context: vm } = vnode;
      if (vm == null) {
        return;
      }
      const modal = vm.$refs[arg];
      if (modal == null) {
        // eslint-disable-next-line no-undef
        if (process.env.NODE_ENV === "development") {
          throw Error(`[v-modal] Unable to modal ${arg}`);
        }
        return;
      }
      // eslint-disable-next-line no-undef
      if (process.env.NODE_ENV === "development") {
        if (Array.isArray(modal)) {
          throw Error(`[v-modal] Unable to modal ${arg}`);
        } else if ("nodeType" in modal) {
          throw Error(`[v-modal] modal named '${arg} does not seem to be an instance of FdModal.'`);
        }
      }
      // @ts-ignore
      modal.open.call(modal, event);
    };
    el.addEventListener("click", onClick, false);
    const removeListener = () => {
      el.removeEventListener("click", onClick, false);
    };
    el["__fdRemoveModalClickListener__"] = removeListener;
  },
  unbind(el) {
    const removeListener = el["__fdRemoveModalClickListener__"];
    if (removeListener != null) {
      removeListener();
      delete el["__fdRemoveModalClickListener__"];
    }
  }
};

export default directive;
