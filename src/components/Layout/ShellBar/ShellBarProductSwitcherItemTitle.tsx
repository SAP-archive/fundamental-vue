import { Component, DefaultSlot, Base } from '@/core';

@Component('ShellBarProductSwitcherItemTitle')
@DefaultSlot('Product Switcher Item Title')
export class ShellBarProductSwitcherItemTitle extends Base<{}> {
  public render() {
    return (
      <span class='fd-product-switcher__product-title'>
        {this.$slots.default}
      </span>
    );
  }
}
