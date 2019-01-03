import { Watch, Inject } from 'vue-property-decorator';
import { Component, Event, Prop, Base } from '@/core';
import { FormItem, FORM_ITEM_KEY } from './../FormItem';
import { isTextAreaElement } from './Helper';

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

@Component('TextArea')
@Event('input', 'Sent when the value changes', ['value', 'any'])
export class TextArea extends Base<Props> {
  @Prop('placeholder displayed when no value is set', { default: '', type: String })
  public placeholder!: string;

  @Prop('state of the text area', { acceptableValues: States,  default: 'default', type: String })
  public state!: State;

  @Prop('whether input is required', { default: false, type: Boolean })
  public required!: boolean;

  @Prop('current value', { default: '', type: String })
  public value!: string | null;

  @Watch('value', { immediate: true })
  public handleNewValue(newValue) {
    this.currentValue = newValue;
  }

  @Prop('native element type', { acceptableValues: Types, default: 'text', type: String })
  public type!: Type;

  @Inject({ from: FORM_ITEM_KEY, default: null}) public formItem!: FormItem | null;

  private get uid(): string {
    const item = this.formItem;
    if(item == null) { return ''; }
    return item.uid;
  }

  private currentValue: string | null = '';

  public render() {
    return (
      <textarea
        on-input={this.handleInput}
        id={this.uid}
        type={this.type}
        class={this.classes}
        value={this.currentValue}
        placeholder={this.placeholder}
      />
    );
  }

  private handleInput({ target }: Event) {
    if(target == null) { return; }
    if(!isTextAreaElement(target)) { return; }
    const { value } = target;
    this.$emit('input', value);
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
