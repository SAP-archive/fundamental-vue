import { Watch } from 'vue-property-decorator';
import { Model, Component, Event, DefaultSlot, Prop } from '@/core';
import { UidMixin } from '@/mixins';
import { mixins } from 'vue-class-component';

// Alert Types
const typeMapping = {
  default: 'Default Alert',
  warning: 'Warning Alert',
  error: 'Error Alert',
  information: 'Information Alert',
  success: 'Success Alert',
};
export type AlertType = keyof (typeof typeMapping);
export const AlertTypes = Object.keys(typeMapping) as AlertType[];

interface Props {
  dismissible?: boolean;
  type?: AlertType;
  uid?: string; // Uid mixin
}

@Component('Alert')
@Event('dismiss', 'Sent when the dismiss button is clicked')
@DefaultSlot('alert content')
export class Alert extends mixins(UidMixin) {
  @Prop('whether alert is dismissible', { type: Boolean, default: true })
  public dismissible!: boolean;

  @Model('whether alert is visible', { event: 'visible', default: true, type: Boolean })
  public visible!: boolean;

  @Prop('alert type', { acceptableValues: AlertTypes, type: String, default: 'default' })
  public type!: AlertType;

  @Watch('visible', { immediate: true})
  public didChangeVisible(visible: boolean) {
    this.currentVisible = visible;
    this.$emit('visible', this.currentVisible);
  }

  private currentVisible = this.visible;
  public $tsxProps!: Readonly<Props>;

  public render() {
    const content = this.$slots.default;
    return (
      <transition name='fade'>
        <div id={this.uid} v-show={this.currentVisible} class={this.classes} role='alert'>
          {this.dismissible &&
            <button
              class='fd-alert__close'
              aria-controls={this.uid}
              aria-label='Close'
              on-click={this.dismiss}
            />
          }
          {content}
        </div>
      </transition>
    );
  }

  private get classes() {
    return {
      'fd-alert': true,
      'fd-alert--dismissible': this.dismissible,
      'fd-alert--warning': this.type === 'warning',
      'fd-alert--error': this.type === 'error',
      'fd-alert--information': this.type === 'information',
      'fd-alert--success': this.type === 'success',
    };
  }

  private dismiss() {
    this.currentVisible = false;
    this.$emit('dismiss');
  }
}
