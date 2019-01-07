import {
  Watch,
  Inject,
} from 'vue-property-decorator';
import { Component, Event, Prop, Base } from '@/core';
import { FORM_ITEM_ID_KEY } from './../FormItem';

interface Props {
  id?: string | null;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  state?: InputState | null;
  type?: InputType;
  readonly?: boolean;
  value?: string | number | null;
  compact?: boolean;
}
import { isInputElement } from './Helper';

const typeMappings = {
  text: 'Text Field',
  password: 'Password Field',
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

  @Inject({from: FORM_ITEM_ID_KEY, default: null})
  public formItemId!: string | null;

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

  @Prop('current value', { default: '', type: [String, Number] })
  public value!: string | null;

  @Prop('whether input is compact', { type: Boolean, default: false })
  public compact!: boolean;

  private get inputId(): string | null {
    return this.formItemId;
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
  public handleNewValue(newValue: string | null) {
    this.currentValue = newValue;
  }

  private updateInput({ target }: Event) {
    if(target == null) {
      return;
    }
    if(!isInputElement(target)) {
      return;
    }
    const { value } = target;
    this.$emit('input', value);
  }

  public currentValue: string | null = (this.value === undefined || this.value === null) ? '' : this.value;

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
