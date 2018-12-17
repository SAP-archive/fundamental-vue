import {
  Component,
  Prop,
  Model,
  Watch,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import { Uid } from '@/mixins';
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

@Component({ name: componentName('Alert') })
@Api.Component('Alert')
@Api.Event('dismiss', 'Sent when the dismiss button is clicked')
@Api.defaultSlot('alert content')
export class Alert extends mixins(Uid) {
  @Api.Prop('whether alert is dismissible', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: true })
  public dismissible!: boolean;

  @Model('visible', { default: true, type: Boolean })
  @Api.Prop('whether alert is visible', prop => prop.type(Boolean))
  public visible!: boolean;

  @Watch('visible', { immediate: true})
  public didChangeVisible(visible: boolean) {
    this.currentVisible = visible;
    this.$emit('visible', this.currentVisible);
  }

  private currentVisible = this.visible;

  @Api.Prop('alert type', prop => prop.type(String).acceptValues(...AlertTypes))
  @Prop({ type: String, default: 'default' })
  public type!: AlertType;

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
