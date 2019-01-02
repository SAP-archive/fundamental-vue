import {
  Component,
  Prop,
} from 'vue-property-decorator';
import './ValueToken.css';
import { PropDocumentation } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  representedValue: ValueType;
}

const unspecifiedValue = PropDocumentation.unspecifiedValue();
type ValueType =
  | string
  | number
  | object
  | Function // tslint:disable-line:ban-types
  | null
  | boolean
  | ArrayLike<any>
  | typeof unspecifiedValue
  ;

@Component({ name: 'ValueToken' })
export class ValueToken extends TsxComponent<Props> {
  @Prop({ required: true, default: unspecifiedValue })
  public representedValue!: ValueType;

  public render() {
    const value = this.representedValue;
    if (value === undefined) {
      return null;
    }
    let classSuffix = '';
    let text = '';
    if (value == null) {
      classSuffix = 'null';
      text = 'null';
    } else {
      if (typeof value === 'number') { classSuffix = 'number'; text = String(value); }
      if (typeof value === 'object') { classSuffix = 'object'; text = value.toString(); }
      if (typeof value === 'string') { classSuffix = 'string'; text = `\u275D${value}\u275E`; }
      if (typeof value === 'boolean') { classSuffix = 'boolean'; text = String(value); }
      if (Array.isArray(value)) { classSuffix = 'array'; text = value.toString(); }
      if (typeof value === 'function') { classSuffix = 'function'; text = 'function(…) {…}'; }
      if (value === unspecifiedValue) {
        classSuffix = 'unspecified'; text = 'not specified';
      }
    }
    const classes = ['value-token', `value-token__${classSuffix}`];
    return <span class={classes}>{text}</span>;
  }
}
