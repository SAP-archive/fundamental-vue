import { Component, Prop, Base } from '@/core';

interface Props {
  span?: number | null;
}

@Component('Col')

export class Col extends Base<Props> {
  @Prop({ type: Number, default: null })
  span!: number | null;

  render() {
    const content = this.$slots.default;
    return <div class={this.classes}>{content}</div>;
  }

  private get classes() {
    const colClass = 'fd-col';
    const span = this.span;
    if (span != null) {
      return [colClass, `fd-col--${span}`];
    }
    return [colClass];
  }
}
