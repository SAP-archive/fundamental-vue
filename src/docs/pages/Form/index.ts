import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return {
    status: "stable",
    icon: "form",
    related: [
      "FdFormSet",
      "FdFormGroup",
      "FdFormItem",
      "FdFormLabel",
      "FdFormMessage",
      "FdFieldSet",
      "FdInput",
      "FdInputGroup",
      "FdLegend",
      "FdTextArea",
      "FdSelect"
    ]
  };
};
