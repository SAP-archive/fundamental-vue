import TableBody from './Components/TableBody.vue';
import TableCell from './Components/TableCell.vue';
import TableHeader from './Components/TableHeader.vue';
import TableHeaderCell from './Components/TableHeaderCell.vue';
import TableRow from './Components/TableRow.vue';
import RowSelectionIndicator from './Components/RowSelectionIndicator.vue';

import Table from './Table.vue';
import { pluginify } from '@/util';
export default pluginify(Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, RowSelectionIndicator);
export { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, RowSelectionIndicator };
