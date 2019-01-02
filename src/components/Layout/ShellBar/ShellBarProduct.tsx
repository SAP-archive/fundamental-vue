import { Component, DefaultSlot, Base } from '@/core';

@Component('ShellBarProduct')
@DefaultSlot('Product Title')
export class ShellBarProduct extends Base<{}> {
  public render() {
    return (
      <div class='fd-shellbar__product'>
          {this.$slots.default}
      </div>
    );
  }
}
