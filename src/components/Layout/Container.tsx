import { Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  flex?: boolean;
  fluid?: boolean;
}

@Component('Container')
@DefaultSlot('Content displaye by the container.')
export class Container extends Base<Props> {
  @Prop({ type: Boolean, default: false })
  public flex!: boolean;

  @Prop({ type: Boolean, default: false })
  public fluid!: boolean;

  public render() {
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
