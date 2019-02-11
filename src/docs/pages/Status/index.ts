import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return { status: "stable", icon: "order-status", related: ["FdStatus"] };
};
