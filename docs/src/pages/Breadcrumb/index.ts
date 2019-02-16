import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return {
    status: "inprogress",
    icon: "navigation-right-arrow",
    related: ["FdBreadcrumb", "FdBreadcrumbItem"]
  };
};
