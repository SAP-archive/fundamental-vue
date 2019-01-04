import { Component, DefaultSlot, Base } from '@/core';

@Component('ShellBarSubtitle')
@DefaultSlot('Subtitle')
export class ShellBarSubtitle extends Base<{}> {
  public render() {
    return (
      <span class='fd-shellbar__subtitle'>
        {this.$slots.default}
      </span>
    );
  }
}
