import {
  Component,
  Prop,
  Vue,
  Inject,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { ItemIdentification } from './../Types/ItemIdentification';

type State = 'default' | 'valid' | 'invalid' | 'warning';
type Type = 'text' | 'password';

@Component({ name: componentName('text-area') })
export class TextArea extends Vue {
  @Prop({ required: false, default: null, type: String }) public id!: string | null;
  @Prop({ required: false, default: '', type: String }) public placeholder!: string;
  @Prop({ required: false, default: 'default', type: String }) public state!: State;
  @Prop({ required: false, default: false, type: Boolean }) public required!: boolean;
  @Prop({ required: false, default: 'text', type: String }) public type!: Type;
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
    return <textarea type={this.type} class={this.classes} id={this.inputId} placeholder={this.placeholder} />;
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
