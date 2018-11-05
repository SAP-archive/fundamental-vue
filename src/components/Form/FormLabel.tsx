import {
  Component,
  Prop,
  Inject,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { API } from '@/api';
import { ItemIdentification } from './Types/ItemIdentification';
import TsxComponent from '@/vue-tsx';

interface Props {
  for?: string | null;
  required?: boolean;
}

@Component({ name: componentName('FormLabel') })
@API.Component('Form Label')
export class FormLabel extends TsxComponent<Props> {
  @API.Prop('id of the corresponding input', prop => prop.type(String))
  @Prop({ type: String, required: false, default: null })
  public for!: string | null;

  @API.Prop('whether a value is required (adds a *)', prop => prop.type(Boolean))
  @Prop({ required: false, default: false, type: Boolean })
  public required!: boolean;

  @Inject({ default: null }) public itemIdentificationProvider!: ItemIdentification | null;

  private get labelId(): string | null {
    const forId = this.for;
    if (forId != null) { return forId; }
    const provider = this.itemIdentificationProvider;
    if (provider != null) {
      return provider.itemIdentifier;
    }
    return null;
  }

  public render() {
    const textOrItem = this.$slots.default;
    return (<label class={this.classes} for={this.labelId}>{textOrItem}</label>);
  }

  private get classes() {
    return {
      'fd-form__label': true,
      'is-required': this.required,
    };
  }
}
