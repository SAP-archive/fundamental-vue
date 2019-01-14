import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { EventDocumentation } from '@/api';
import { Table, TableHeader, TableHeaderCell, TableRow, TableCell, ScopedRowSlot } from '@/components';
import { TsxComponent } from '@/vue-tsx';

interface Props {
  events: EventDocumentation[];
}

type EventEntry = {
  id: string;
  name: string;
  description: string;
};

@Component({ name: 'EventsReference' })
export class EventsReference extends TsxComponent<Props> {
  @Prop({ type: Array, required: true })
  public events!: EventDocumentation[];

  get tableData(): EventEntry[] {
    return this.events.map(({ name, description }) => {
      return { id: name, name, description };
    });
  }
  public render() {
    const rowSlot: ScopedRowSlot<EventEntry> = ({item}) => {
      return (
        <TableRow slot='row'>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.description}</TableCell>
        </TableRow>
      );
    };
    return (
      <Table
        items={this.tableData}
        {...
          {
            scopedSlots: {
              row: rowSlot,
            },
          }
        }
      >
        <TableHeader>
          <TableHeaderCell label='Event' />
          <TableHeaderCell label='Description' />
        </TableHeader>
    </Table>
    );
  }
}
