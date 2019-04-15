import { hasBackgroundColor } from "./has-background-color";
import { icon } from "./icon";
import {
  padding,
  margin,
  fontWeight,
  fontFamily
} from "./design-system-utilities";
import {
  isInside,
  onClickOutside,
  detectsOutsideInteraction
} from "./click-outside";

export * from "./has-background-color";
export * from "./icon";
export * from "./design-system-utilities";
export * from "./click-outside";

export default {
  install(Vue) {
    Vue.directive("bg", hasBackgroundColor);
    Vue.directive("hasBackgroundColor", hasBackgroundColor);
    Vue.directive("icon", icon);
    Vue.directive("padding", padding);
    Vue.directive("margin", margin);
    Vue.directive("font-weight", fontWeight);
    Vue.directive("font-family", fontFamily);
    Vue.directive("on-click-outside", onClickOutside);
    Vue.directive("detects-outside-interaction", detectsOutsideInteraction);
    Vue.directive("is-inside", isInside);
  }
};
