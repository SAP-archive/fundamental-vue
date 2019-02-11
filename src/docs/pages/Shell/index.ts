import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return { status: "experimental", icon: "database", related: ["FdShell"] };
};
