import {
  Prop,
  Component,
} from 'vue-property-decorator';
import './PropsReference.css';
import { PropDocumentation, PropType } from '@/api/Model/PropDocumentation';
import { ValueToken } from './ValueToken';
import { TypeTokens } from './TypeTokens';
import { TsxComponent } from '@/vue-tsx';
import { Table, TableHeader, TableHeaderCell, TableRow, TableCell, ScopedRowSlot } from '@/components';

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

@Component({ name: 'PropsReference' })
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
        <TableRow slot='row'>
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
      );
    };
    return (
      <Table
        {...
          {
            scopedSlots: {
              row: rowSlot,
            },
          }
        }
        style='margin-bottom: 0;'
        items={this.tableData}
      >
        <TableHeader>
          <TableHeaderCell label='Property' />
          <TableHeaderCell label='Description' />
          <TableHeaderCell label='Default Value' />
          <TableHeaderCell label='Type' />
          <TableHeaderCell label='Accepted Values' />
        </TableHeader>
      </Table>
    );
  }
}
