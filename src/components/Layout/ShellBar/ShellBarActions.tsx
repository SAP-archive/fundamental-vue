import { Component, Base } from '@/core';

@Component('ShellBarActions')

export class ShellBarActions extends Base<{}> {
  render() {
    return <div class='fd-shellbar__actions'>{this.$slots.default}</div>;
  }
}
