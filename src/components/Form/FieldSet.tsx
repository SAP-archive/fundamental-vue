import { Component, DefaultSlot, Base } from '@/core';

@Component('FieldSet')
@DefaultSlot('Content of the field set. Usually a legend with a form group.')
export class FieldSet extends Base<{}> {
  public render() {
    return <fieldset class='fd-form__set'>{this.$slots.default}</fieldset>;
  }
}
