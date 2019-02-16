import baseline from "./_baseline.json";
import VueCtor from "vue";
import { Vue } from "vue/types/vue";
import { Component, AsyncComponent } from "vue/types/options";

import { FrameworkDocumentation } from "./FrameworkDocumentation";
export { FrameworkDocumentation } from "./FrameworkDocumentation";
export { ComponentDocumentation } from "./ComponentDocumentation";
export { SlotDocumentation } from "./SlotDocumentation";
export { EventDocumentation } from "./EventDocumentation";
export { PropDocumentation } from "./PropDocumentation";

type AllComponentType = AsyncComponent | Component;

export const frameworkDocumentation: FrameworkDocumentation = baseline;
export const allComponentCtors = (root: Vue) => {
  const { components } = frameworkDocumentation;
  const result: AllComponentType[] = [];
  for (const name of Object.keys(components)) {
    const component = VueCtor.component(name);
    if (typeof component === "function") {
      result.push(component);
    }
  }
  return result;
};
