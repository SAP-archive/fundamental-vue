import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { API } from '@/api';

const typeMapping = {
  error: 'error',
  warning: 'warning',
  help: 'help',
};
type MessageType = keyof (typeof typeMapping);
const MessageTypes = Object.keys(typeMapping) as MessageType[];

@Component({ name: componentName('form-message') })
@API.Component('Form Message')
export class FormMessage extends Vue {
  @Prop({ required: false, default: null, type: String })
  @API.Prop('type', prop => prop.type(String).acceptValues(...MessageTypes))
  public type!: MessageType | null;

  public render() {
    const message = this.$slots.default;
    return <span class={this.classes}>{message}</span>;
  }

  private get classes() {
    return {
      'fd-form__message': true,
      'fd-form__message--error': this.type === 'error',
      'fd-form__message--warning': this.type === 'warning',
      'fd-form__message--help': this.type === 'help',
    };
  }
}
