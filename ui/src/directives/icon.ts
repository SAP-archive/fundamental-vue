import { directiveName } from "@/util";
import Vue from "vue";

export const icon = Vue.directive(
  directiveName("icon"),
  ({ classList }, binding) => {
    const classForIcon = (name: string) => `sap-icon--${name}`;
    const removeIconIfPresent = (name: string | undefined) => {
      if (name == null) {
        return;
      }
      const iconClass = classForIcon(name);
      if (classList.contains(iconClass)) {
        classList.remove(iconClass);
      }
    };

    const { oldValue, value } = binding;
    if (typeof oldValue === "string") {
      removeIconIfPresent(oldValue);
    }

    if (typeof value === "string") {
      const newClass = classForIcon(value);
      if (!classList.contains(newClass)) {
        classList.add(newClass);
      }
    }
  }
);
