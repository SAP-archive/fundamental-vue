import { Component, DefaultSlot, Prop, Base } from '@/core';

@Component('ShellBarAction')
@DefaultSlot('The actual action. The only supported element is FdShellBarUserMenu.')
export class ShellBarAction extends Base<{}> {
  @Prop('whether the action is always shown', { type: Boolean, default: true })
  public showAlways!: boolean;

  @Prop('whether the action is collapsible', { type: Boolean, default: false })
  public collapsible!: boolean;

  public render() {
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
