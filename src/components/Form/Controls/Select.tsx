import {
  Component,
  Prop,
  Inject,
  Model,
  Watch,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { ItemIdentification } from './../Types/ItemIdentification';
import { Api } from '@/api';
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

type Value = string | number | object | null;

@Component({ name: componentName('Select') })
@Api.Component('Select')
@Api.defaultSlot('List of native option elements.')
export class Select extends TsxComponent<Props> {
  @Api.Prop('id of the select element', prop => prop.type(String))
  @Prop({ required: false, default: null, type: String })
  public id!: string | null;

  @Api.Prop('select state', prop => prop.type(String).acceptValues(...States))
  @Prop({ required: false, default: 'default', type: String })
  public state!: State;

  @Api.Prop('whether input is required', prop => prop.type(Boolean))
  @Prop({ required: false, default: false, type: Boolean })
  public required!: boolean;

  @Api.Prop('whether select is disabled', prop => prop.type(Boolean))
  @Prop({ required: false, default: false, type: Boolean })
  public disabled!: boolean;

  @Api.Prop('whether select is readonly', prop => prop.type(Boolean))
  @Prop({ required: false, default: false, type: Boolean })
  public readonly!: boolean;

  @Model('change', { type: [String, Number, Object] })
  public value!: Value;
  private currentValue = this.value;

  @Watch('value', { immediate: true })
  public handleNewValue(newValue: Value) {
    this.currentValue = newValue;
  }

  private updateInput(event) {
    this.currentValue = event.target.value;
    this.$emit('change', event.target.value);
  }

  @Inject({ default: null })
  public itemIdentificationProvider!: ItemIdentification | null;

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
    return (
      <select
        id={this.inputId}
        class={this.classes}
        value={this.currentValue}
        readonly={this.readonly}
        disabled={this.disabled}
        on-input={event => this.updateInput(event)}
      >
        {options}
      </select>
    );
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
