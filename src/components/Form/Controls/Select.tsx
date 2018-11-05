import {
  Component,
  Prop,
  Inject,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { ItemIdentification } from './../Types/ItemIdentification';
import { API } from '@/api';
import TsxComponent from '@/vue-tsx';
interface Props {
  id?: string | null;
  state?: State;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}
const stateMapping = {
  default: 'Default State',
  valid: 'Valid State (green border)',
  invalid: 'Invalid State (red border)',
  warning: 'Warning State (orange border)',
};

type State = keyof (typeof stateMapping);
const States = Object.keys(stateMapping) as State[];

@Component({ name: componentName('Select') })
@API.Component('Select')
export class Select extends TsxComponent<Props> {
  @API.Prop('id of the select element', prop => prop.type(String))
  @Prop({ required: false, default: null, type: String })
  public id!: string | null;

  @API.Prop('select state', prop => prop.type(String).acceptValues(...States))
  @Prop({ required: false, default: 'default', type: String })
  public state!: State;

  @API.Prop('whether input is required', prop => prop.type(Boolean))
  @Prop({ required: false, default: false, type: Boolean })
  public required!: boolean;

  @API.Prop('whether select is disabled', prop => prop.type(Boolean))
  @Prop({ required: false, default: false, type: Boolean })
  public disabled!: boolean;

  @API.Prop('whether select is readonly', prop => prop.type(Boolean))
  @Prop({ required: false, default: false, type: Boolean })
  public readonly!: boolean;

  @Inject({ default: null }) public itemIdentificationProvider!: ItemIdentification | null;

  private get inputId(): string | null {
    const id = this.id;
    if (id != null) { return id; }
    const provider = this.itemIdentificationProvider;
    if (provider != null) {
      return provider.itemIdentifier;
    }
    return null;
  }

  public render() {
    const options = this.$slots.default;
    return <select id={this.inputId} readonly={this.readonly} disabled={this.disabled} class={this.classes}>{options}</select>;
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
