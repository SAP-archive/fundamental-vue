import {
  Component,
  Prop,
  Vue,
  Watch,
  Inject,
} from 'vue-property-decorator';

import { componentName } from '@/util';
import { API } from '@/api';
import { ItemIdentification } from './../Types/ItemIdentification';

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

@Component({ name: componentName('input') })
@API.Component('Input', comp => {
  comp.
    addEvent('input', 'Sent when the value changes', event => {
      event.raw('value', 'any');
    });
})
export class Input extends Vue {
  @Prop({ required: false, default: null, type: String })
  @API.Prop('id', prop => prop.type(String))
  public id!: string | null;

  @Prop({ required: false, default: '', type: String })
  @API.Prop('placeholder text', prop => prop.type(String))
  public placeholder!: string;

  @Prop({ required: false, default: null, type: String })
  @API.Prop('current state', prop => prop.type(String).acceptValues(...InputStates))
  public state!: InputState | null;

  @Prop({ required: false, default: false, type: Boolean })
  @API.Prop('whether a value is required (adds a *)', prop => prop.type(Boolean))
  public required!: boolean;

  @Prop({ required: false, default: 'text', type: String })
  @API.Prop('button type', prop => prop.type(String).acceptValues(...InputTypes))
  public type!: InputType;

  @Prop({ required: false, default: false, type: Boolean })
  @API.Prop('whether the control is disabled', prop => prop.type(Boolean))
  public disabled!: boolean;

  @Prop({ required: false, default: false, type: Boolean })
  @API.Prop('whether the control is readonly', prop => prop.type(Boolean))
  public readonly!: boolean;

  @Prop({ required: false, default: null, type: [String, Number] })
  @API.Prop('current value', prop => prop.type(String, Number))
  public value!: string | number | null;

  @Inject({ default: null }) public itemIdentificationProvider!: ItemIdentification | null;

  get inputId(): string | null {
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
        on-input={event => this.updateInput(event)}
        readonly={this.readonly}
        disabled={this.disabled}
        type={this.type}
        class={this.classes}
        placeholder={this.placeholder.length > 0 ? this.placeholder : false}
      />
    );
  }

  @Watch('value')
  public handleNewValue(newValue) {
    this.currentValue = newValue;
    this.$emit('update:value', this.currentValue);
    this.$emit('input', this.currentValue);
  }

  @Watch('currentValue')
  public handleNewCurrentValue(newValue) {
    this.currentValue = newValue;
    this.$emit('update:value', this.currentValue);
    this.$emit('input', this.currentValue);

  }
  private updateInput(event) {
    this.currentValue = event.target.value;
    this.$emit('input', event.target.value);
    this.$emit('update:value', this.currentValue);
  }

  public currentValue = this.value === undefined || this.value === null ? '' : this.value;

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
