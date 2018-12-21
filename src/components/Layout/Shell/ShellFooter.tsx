import { Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  fixed?: boolean;
}

@Component('ShellFooter')
@DefaultSlot('Footer Content')
export class ShellFooter extends Base<Props> {
  @Prop({ type: Boolean, default: false })
  public fixed!: boolean | null;

  private get classes() {
    return ['fd-shell__footer'].concat(this.fixed ? ['fd-shell__footer--fixed'] : []);
  }

  public render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }
}
