import DDefaultLayout from "./d-default-layout.vue";
import DFullscreenLayout from "./d-fullscreen-layout.vue";

const install = vue => {
  vue.component("d-default-layout", DDefaultLayout);
  vue.component("default-layout", DDefaultLayout);
  vue.component("d-fullscreen-layout", DFullscreenLayout);
  vue.component("fullscreen-layout", DFullscreenLayout);
};

export default { install };
