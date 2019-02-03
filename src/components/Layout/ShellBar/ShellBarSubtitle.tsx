import { Component, Base } from '@/core';

@Component('ShellBarSubtitle')

export class ShellBarSubtitle extends Base<{}> {
  render() {
    return (
      <span class='fd-shellbar__subtitle'>
        {this.$slots.default}
      </span>
    );
  }
}
