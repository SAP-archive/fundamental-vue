import { Component, Prop, Base } from '@/core';

interface Props {
  fixed?: boolean;
}

@Component('ShellFooter')

export class ShellFooter extends Base<Props> {
  @Prop({ type: Boolean, default: false })
  fixed!: boolean | null;

  private get classes() {
    return ['fd-shell__footer'].concat(this.fixed ? ['fd-shell__footer--fixed'] : []);
  }

  render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }
}
