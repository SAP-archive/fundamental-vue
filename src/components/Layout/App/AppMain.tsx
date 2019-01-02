import { Component, DefaultSlot, Base } from '@/core';

@Component('AppMain')
@DefaultSlot('Main App Content')
export class AppMain extends Base<{}> {
  public render() {
    return <main class='fd-app__main'>{this.$slots.default}</main>;
  }
}
