import {
  Component,
  Prop,
  Inject,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { ItemIdentification } from './../Types/ItemIdentification';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  id?: string | null;
  placeholder?: string;
  state?: State;
  required?: boolean;
  type?: Type;
}

const stateMapping = {
  default: 'Default State',
  valid: 'Valid State (green border)',
  invalid: 'Invalid State (red border)',
  warning: 'Warning State (orange border)',
};
type State = keyof (typeof stateMapping);
const States = Object.keys(stateMapping) as State[];

const typeMapping = {
  text: 'Text Area for Text',
  password: 'Text Area for a Password', // is that a thing?
};
type Type = keyof (typeof typeMapping);
const Types = Object.keys(typeMapping) as Type[];

@Component({ name: componentName('TextArea') })
@Api.Component('TextArea')
@Api.Event('input', 'Sent when the value changes', ['value', 'any'])
export class TextArea extends TsxComponent<Props> {
  @Api.Prop('id of the text area element', prop => prop.type(String))
  @Prop({ required: false, default: null, type: String })
  public id!: string | null;

  @Api.Prop('placeholder displayed when no value is set', prop => prop.type(String))
  @Prop({ required: false, default: '', type: String })
  public placeholder!: string;

  @Api.Prop('state of the text area', prop => prop.type(String).acceptValues(...States))
  @Prop({ required: false, default: 'default', type: String })
  public state!: State;

  @Api.Prop('whether input is required', prop => prop.type(Boolean))
  @Prop({ required: false, default: false, type: Boolean })
  public required!: boolean;

  @Api.Prop('native element type', prop => prop.type(String).acceptValues(...Types))
  @Prop({ required: false, default: 'text', type: String })
  public type!: Type;

  @Inject({ default: null })
  public itemIdentificationProvider!: ItemIdentification | null;

  get inputId(): string | null {
    const id = this.id;
    if (id != null) { return id; }
    const provider = this.itemIdentificationProvider;
    if (provider != null) {
      return provider.itemIdentifier;
    }
    return null;
  }

  public render() {
    return <textarea type={this.type} class={this.classes} id={this.inputId} placeholder={this.placeholder} />;
  }

  private get classes() {
    return {
      'fd-form__control': true,
      'is-warning': this.state === 'warning',
      'is-invalid': this.state === 'invalid',
      'is-valid': this.state === 'valid',
      'is-required': this.required,
    };
  }
}
