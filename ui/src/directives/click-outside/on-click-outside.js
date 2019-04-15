// Usage example of the `on-click-outside`-directive:
//
// <div>
//   <popover>
//     <input v-is-inside />
//     <menu v-on-click-outside="dismiss" />
//   </popover>
// </div>
//
import { elementIsInside } from "./is-inside";

const CLICK_OUTSIDE_HANDLER = "__vueClickOutsideHandler__";
const CLICK_OUTSIDE_REMOVE_LISTENER = "__vueClickOutsideRemoveListener__";

const pathToRootFrom = el => {
  const result = [el];
  let parent = el.parentElement;
  while (parent != null) {
    result.push(parent);
    parent = parent.parentElement;
  }
  return result;
};

const startListeningForClicks = (el, clickHandler) => {
  document.addEventListener("click", clickHandler, false);
  el[CLICK_OUTSIDE_HANDLER] = clickHandler;
  const removeListener = () => {
    document.removeEventListener("click", clickHandler, false);
    delete el[CLICK_OUTSIDE_REMOVE_LISTENER];
  };
  el[CLICK_OUTSIDE_REMOVE_LISTENER] = removeListener;
};

const updateDirective = (
  $el,
  { value: clickOutsideAction, oldValue: oldClickOutsideAction },
  vnode
) => {
  const documentHandler = event => {
    // Check if the event targets self
    if ($el.contains(event.target)) {
      return false;
    }
    // Check if the event targets an element that is considered to be part of the "inside"
    const path = pathToRootFrom(event.target);
    const ignoreEvent = path.findIndex(element => {
      return elementIsInside(element, vnode.context.clickOutsideContext);
    });
    if (ignoreEvent > -1) {
      return false;
    }
    const vm = vnode.context;
    const method = clickOutsideAction;
    method(event);
  };

  if (oldClickOutsideAction === clickOutsideAction) {
    return;
  }

  if (oldClickOutsideAction != null) {
    const removeListener = $el[CLICK_OUTSIDE_REMOVE_LISTENER];
    if (removeListener != null) {
      removeListener();
    }
  }
  if (clickOutsideAction && clickOutsideAction !== oldClickOutsideAction) {
    setTimeout(() => startListeningForClicks($el, documentHandler));
    return;
  }
};

const directive = {
  inserted: updateDirective,
  componentUpdated: updateDirective,
  unbind(el) {
    // We have to do two things:
    // 1. Remove the event listener if still present
    // 2. Remove the custom properties from the element.
    const removeListener = el[CLICK_OUTSIDE_REMOVE_LISTENER];
    if (removeListener != null) {
      removeListener();
    }
    delete el[CLICK_OUTSIDE_HANDLER];
    delete el[CLICK_OUTSIDE_REMOVE_LISTENER];
  }
};

export default directive;
