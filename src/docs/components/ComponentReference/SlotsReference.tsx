import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { SlotDocumentation } from '@/api';
import { Table, TableHeader, TableHeaderCell, TableRow, TableCell, ScopedRowSlot } from '@/components';
import { TsxComponent } from '@/vue-tsx';

interface Props {
  apiSlots: SlotDocumentation[];
}

type SlotItem = {
  id: string;
  name: string;
  description: string;
};

@Component({ name: 'SlotsReference' })
export class SlotsReference extends TsxComponent<Props> {
  @Prop({ type: Array, required: true })
  public apiSlots!: SlotDocumentation[];

  get tableData(): SlotItem[] {
    return this.apiSlots.map(slot => {
      return {
        id: slot.name,
        name: slot.name,
        description: slot.description,
      };
    });
  }

  public render() {
    const rowSlot: ScopedRowSlot<SlotItem> = ({item}) => {
      return (
        <TableRow slot='row'>
          <TableCell>
            {item.name === '' ?
              <span style='color: rgb(200, 200, 200);'>default</span> :
              <span>{item.name}</span>
            }
          </TableCell>
          <TableCell>{item.description}</TableCell>
        </TableRow>
      );
    };

    return (
      <Table
        {
          ...{
            scopedSlots: {
              row: rowSlot,
            },
          }
        }
        style='margin-bottom: 0;'
        items={this.tableData}
      >
        <TableHeader>
          <TableHeaderCell label='Name' />
          <TableHeaderCell label='Description' />
        </TableHeader>
      </Table>
    );
  }
}
