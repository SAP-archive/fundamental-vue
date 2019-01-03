import {
  Inject,
  Watch,
} from 'vue-property-decorator';
import { Model, Component, DefaultSlot, Prop, Base } from '@/core';
import { FormItem, FORM_ITEM_KEY } from './../FormItem';

interface Props {
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

@Component('Select')
@DefaultSlot('List of native option elements.')
export class Select extends Base<Props> {
  @Prop('select state', { acceptableValues: States, default: 'default', type: String })
  public state!: State;

  @Prop('whether input is required', { default: false, type: Boolean })
  public required!: boolean;

  @Prop('whether select is disabled', { default: false, type: Boolean })
  public disabled!: boolean;

  @Prop('whether select is readonly', { default: false, type: Boolean })
  public readonly!: boolean;

  @Model('current value', { event: 'change', type: [String, Number, Object] })
  public value!: Value;
  private currentValue = this.value;
  @Inject({ from: FORM_ITEM_KEY, default: null}) public formItem!: FormItem | null;

  private get uid(): string {
    const item = this.formItem;
    if(item == null) { return ''; }
    return item.uid;
  }

  @Watch('value', { immediate: true })
  public handleNewValue(newValue: Value) {
    this.currentValue = newValue;
  }

  private updateInput(event) {
    this.currentValue = event.target.value;
    this.$emit('change', event.target.value);
  }

  public render() {
    const options = this.$slots.default;
    return (
      <select
        id={this.uid}
        class={this.classes}
        value={this.currentValue}
        readonly={this.readonly}
        disabled={this.disabled}
        on-input={this.updateInput}
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
