import {
  Component,
  Prop,
  Vue,
  Inject,
} from 'vue-property-decorator';

import { componentName } from '@/util';
import { API } from '@/api';
import { ItemIdentification } from './Types/ItemIdentification';

@Component({ name: componentName('form-label') })
@API.Component('Form Label')
export class FormLabel extends Vue {
  @Prop({ type: String, required: false, default: null })
  @API.Prop('id of the corresponding input', prop => prop.type(String))
  public for!: string | null;

  @Prop({ required: false, default: false, type: Boolean })
  @API.Prop('whether a value is required (adds a *)', prop => prop.type(Boolean))
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
    return (
      <label class={this.classes} for={this.labelId}>{textOrItem}</label>
    );
  }

  private get classes() {
    return {
      'fd-form__label': true,
      'is-required': this.required,
    };
  }
}
