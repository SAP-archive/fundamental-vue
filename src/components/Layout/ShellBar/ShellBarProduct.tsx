import { Component, Base } from '@/core';

@Component('ShellBarProduct')

export class ShellBarProduct extends Base<{}> {
  render() {
    return (
      <div class='fd-shellbar__product'>
          {this.$slots.default}
      </div>
    );
  }
}
