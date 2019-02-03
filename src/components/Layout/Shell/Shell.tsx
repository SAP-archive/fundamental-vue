import { Component, Base } from '@/core';

@Component('Shell')

export class Shell extends Base<{}> {
  render() {
    return <div class='fd-shell fd-shell--fixed fd-shell--fundamentals'>{this.$slots.default}</div>;
  }
}
