import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return {
    status: "experimental",
    icon: "drop-down-list",
    related: ["FdCombobox", "FdMenuItem"]
  };
};
