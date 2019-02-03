import { Component, Base } from '@/core';

@Component('ShellBarProductTitle')

export class ShellBarProductTitle extends Base<{}> {
  render() {
    return (
      <span class='fd-shellbar__title'>
        {this.$slots.default}
      </span>
    );
  }
}
