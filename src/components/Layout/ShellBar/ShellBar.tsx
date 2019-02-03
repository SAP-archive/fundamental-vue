import { Component, Base } from '@/core';

@Component('ShellBar')

export class ShellBar extends Base<{}> {
  render() {
    return <div class='fd-shellbar'>{this.$slots.default}</div>;
  }
}
