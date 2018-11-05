import { Component, Prop } from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

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

@Component({ name: componentName('PanelGrid') })
@API.Component('Panel Grid')
export class PanelGrid extends TsxComponent<Props> {
  @API.Prop('number of columns', prop => prop.type(Number).acceptValues(...Cols))
  @Prop({ type: Number, default: null, required: false })
  public col!: Col | null;

  @API.Prop('whether there is a gap between the individual panels', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false, required: false })
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
