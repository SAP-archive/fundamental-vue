import {
  Component,
  Prop,
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
  @Prop({ type: Boolean, required: false, default: true })
  public dismissible!: boolean;

  @Api.Prop('alert type', prop => prop.type(String).acceptValues(...AlertTypes))
  @Prop({ type: String, required: false, default: 'default' })
  public type!: AlertType;

  private visible: boolean = true;
  public $tsxProps!: Readonly<{}> & Readonly<Props>;

  public render() {
    const content = this.$slots.default;
    return (
      <transition name='fade'>
        <div v-show={this.visible} class={this.classes} role='alert' id={this.uid}>
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
    };
  }

  private dismiss() {
    this.visible = false;
    this.$emit('dismiss');
  }
}
