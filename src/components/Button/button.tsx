import { componentName } from '@/util';
import {
  Component,
  Prop,
  Vue,
  Inject,
} from 'vue-property-decorator';
import { API } from '@/api';
import { ButtonContainer } from './ButtonContainer';

// Styles
const stylingMapping = {
  emphasized: 'Emphasized',
  light: 'Light',
  regular: 'Regular (default)',
};
type ButtonStyling = keyof (typeof stylingMapping);
const ButtonStylings = Object.keys(stylingMapping) as ButtonStyling[];

// Button Types
const typeMapping = {
  standard: 'Standard',
  positive: 'Positive',
  medium: 'Medium (warning)',
  negative: 'Negative (destructive, error)',
};
export type ButtonType = keyof (typeof typeMapping);
export const ButtonTypes = Object.keys(typeMapping) as ButtonType[];

const stateMapping = {
  normal: 'Normal',
  selected: 'Selected',
  disabled: 'Disabled',
};
export type ButtonState = keyof (typeof stateMapping);
export const ButtonStates = Object.keys(stateMapping) as ButtonState[];

@Component({ name: componentName('button') })
@API.Component('Button', comp => {
  comp.addEvent('click', 'Sent when button is clicked');
})
export class Button extends Vue {
  @Prop({ type: String, default: 'regular', required: false })
  @API.Prop('button styling', prop => prop.type(String).acceptValues(...ButtonStylings))
  public styling!: ButtonStyling;

  @Prop({ type: String, default: 'primary', required: false })
  @API.Prop('button type', prop => prop.type(String).acceptValues(...ButtonTypes))
  public type!: ButtonType;

  @Prop({ type: String, default: null, required: false })
  @API.Prop('icon displayed in the button', prop => prop.type(String))
  public icon!: string | null;

  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('whether button is compact', prop => prop.type(Boolean))
  public compact!: boolean;

  @Prop({ type: String, default: 'normal', required: false })
  @API.Prop('button state', prop => prop.type(String).acceptValues(...ButtonStates))
  public state!: ButtonState;

  private get grouped(): boolean {
    return this.buttonContainer != null;
  }

  @Inject({ default: null }) private buttonContainer!: ButtonContainer | null;

  private click(event: Event) {
    this.$emit('click', event);
    const container = this.buttonContainer;
    if (container != null) {
      container.didClickButton(this);
    }
  }

  private get isPressed(): boolean {
    const container = this.buttonContainer;
    if (container != null) {
      return container.isButtonPressed(this);
    }
    return false;
  }

  public render() {
    const title = this.$slots.default;
    const pressed = this.isPressed ? { 'aria-pressed': 'true' } : {};
    const attributes = {
      attrs: pressed,
    };
    return (
      <button
        {...attributes}
        on-click={(event: Event) => this.click(event)}
        class={this.classes}
      >
        {title}
      </button>);
  }

  private get iconClasses() {
    const icon = this.icon;
    if (icon == null) { return {}; }
    return {
      [`sap-icon--${icon}`]: true,
    };
  }

  private get computedCompact(): boolean {
    const container = this.buttonContainer;
    if (container != null) {
      return container.compact;
    }
    return this.compact;
  }

  private get classes() {
    return {
      ...this.iconClasses,
      // Style
      'fd-button': this.styling === 'regular' && this.computedCompact === false,
      'fd-button--compact': this.computedCompact,

      'fd-button--emphasized': this.styling === 'emphasized',
      'fd-button--light': this.styling === 'light',

      // Button Groups
      'fd-button--grouped': this.grouped,

      // Type
      'fd-button--standard': this.type === 'standard',
      'fd-button--positive': this.type === 'positive',
      'fd-button--medium': this.type === 'medium',
      'fd-button--negative': this.type === 'negative',

      // State
      'is-selected': this.state === 'selected',
      'is-disabled': this.state === 'disabled',
    };
  }
}
