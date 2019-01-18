import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { SlotDocumentation } from '@/api';
import { Table, TableRow, TableCell, ScopedRowSlot } from '@/components';
import { TsxComponent } from '@/vue-tsx';
import { RowTemplate } from '../RowTemplate';

interface Props {
  apiSlots: SlotDocumentation[];
}

type SlotItem = {
  id: string;
  name: string;
  description: string;
};

@Component({ name: 'SlotsReference', components: { RowTemplate } })
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
        <row-template slot='row'>
          <TableRow>
            <TableCell>
              {item.name === '' ?
                <span style='color: rgb(200, 200, 200);'>default</span> :
                <span>{item.name}</span>
              }
            </TableCell>
            <TableCell>{item.description}</TableCell>
          </TableRow>
        </row-template>
      );
    };

    return (
      <Table headers={[{label: 'Name'}, {label: 'Description'}]}
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
      </Table>
    );
  }
}
