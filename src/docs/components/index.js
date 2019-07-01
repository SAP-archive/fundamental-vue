import DTip from "./d-tip.vue";
import DCodeView from "./d-code-view.vue";
import DExample from "./d-example/d-example.vue";
import DRelatedComponents from "./d-related-components.vue";
import DRelatedComponentsSection from "./d-related-components-section.vue";
import DMarkdown from "./d-markdown.vue";
import DExampleFullscreen from "./d-example-fullscreen.vue";
import ExpandTransition from "./ExpandTransition.vue";
import ComponentApiLink from "./d-component-api-link.vue";
import ComponentApiLinkTarget from "./d-component-api-link-target.vue";
import DComponentPicker from "./d-component-picker.vue";
import DMdSlot from "./d-md-slot.vue";

const install = vue => {
  vue.component("d-tip", DTip);
  vue.component("d-component-picker", DComponentPicker);
  vue.component("d-example", DExample);
  vue.component("d-component-api-link", ComponentApiLink);
  vue.component("d-component-api-link-target", ComponentApiLinkTarget);
  vue.component("d-related-components", DRelatedComponents);
  vue.component("d-related-components-section", DRelatedComponentsSection);
  vue.component("d-example-fullscreen", DExampleFullscreen);
  vue.component("d-markdown", DMarkdown);
  vue.component("d-code-view", DCodeView);
  vue.component("d-md-slot", DMdSlot);
  vue.component("tip", DTip);
  vue.component("ExpandTransition", ExpandTransition);
};

export default { install };
