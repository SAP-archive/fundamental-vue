import { Component, Prop, Base } from '@/core';

@Component('ShellBarAction')

export class ShellBarAction extends Base<{}> {
  @Prop('whether the action is always shown', { type: Boolean, default: true })
  showAlways!: boolean;

  @Prop('whether the action is collapsible', { type: Boolean, default: false })
  collapsible!: boolean;

  render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }

  private get classes() {
    return {
      'fd-shellbar__action': true,
      'fd-shellbar__action--show-always': this.showAlways,
      'fd-shellbar__action--collapsible': this.collapsible,
    };
  }
}
