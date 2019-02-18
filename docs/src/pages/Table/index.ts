import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return {
    status: "inprogress",
    components: ["FdTable", "FdTableRow", "FdTableCell"],
    icon: "table-view"
  };
};
