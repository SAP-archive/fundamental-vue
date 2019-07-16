import TableBody from "./Components/TableBody.vue";
import TableCell from "./Components/TableCell.vue";
import TableHeader from "./Components/TableHeader.vue";
import TableHeaderCell from "./Components/TableHeaderCell.vue";
import TableRow from "./Components/TableRow.vue";
import FdTableFixedWrapper from "./table-fixed-wrapper.vue";
import FdTableFixed from "./table-fixed.vue";
import FdTable from "./table.vue";
import { pluginify } from "./../../util";

export default pluginify(
  FdTable,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  FdTableFixed,
  FdTableFixedWrapper
);
export { FdTable, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow };
