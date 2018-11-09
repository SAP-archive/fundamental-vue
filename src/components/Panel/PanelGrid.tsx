import { Component, Prop, Vue } from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';

@Component({ name: componentName('panel-grid') })
@API.Component('Panel Grid')
export class PanelGrid extends Vue {
  @Prop({ type: Number, default: null, required: false })
  @API.Prop('number of columns', prop => prop.type(Number).acceptValues(2, 3, 4, 5, 6))
  public col!: number | null;

  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('whether there is a gap between the individual panels', prop => prop.type(Boolean))
  public nogap!: boolean;

  public render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }

  private get classes() {
    const col = this.col;
    const colClass = col == null ? {} : { [`fd-panel-grid--${col}col`]: true};
    return {
      'fd-panel-grid': true,
      'fd-panel-grid--nogap': this.nogap,
      ...colClass,
    };
  }
}
