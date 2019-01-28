import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { EventDocumentation } from '@/api';
import { Table, TableRow, TableCell, ScopedRowSlot } from '@/components';
import { TsxComponent } from '@/vue-tsx';
import { RowTemplate } from '../RowTemplate';

interface Props {
  events: EventDocumentation[];
}

type EventEntry = {
  id: string;
  name: string;
  description: string;
};

@Component({
  name: 'EventsReference',
  components: { RowTemplate },
})
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
        <row-template slot='row'>
          <TableRow>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.description}</TableCell>
          </TableRow>
        </row-template>
      );
    };
    return (
      <Table
        headers={[{label: 'Event'}, {label: 'Description'}]}
        items={this.tableData}
        {...
          {
            scopedSlots: {
              row: rowSlot,
            },
          }
        }
      />
    );
  }
}
