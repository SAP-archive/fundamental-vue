import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return {
    status: "stable",
    icon: "group-2",
    related: ["FdInputGroup", "FdInput"]
  };
};
