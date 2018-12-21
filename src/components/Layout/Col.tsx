import { Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  span?: number | null;
}

@Component('Col')
@DefaultSlot('Column content')
export class Col extends Base<Props> {
  @Prop({ type: Number, default: null })
  public span!: number | null;

  public render() {
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
