import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return {
    status: "experimental",
    icon: "search",
    related: ["FdSearchInput"]
  };
};
