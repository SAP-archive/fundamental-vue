import { Component, DefaultSlot, Base } from '@/core';

@Component('Shell')
@DefaultSlot('Main Content')
export class Shell extends Base<{}> {
  public render() {
    return <div class='fd-shell fd-shell--fixed fd-shell--fundamentals'>{this.$slots.default}</div>;
  }
}
