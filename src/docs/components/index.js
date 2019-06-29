import ComponentExample from "./ComponentExample.vue";
import CodeView from "./CodeView.vue";
import ExampleCollection from "./ExampleCollection.vue";
import FullscreenDemo from "./FullscreenDemo.vue";
import StaticContent from "./StaticContent.vue";
import ExpandTransition from "./ExpandTransition.vue";
import Tip from "./Tip.vue";
import DMarkdown from "./d-markdown.vue";
import ComponentApiLink from "./component-api-link.vue";
export { default as FullscreenDemo } from "./FullscreenDemo.vue";
export { default as ExampleCollection } from "./ExampleCollection.vue";
export { default as StaticContent } from "./StaticContent.vue";
export { default as ExpandTransition } from "./ExpandTransition.vue";
export { default as Tip } from "./Tip.vue";

export const registerComponents = vue => {
  vue.component("Tip", Tip);
  vue.component("component-api-link", ComponentApiLink);
  vue.component("d-markdown", DMarkdown);
  vue.component("ExpandTransition", ExpandTransition);
  vue.component("FullscreenDemo", FullscreenDemo);
  vue.component("StaticContent", StaticContent);
  vue.component("ExampleCollection", ExampleCollection);
  vue.component("ComponentExample", ComponentExample);
  vue.component("CodeView", CodeView);
};
