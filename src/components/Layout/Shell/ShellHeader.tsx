import { Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  fixed?: boolean;
}

@Component('ShellHeader')
@DefaultSlot('Header Content')
export class ShellHeader extends Base<Props> {
  @Prop({type: Boolean, default: false })
  public fixed!: boolean | null;

  private get classes() {
    return ['fd-shell__header'].concat(this.fixed ? ['fd-shell__header--fixed'] : []);
  }

  public render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }
}
