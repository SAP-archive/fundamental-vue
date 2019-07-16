import bg from "./background-color";
import icon from "./icon";
import { padding, margin, fontWeight, fontFamily, type } from "./design-system-utilities";
import clickOut from "./click-out";
import modal from "./modal";

export default {
  install(Vue) {
    Vue.directive("fd-bg", bg);
    Vue.directive("fd-background-color", bg);
    Vue.directive("fd-icon", icon);
    Vue.directive("fd-padding", padding);
    Vue.directive("fd-type", type);
    Vue.directive("fd-margin", margin);
    Vue.directive("fd-font-weight", fontWeight);
    Vue.directive("fd-font-family", fontFamily);
    Vue.directive("fd-click-out", clickOut);
    Vue.directive("fd-open-modal", modal);
  }
};
