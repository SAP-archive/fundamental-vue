import ComponentExample from "./ComponentExample.vue";
import CodeView from "./CodeView.vue";
import ExampleCollection from "./ExampleCollection.vue";
import FullscreenDemo from "./FullscreenDemo.vue";
import ApiReference from "./api-reference.vue";
import {
  ComponentReference,
  EventsReference,
  PropsReference,
  SlotsReference
} from "./ComponentReference";
import StaticContent from "./StaticContent.vue";
import ExpandTransition from "./ExpandTransition.vue";
import Tip from "./Tip.vue";
export { default as FullscreenDemo } from "./FullscreenDemo.vue";

export { ComponentReference } from "./ComponentReference";
export { default as ExampleCollection } from "./ExampleCollection.vue";
export { default as StaticContent } from "./StaticContent.vue";
export { default as ExpandTransition } from "./ExpandTransition.vue";
export { default as ApiReference } from "./api-reference.vue";
export { default as Tip } from "./Tip.vue";

export const registerComponents = vue => {
  vue.component("api-reference", ApiReference);
  vue.component("Tip", Tip);
  vue.component("ExpandTransition", ExpandTransition);
  vue.component("FullscreenDemo", FullscreenDemo);
  vue.component("StaticContent", StaticContent);
  vue.component("ExampleCollection", ExampleCollection);
  vue.component("ComponentExample", ComponentExample);
  vue.component("CodeView", CodeView);
  vue.component("ComponentReference", ComponentReference);
  vue.component("EventsReference", EventsReference);
  vue.component("PropsReference", PropsReference);
  vue.component("SlotsReference", SlotsReference);
};
