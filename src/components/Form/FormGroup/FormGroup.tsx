import { Prop, Component, DefaultSlot, Base } from '@/core';
import { Provide } from 'vue-property-decorator';
import { FORM_ITEM_CONTAINER_KEY, FormItemContainer } from './../FormItem';

interface Props {
  inline?: boolean;
}

@Component('FormGroup')
@DefaultSlot('Content of the form group. Usually form items.')
export class FormGroup extends Base<Props> implements FormItemContainer {
  @Prop({ type: Boolean, default: false })
  public inline!: boolean;

  @Provide(FORM_ITEM_CONTAINER_KEY) public formGroup = this;

  public render() {
    return <div class='fd-form__group'>{this.$slots.default}</div>;
  }
}
