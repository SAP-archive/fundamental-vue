import {
  Component,
  Prop,
  Inject,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import { ItemIdentification } from './Types/ItemIdentification';
import TsxComponent from '@/vue-tsx';

interface Props {
  for?: string | null;
  required?: boolean;
}

@Component({ name: componentName('FormLabel') })
@Api.Component('Form Label')
@Api.defaultSlot('Contents of the label: For non-inline elements simply use text which will become the text displayed by the label. For inline elements use text alongside with any elements that form your input control.')
export class FormLabel extends TsxComponent<Props> {
  @Api.Prop('id of the corresponding input', prop => prop.type(String))
  @Prop({ type: String, required: false, default: null })
  public for!: string | null;

  @Api.Prop('whether a value is required (adds a *)', prop => prop.type(Boolean))
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
