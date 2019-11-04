import TableBody from './components/table-body.vue'
import TableCell from './components/table-cell.vue'
import TableHeader from './components/table-header.vue'
import TableHeaderCell from './components/table-header-cell.vue'
import TableRow from './components/table-row.vue'
import FdTableFixedWrapper from './table-fixed-wrapper.vue'
import FdTableFixed from './table-fixed.vue'
import FdTable from './table.vue'
import pluginify from './../../util/pluginify'

export default pluginify(
  FdTable,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  FdTableFixed,
  FdTableFixedWrapper
)
export { FdTable, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow }
