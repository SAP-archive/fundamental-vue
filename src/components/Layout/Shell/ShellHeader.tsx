import { Component, Prop, Base } from '@/core';

interface Props {
  fixed?: boolean;
}

@Component('ShellHeader')

export class ShellHeader extends Base<Props> {
  @Prop({type: Boolean, default: false })
  fixed!: boolean | null;

  private get classes() {
    return ['fd-shell__header'].concat(this.fixed ? ['fd-shell__header--fixed'] : []);
  }

  render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }
}
