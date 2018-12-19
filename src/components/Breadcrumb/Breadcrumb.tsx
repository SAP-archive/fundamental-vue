import { DefaultSlot, Component, Base } from '@/core';

@Component('Breadcrumb')
@DefaultSlot('Breadcrumb Items')
export class Breadcrumb extends Base {
  public render() {
    return <ul class='fd-breadcrumb'>{this.$slots.default}</ul>;
  }
}
