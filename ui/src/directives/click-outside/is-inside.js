// @ts-check

export const INSIDE_CONTEXT = "fdIsInsideContext";

/**
 * @param {HTMLElement} el
 * @param {string} context
 * @returns boolean
 */
export const elementIsInside = ({ dataset }, context) => {
  return dataset[INSIDE_CONTEXT] === context;
};

/**
 * @param {HTMLElement} el
 * @param {string=} context
 */
export const setElementIsInside = ({ dataset }, context) => {
  if (context == null) {
    delete dataset[INSIDE_CONTEXT];
  } else {
    dataset[INSIDE_CONTEXT] = context;
  }
};

/** @type {import("vue").DirectiveFunction} */
const updateDirective = (el, _, vnode) => {
  const vcontext = vnode.context;
  let context = "";
  if (vcontext != null) {
    // @ts-ignore
    context = vcontext.clickOutsideContext;
    if (context == null) {
      throw Error(
        "is-inside-directive needs a context. Add a context by using the click-outside-mixin or by setting 'clickOutsideContext' of the enclosing component to some unique value."
      );
    }
  }
  setElementIsInside(el, context);
};

/** @type {import("vue").DirectiveOptions} */
const directive = {
  update: updateDirective,
  bind: updateDirective,
  unbind(el) {
    setElementIsInside(el);
  }
};

export default directive;
