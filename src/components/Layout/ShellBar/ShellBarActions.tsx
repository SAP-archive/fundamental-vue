import { Component, DefaultSlot, Base } from '@/core';

@Component('ShellBarActions')
@DefaultSlot('Shell Bar Action Instances')
export class ShellBarActions extends Base<{}> {
  public render() {
    return <div class='fd-shellbar__actions'>{this.$slots.default}</div>;
  }
}
