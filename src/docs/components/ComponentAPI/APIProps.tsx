import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

import { APIProp } from '@/api';
import { TypeTokens } from './TypeTokens';

@Component({
  name: 'api-props',
  components: { TypeTokens },
})
export class APIProps extends Vue {
  @Prop({ type: Array, required: true })
  public apiProps!: APIProp[];

  get tableData() {
    return this.apiProps.map(prop => {
      const types = prop.types;
      const acceptedValues = prop.formattedAcceptedValues;
      return { name: prop.key, description: prop.description, types, acceptedValues };
    });
  }
  public render() {
    const attr = {
      scopedSlots: {
        default: scope => {
          return <type-tokens propTypes={scope.row.types} />;
        },
      },
    };
    // const types = this.apiProps
    return (
      <vf-table style={'margin-bottom: 0;'} data={this.tableData}>
        <vf-table-column prop={'name'} label={'Property'} />
        <vf-table-column prop={'description'} label={'Description'} />
        <vf-table-column alignment={'center'}  {...attr} label={'Type'} />
        <vf-table-column prop={'acceptedValues'} label={'Accepted Values'} />
      </vf-table>
    );
  }
}
