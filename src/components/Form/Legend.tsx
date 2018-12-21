import { Component, DefaultSlot, Base } from '@/core';

@Component('Legend')
@DefaultSlot('Legend text')
export class Legend extends Base<{}> {
  public render() {
    return <legend class='fd-form__legend'>{this.$slots.default}</legend>;
  }
}
