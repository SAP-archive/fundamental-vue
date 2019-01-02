import { Component, DefaultSlot, Base } from '@/core';

@Component('ShellBar')
@DefaultSlot('Main Shell Bar Content')
export class ShellBar extends Base<{}> {
  public render() {
    return <div class='fd-shellbar'>{this.$slots.default}</div>;
  }
}
