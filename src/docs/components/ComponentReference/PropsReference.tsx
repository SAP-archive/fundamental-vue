import {
  Prop,
  Component,
} from 'vue-property-decorator';
import './PropsReference.css';
import { PropDocumentation } from '@/api';
import { Table, TableColumn } from '@/components';
import { ValueToken } from './ValueToken';
import { TypeTokens } from './TypeTokens';
import { Prop as PropType } from 'vue/types/options';
import { TsxComponent } from '@/vue-tsx';

interface Props {
  apiProps: PropDocumentation[];
}

type TableRow = {
  name: string;
  description: string;
  acceptedValues: string; // formatted
  types: PropType<any> | Array<PropType<any>>;
  defaultValue: any | undefined;
  required: boolean;
};

@Component({ name: 'PropsReference' })
export class PropsReference extends TsxComponent<Props> {
  @Prop({ type: Array, required: true })
  public apiProps!: PropDocumentation[];

  get tableData(): TableRow[] {
    return this.apiProps.map(prop => {
      const defaultValue = prop.readableDefaultValue || prop.defaultValue || undefined;
      const acceptedValues = prop.formattedAcceptedValues;
      const types = prop.vue.type || [];
      return {
        name: prop.key,
        description: prop.description,
        types,
        acceptedValues,
        required: prop.required,
        defaultValue,
      };
    });
  }

  public render() {
    const typeColAttr = {
      scopedSlots: {
        default: scope => [<TypeTokens key={scope.row.name} propTypes={scope.row.types} />],
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
      <Table style='margin-bottom: 0;' data={this.tableData}>
        <TableColumn {...nameColAttr} label='Property' />
        <TableColumn<TableRow> prop='description' label='Description' />
        <TableColumn {...defaultValueColAttr} label='Default Value' />
        <TableColumn {...typeColAttr} alignment='center' label='Type' />
        <TableColumn<TableRow> prop='acceptedValues' label='Accepted Values' />
      </Table>
    );
  }
}
