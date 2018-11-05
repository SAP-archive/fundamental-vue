import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { APIEvent } from '@/api';
import TsxComponent from '@/vue-tsx';
import { Table, TableColumn } from '@/components';

interface Props {
  events: APIEvent[];
}

type TableRow = {
  name: string;
  description: string;
};

@Component({ name: 'ApiEvents' })
export class ApiEvents extends TsxComponent<Props> {
  @Prop({ type: Array, required: true }) public events!: APIEvent[];

  get tableData() {
    return this.events.map(({ name, description }) => {
      return { name, description };
    });
  }
  public render() {
    return (
      <Table<TableRow> data={this.tableData}>
        <TableColumn<TableRow> prop={'name'} label={'Event'} />
        <TableColumn<TableRow> prop={'description'} label={'Description'} />
      </Table>
    );
  }
}
