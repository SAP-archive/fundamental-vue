import { Component, Prop, Base } from '@/core';

interface Props {
  flex?: boolean;
  fluid?: boolean;
}

@Component('Container')

export class Container extends Base<Props> {
  @Prop({ type: Boolean, default: false })
  flex!: boolean;

  @Prop({ type: Boolean, default: false })
  fluid!: boolean;

  render() {
    const body = this.$slots.default;
    return <div class={this.classes}>{body}</div>;
  }

  private get classes() {
    return {
      'fd-container': true,
      'fd-container--flex': this.flex,
      'fd-container--fluid': this.fluid,
    };
  }
}
