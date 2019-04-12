import baseline from "./_baseline.json";
import Vue from "vue";

export const frameworkDocumentation = baseline;
export const allComponentCtors = () => {
  const { components } = frameworkDocumentation;
  const result = [];
  for (const name of Object.keys(components)) {
    const component = Vue.component(name);
    if (typeof component === "function") {
      result.push(component);
    }
  }
  return result;
};
