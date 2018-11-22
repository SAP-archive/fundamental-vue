import {
  Component,
  Prop,
} from 'vue-property-decorator';
import './PropsReference.css';
import { ApiProp } from '@/api';
import { Table, TableColumn } from '@/components';
import { TypeTokens } from './TypeTokens';
import { ValueToken } from './ValueToken';
import TsxComponent from '@/vue-tsx';
import { PropType } from '@/api';

interface Props {
  apiProps: ApiProp[];
}

type TableRow = {
  name: string;
  description: string;
  acceptedValues: string; // formatted
  types: PropType[],
  defaultValue: any | undefined;
  required: boolean;
};

@Component({
  name: 'PropsReference',
  components: {
    TypeTokens,
    ValueToken,
  },
})
export class PropsReference extends TsxComponent<Props> {
  @Prop({ type: Array, required: true })
  public apiProps!: ApiProp[];

  get tableData(): TableRow[] {
    return this.apiProps.map(prop => {
      const types = prop.types;
      const acceptedValues = prop.formattedAcceptedValues;
      return {
        name: prop.key,
        description: prop.description,
        types,
        acceptedValues,
        required: prop.required,
        defaultValue: prop.defaultValue === undefined ? undefined : prop.defaultValue,
      };
    });
  }

  public render() {
    const typeColAttr = {
      scopedSlots: {
        default: scope => [<type-tokens key={scope.row.name} propTypes={scope.row.types} />],
      },
    };
    const nameColAttr = {
      scopedSlots: {
        default: scope => ([(
          <div key={scope.row.name}>
            {scope.row.name}
            {scope.row.required && <span class='api-props__required'>required</span>}
          </div>
        )]),
      },
    };
    const defaultValueColAttr = {
      scopedSlots: {
        default: scope => [<ValueToken key={scope.row.name} representedValue={scope.row.defaultValue} />],
      },
    };

    return (
      <Table style={'margin-bottom: 0;'} data={this.tableData}>
        <TableColumn {...nameColAttr} label={'Property'} />
        <TableColumn<TableRow> prop={'description'} label={'Description'} />
        <TableColumn {...defaultValueColAttr} label={'Default Value'} />
        <TableColumn {...typeColAttr} alignment={'center'} label={'Type'} />
        <TableColumn<TableRow> prop={'acceptedValues'} label={'Accepted Values'} />
      </Table>
    );
  }
}
