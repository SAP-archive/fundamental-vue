import {Inject} from 'vue-property-decorator';
import {Component, DefaultSlot, Prop, Base} from '@/core';
import {FORM_ITEM_ID_KEY} from './FormItem/Types';

interface Props {
  for?: string | null;
  required?: boolean;
}

@Component('FormLabel')
@DefaultSlot('Contents of the label: For non-inline elements simply use text which will become the text displayed by the label. For inline elements use text alongside with any elements that form your input control.')
export class FormLabel extends Base < Props > {
  @Inject(FORM_ITEM_ID_KEY)public itemId !: string;

  private get for(): string {return this.itemId;}
  
  @Prop('whether a value is required (adds a *)', {
    default: false,
    type: Boolean
  })
  public required !: boolean;

  public render() {
    return <label
      staticClass='fd-form__label'
      for={this.for}
      aria-required={this.required}>{this.$slots.default}{this.required
        ? '*'
        : ''}</label>;
  }
}
