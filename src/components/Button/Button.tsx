import { Inject } from 'vue-property-decorator';
import { Component, Event, DefaultSlot, Prop, Base } from '@/core';
import { ButtonContainer } from './ButtonContainer';

interface Props {
  styling?: ButtonStyling;
  type?: ButtonType;
  icon?: string | null;
  compact?: boolean;
  state?: ButtonState;
}

// Styles
const stylingMapping = {
  emphasized: 'Emphasized',
  light: 'Light',
  regular: 'Regular (default)',
};
export type ButtonStyling = keyof (typeof stylingMapping);
export const ButtonStylings = Object.keys(stylingMapping) as ButtonStyling[];

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

@Component('Button')
@Event('click', 'Sent when button is clicked')
@DefaultSlot('button content (usually just text)')
export class Button extends Base<Props> {
  @Prop('button styling', {
    type: String,
    default: 'regular',
    acceptableValues: ButtonStylings,
  })
  public styling!: ButtonStyling;

  @Prop('button type', {
    type: String,
    default: 'primary',
    acceptableValues: ButtonTypes,
  })
  public type!: ButtonType;

  @Prop('icon displayed in the button', { type: String, default: null })
  public icon!: string | null;

  @Prop('whether button is compact', { type: Boolean, default: false })
  public compact!: boolean;

  @Prop('button state', {
    acceptableValues: ButtonStates,
    default: 'normal',
    type: String,
  })
  public state!: ButtonState;

  public get isGrouped(): boolean {
    return this.buttonContainer != null;
  }

  @Inject({ default: null }) private buttonContainer!: ButtonContainer | null;

  private click(event: Event) {
    if(this.state === 'disabled') {
      event.stopImmediatePropagation();
      return;
    }
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
        on-click={this.click}
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
      'fd-button--grouped': this.isGrouped,

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
