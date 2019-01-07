import { Base, Model, Component, Event, Prop } from '@/core';
import { UidProps } from '@/mixins';
import { FormItem, FORM_ITEM_ID_KEY, FORM_ITEM_KEY } from './../FormItem';
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

@Component('Radio')
@Event('change', 'Sent when the checkbox has been checked/unchecked.')
export class Radio extends Base<Props> {
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
    type: String,
  })
  public value!: ValueType;

  @Prop('whether the control is compact', {
    type: Boolean,
    default: false,
  })
  public compact!: boolean;

  @Prop('whether the control is disabled', {
    type: Boolean,
    default: false,
  })
  public disabled!: boolean;

  @Prop('whether the control is readonly', {
    type: Boolean,
    default: false,
  })
  public readonly!: boolean;

  @Prop('current state', {
    acceptableValues: InputStates,
    type: String,
    default: null,
    validator: InputStates.includes,
  })
  public state!: InputState | null;

  @Prop('whether a value is required (adds a *)', {
    default: false,
    type: Boolean,
  })
  public required!: boolean;

  @Model('modelValue', {
    default: '',
    event: 'change',
    type: [String, Boolean, Number],
  })
  public modelValue!: ValueType | ValueType[];

  private get shouldBeChecked(): boolean {
    const { modelValue, value } = this;
    return modelValue === value;
  }

  public updateInput({ target }: Event) {
    if(target == null) { return; }
    if(isInputElement(target)) {
      this.$emit('change', target.value);
    }
  }

  public render() {
    return (
      <input
        id={this.uid}
        type='radio'
        disabled={this.disabled ? '' : null}
        staticClass='fd-form__control'
        class={this.classes}
        checked={this.shouldBeChecked}
        value={this.value}
        on-change={this.updateInput}
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
