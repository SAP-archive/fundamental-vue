import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { EventDocumentation } from '@/api';
import { Table, TableColumn } from '@/components';
import { TsxComponent } from '@/vue-tsx';

interface Props {
  events: EventDocumentation[];
}

type TableRow = {
  name: string;
  description: string;
};

@Component({ name: 'EventsReference' })
export class EventsReference extends TsxComponent<Props> {
  @Prop({ type: Array, required: true })
  public events!: EventDocumentation[];

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
