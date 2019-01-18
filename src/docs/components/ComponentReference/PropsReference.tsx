import {
  Prop,
  Component,
} from 'vue-property-decorator';
import './PropsReference.css';
import { PropDocumentation, PropType } from '@/api/Model/PropDocumentation';
import { ValueToken } from './ValueToken';
import { TypeTokens } from './TypeTokens';
import { TsxComponent } from '@/vue-tsx';
import { Table, TableRow, TableCell, ScopedRowSlot } from '@/components';
import { RowTemplate } from '../RowTemplate';

interface Props {
  apiProps: PropDocumentation[];
}

type PropEntry = {
  id: string;
  name: string;
  description: string;
  acceptedValues: string; // formatted
  types: PropType[];
  defaultValue: any | undefined;
  required: boolean;
};

const defaultValueFromProp = ({ readableDefaultValue, defaultValue }: PropDocumentation) => readableDefaultValue != null ? readableDefaultValue : defaultValue;

@Component({ name: 'PropsReference', components: { RowTemplate } })
export class PropsReference extends TsxComponent<Props> {
  @Prop({ type: Array, required: true })
  public apiProps!: PropDocumentation[];

  get tableData(): PropEntry[] {
    return this.apiProps.map(prop => {
      const defaultValue = defaultValueFromProp(prop);
      const acceptedValues = prop.formattedAcceptedValues;
      const types = prop.types;
      return {
        defaultValue,
        types,
        id: prop.key,
        name: prop.key,
        description: prop.description,
        acceptedValues,
        required: prop.required,
      };
    });
  }

  public render() {
    const rowSlot: ScopedRowSlot<PropEntry> = ({item}) => {
      return (
        <row-template slot='row'>
          <TableRow>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>
              <ValueToken
                key={item.name}
                representedValue={item.defaultValue}
              />
            </TableCell>
            <TableCell>
              <TypeTokens
                key={item.name}
                propTypes={item.types}
              />
            </TableCell>
            <TableCell>{item.acceptedValues}</TableCell>
          </TableRow>
        </row-template>
        );
    };
    return (
      <Table
        headers={[
          {label: 'Property'},
          {label: 'Description'},
          {label: 'Default Value'},
          {label: 'Type'},
          {label: 'Accepted Value'},
        ]}
        {...
          {
            scopedSlots: {
              row: rowSlot,
            },
          }
        }
        style='margin-bottom: 0;'
        items={this.tableData}
      />
    );
  }
}
