import { Inject } from 'vue-property-decorator';
import { ItemIdentification } from './Types/ItemIdentification';
import { Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  for?: string | null;
  required?: boolean;
}

@Component('FormLabel')
@DefaultSlot('Contents of the label: For non-inline elements simply use text which will become the text displayed by the label. For inline elements use text alongside with any elements that form your input control.')
export class FormLabel extends Base<Props> {
  @Prop('id of the corresponding input', { type: String, default: null })
  public for!: string | null;

  @Prop('whether a value is required (adds a *)', { default: false, type: Boolean })
  public required!: boolean;

  @Inject({ default: null })
  public itemIdentificationProvider!: ItemIdentification | null;

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
