import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBarProductSwitcherItemTitle') })
@Api.Component('Shell Bar Product Switcher Item Title')
@Api.defaultSlot('Product Switcher Item Title')
export class ShellBarProductSwitcherItemTitle extends TsxComponent<{}> {
  public render() {
    return (
      <span class='fd-product-switcher__product-title'>
        {this.$slots.default}
      </span>
    );
  }
}
