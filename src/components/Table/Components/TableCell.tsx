import {
  Prop,
  DefaultSlot,
  Component,
  Base,
} from '@/core';

@Component('TableCell')
@DefaultSlot('Cell Content')
export class TableCell extends Base {
  @Prop('whether the column is fixed', {
    type: Boolean,
    default: null,
  })
  public fixed!: boolean | null;

  private get classes() {
    return {
      'fd-table__fixed-col': this.fixed,
    };
  }

  public render() {
    const style = this.fixed ? { left: '0', width: '200px' } : {};
    return <td class={this.classes} style={style}>{this.$slots.default}</td>;
  }
}
