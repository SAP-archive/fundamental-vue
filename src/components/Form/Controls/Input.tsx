import {
  Watch,
  Inject,
} from 'vue-property-decorator';
import { ItemIdentification } from './../Types/ItemIdentification';
import { Component, Event, Prop, Base } from '@/core';

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

@Component('Input')
@Event('input', 'Sent when the value changes', ['value', 'any'])
export class Input extends Base<Props> {
  @Prop({ default: null, type: String })
  public id!: string | null;

  @Prop('placeholder text', { default: '', type: String })
  public placeholder!: string;

  @Prop('current state', { acceptableValues: InputStates, default: null, type: String })
  public state!: InputState | null;

  @Prop('whether a value is required (adds a *)', { default: false, type: Boolean })
  public required!: boolean;

  @Prop('button type', { acceptableValues: InputTypes,  default: 'text', type: String })
  public type!: InputType;

  @Prop('whether the control is disabled', { default: false, type: Boolean })
  public disabled!: boolean;

  @Prop('whether the control is readonly', { default: false, type: Boolean })
  public readonly!: boolean;

  @Prop('current value', { default: null, type: [Boolean, String, Number] })
  public value!: boolean | string | number | null;

  @Prop('whether input is compact', { type: Boolean, default: false })
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

  @Watch('value', { immediate: true })
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

  public currentValue: boolean | string | number | null = this.value === undefined || this.value === null ? '' : this.value;

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
