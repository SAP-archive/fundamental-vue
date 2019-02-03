import { Component, Base } from '@/core';

@Component('AppMain')

export class AppMain extends Base<{}> {
  render() {
    return <main class='fd-app__main'>{this.$slots.default}</main>;
  }
}
