import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

import { APIEvent } from '@/api';

@Component({ name: 'api-events' })
export class APIEvents extends Vue {
  @Prop({ type: Array, required: true }) public events!: APIEvent[];

  get tableData() {
    return this.events.map(({ name, description }) => {
      return { name, description };
    });
  }
  public render() {
    return (
      <vf-table data={this.tableData}>
        <vf-table-column prop={'name'} label={'Event'} />
        <vf-table-column prop={'description'} label={'Description'} />
      </vf-table>
    );
  }
}
