import { Component, DefaultSlot, Prop, Base } from '@/core';

const colMapping = {
  2: '2-Column Grid',
  3: '3-Column Grid',
  4: '4-Column Grid',
  5: '5-Column Grid',
  6: '6-Column Grid',
};
type Col = keyof typeof colMapping;
const Cols = Object.keys(colMapping).map(value => Number(value)) as Col[];

interface Props {
  col?: number | null;
  nogap?: boolean;
}

@Component('PanelGrid')
@DefaultSlot('Panels displayed by the grid.')
export class PanelGrid extends Base<Props> {
  @Prop('number of columns', {acceptableValues: Cols, type: Number, default: null })
  public col!: Col | null;

  @Prop('whether there is a gap between the individual panels', { type: Boolean, default: false })
  public nogap!: boolean;

  public render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }

  private get classes() {
    const col = this.col;
    const colClass = col == null ? {} : { [`fd-panel-grid--${col}col`]: true };
    return {
      'fd-panel-grid': true,
      'fd-panel-grid--nogap': this.nogap,
      ...colClass,
    };
  }
}
