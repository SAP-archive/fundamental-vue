import { Component, Base } from '@/core';

@Component('ShellBarProductSwitcherItemTitle')

export class ShellBarProductSwitcherItemTitle extends Base<{}> {
  render() {
    return (
      <span class='fd-product-switcher__product-title'>
        {this.$slots.default}
      </span>
    );
  }
}
