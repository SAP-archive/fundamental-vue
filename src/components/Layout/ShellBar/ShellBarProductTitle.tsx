import { Component, DefaultSlot, Base } from '@/core';

@Component('ShellBarProductTitle')
@DefaultSlot('Product Title')
export class ShellBarProductTitle extends Base<{}> {
  public render() {
    return (
      <span class='fd-shellbar__title'>
        {this.$slots.default}
      </span>
    );
  }
}
