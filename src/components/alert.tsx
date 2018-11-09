import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { API } from '@/api';
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

@Component({ name: componentName('alert') })
@API.Component('Alert', comp => {
  comp.addEvent('dismiss', 'Sent when the dismiss button is clicked');
})
export class Alert extends mixins(Uid) {
  @Prop({ type: Boolean, required: false, default: true })
  @API.Prop('whether alert is dismissible', prop => prop.type(Boolean))
  public dismissible!: boolean;

  @Prop({ type: String, required: false, default: 'default' })
  @API.Prop('alert type', prop => prop.type(String).acceptValues(...AlertTypes))
  public type!: AlertType;

  private visible: boolean = true;

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
