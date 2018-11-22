import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  type?: MessageType | null;
}

const typeMapping = {
  error: 'error',
  warning: 'warning',
  help: 'help',
};
type MessageType = keyof (typeof typeMapping);
const MessageTypes = Object.keys(typeMapping) as MessageType[];

@Component({ name: componentName('FormMessage') })
@Api.Component('Form Message')
@Api.defaultSlot('Message to be displayed (usually just text).')
export class FormMessage extends TsxComponent<Props> {
  @Api.Prop('type', prop => prop.type(String).acceptValues(...MessageTypes))
  @Prop({ required: false, default: null, type: String })
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
