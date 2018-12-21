import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { SlotDocumentation } from '@/api';
import { Table, TableColumn } from '@/components';
import TsxComponent from '@/vue-tsx';

interface Props {
  apiSlots: SlotDocumentation[];
}

type TableRow = {
  name: string;
  description: string;
};

@Component({ name: 'SlotsReference' })
export class SlotsReference extends TsxComponent<Props> {
  @Prop({ type: Array, required: true })
  public apiSlots!: SlotDocumentation[];

  get tableData(): TableRow[] {
    return this.apiSlots.map(slot => {
      return {
        name: slot.name,
        description: slot.description,
      };
    });
  }

  public render() {
    const nameColAttr = {
      scopedSlots: {
        default: scope => {
          const name = scope.row.name;
          if(name === '') {
            return [(<span style='color: rgb(200, 200, 200);'>default</span>)];
          } else {
            return [(<span>{name}</span>)];
          }
        },
    }};
    return (
      <Table style={'margin-bottom: 0;'} data={this.tableData}>
        <TableColumn<TableRow> {...nameColAttr} label={'Name'} />
        <TableColumn<TableRow> prop={'description'} label={'Description'} />
      </Table>
    );
  }
}
