import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return { status: "stable", icon: "heatmap-chart", related: ["FdTileGrid"] };
};
