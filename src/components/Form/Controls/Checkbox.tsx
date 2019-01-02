import { Base, Model, Component, Event, Prop } from '@/core';
import { UidProps } from '@/mixins';
import { FormItem, FORM_ITEM_KEY, FORM_ITEM_ID_KEY } from './../FormItem';
import { Inject } from 'vue-property-decorator';
import { isInputElement } from './Helper';

const stateMapping = {
  valid: 'Valid',
  invalid: 'Invalid',
  warning: 'Warning',
};
type InputState = keyof (typeof stateMapping);
const InputStates = Object.keys(stateMapping) as InputState[];

type ValueType = string | number | boolean;
const ValueCtors = [String, Number, Boolean];

interface Props extends UidProps {
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  value?: ValueType;
  falseValue?: ValueType;
  trueValue?: ValueType;
  compact?: boolean;
  state?: InputState | null;
}

@Component('Checkbox')
@Event('change', 'Sent when the checkbox has been checked/unchecked.')
export class Checkbox extends Base<Props> {
  @Inject({from: FORM_ITEM_KEY, default: null})
  public formItem!: FormItem | null;

  @Inject({from: FORM_ITEM_ID_KEY, default: null})
  public formItemId!: string | null;

  private get uid(): string | null {
    return this.formItemId;
  }

  public mounted() {
    const formItem = this.formItem;
    if(formItem) {
      formItem.setCheck(true);
    }
  }

  @Prop('Payload of the change-event when the user checks the checkbox', {
    default: true,
    type: ValueCtors,
  })
  public trueValue!: ValueType;

  @Prop('Payload of the change-event when the user unchecks the checkbox', {
    default: false,
    type: ValueCtors,
  })
  public falseValue!: ValueType;

  @Prop('value used when checked is true', {
    default: true,
    type: ValueCtors,
  })
  public value!: ValueType;

  @Prop('whether input is compact', { type: Boolean, default: false })
  public compact!: boolean;

  @Prop('whether the control is disabled', { default: false, type: Boolean })
  public disabled!: boolean;

  @Prop('whether the control is readonly', { default: false, type: Boolean })
  public readonly!: boolean;

  @Prop('current state', {
    acceptableValues: InputStates,
    default: null,
    type: String,
    validator: InputStates.includes,
  })
  public state!: InputState | null;

  @Prop('whether a value is required (adds a *)', {
    default: false,
    type: Boolean,
  })
  public required!: boolean;

  @Model('modelValue', {
    default: false,
    event: 'change',
    type: [Array, String, Boolean, Number],
  })
  public modelValue!: ValueType | ValueType[];

  private get shouldBeChecked(): boolean {
    const modelValue = this.modelValue;
    const value = this.value;
    if(value == null) {
      throw Error('value cannot be null');
    }
    if (Array.isArray(modelValue)) {
      return modelValue.includes(value);
    }
    return this.modelValue === this.trueValue;
  }

  public updateInput(event: Event) {
    const { target } = event;
    if(target == null) {
      return;
    }
    if(!isInputElement(target)) {
      return;
    }
    const { checked } = target;
    const { modelValue, value } = this;
    if(value == null) {
      throw Error('value cannot be null');
    }
    if(Array.isArray(modelValue)) {
      const set = new Set(modelValue);
      checked ? set.add(value) : set.delete(value);
      const newValue = Array.from(set);
      this.$emit('change', newValue);
    } else {
      const newValue = checked ? this.trueValue : this.falseValue;
      this.$emit('change', newValue);
    }
  }

  public render() {
    return (
      <input
        id={this.uid}
        class={this.classes}
        checked={this.shouldBeChecked}
        value={this.value}
        on-change={this.updateInput}
        type='checkbox'
        staticClass='fd-form__control'
      />
    );
  }

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
