import {
  Inject,
  Watch,
} from 'vue-property-decorator';
import { ItemIdentification } from './../Types/ItemIdentification';
import { Model, Component, DefaultSlot, Prop, Base } from '@/core';

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

@Component('Select')
@DefaultSlot('List of native option elements.')
export class Select extends Base<Props> {
  @Prop('id of the select element', { default: null, type: String })
  public id!: string | null;

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
