import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return { status: "stable", icon: "number-sign", related: ["FdCounter"] };
};
