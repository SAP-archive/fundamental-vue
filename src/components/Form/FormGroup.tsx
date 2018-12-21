import { Component, DefaultSlot, Base } from '@/core';

@Component('FormGroup')
@DefaultSlot('Content of the form group. Usually form items.')
export class FormGroup extends Base<{}> {
  public render() {
    return <div class='fd-form__group'>{this.$slots.default}</div>;
  }
}
