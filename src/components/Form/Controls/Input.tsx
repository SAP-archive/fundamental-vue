import {
  Component,
  Prop,
  Watch,
  Inject,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import { ItemIdentification } from './../Types/ItemIdentification';
import TsxComponent from '@/vue-tsx';

interface Props {
  id?: string | null;
  placeholder?: string;
  state?: InputState | null;
  required?: boolean;
  type?: InputType;
  disabled?: boolean;
  readonly?: boolean;
  value?: string | number | null;
  compact?: boolean;
}

const typeMappings = {
  text: 'Text Field',
  password: 'Password Field',
  radio: 'Radio Button',
  checkbox: 'Checkbox',
  search: 'Search Field',
};
type InputType = keyof (typeof typeMappings);
const InputTypes = Object.keys(typeMappings) as InputType[];

const stateMapping = {
  valid: 'Valid',
  invalid: 'Invalid',
  warning: 'Warning',
};
type InputState = keyof (typeof stateMapping);
const InputStates = Object.keys(stateMapping) as InputState[];

@Component({ name: componentName('Input') })
@Api.Component('Input')
@Api.Event('input', 'Sent when the value changes', ['value', 'any'])
export class Input extends TsxComponent<Props> {
  @Api.Prop('id', prop => prop.type(String))
  @Prop({ default: null, type: String })
  public id!: string | null;

  @Api.Prop('placeholder text', prop => prop.type(String))
  @Prop({ default: '', type: String })
  public placeholder!: string;

  @Api.Prop('current state', prop => prop.type(String).acceptValues(...InputStates))
  @Prop({ default: null, type: String })
  public state!: InputState | null;

  @Api.Prop('whether a value is required (adds a *)', prop => prop.type(Boolean))
  @Prop({ default: false, type: Boolean })
  public required!: boolean;

  @Api.Prop('button type', prop => prop.type(String).acceptValues(...InputTypes))
  @Prop({ default: 'text', type: String })
  public type!: InputType;

  @Api.Prop('whether the control is disabled', prop => prop.type(Boolean))
  @Prop({ default: false, type: Boolean })
  public disabled!: boolean;

  @Api.Prop('whether the control is readonly', prop => prop.type(Boolean))
  @Prop({ default: false, type: Boolean })
  public readonly!: boolean;

  @Api.Prop('current value', prop => prop.type(String, Number))
  @Prop({ default: null, type: [String, Number] })
  public value!: string | number | null;

  @Api.Prop('whether input is compact', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false })
  public compact!: boolean;

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
    return (
      <input
        id={this.inputId}
        value={this.currentValue}
        on-input={this.updateInput}
        readonly={this.readonly}
        disabled={this.disabled}
        type={this.type}
        class={this.classes}
        staticClass='fd-form__control'
        placeholder={this.placeholder.length > 0 ? this.placeholder : false}
      />
    );
  }

  @Watch('value')
  public handleNewValue(newValue) {
    this.currentValue = newValue;
  }

  private updateInput(event) {
    const { target } = event;
    let value: null | string = null;
    if(target != null) {
      value = target.value;
    }
    this.currentValue = value;
    this.$emit('input', this.currentValue);
    this.$emit('update:value', this.currentValue);
  }

  public currentValue: string | number | null = this.value === undefined || this.value === null ? '' : this.value;

  private get classes() {
    return {
      'fd-input--compact': this.compact,
      'is-warning': this.state === 'warning',
      'is-invalid': this.state === 'invalid',
      'is-valid': this.state === 'valid',
      'is-required': this.required,
    };
  }
}
