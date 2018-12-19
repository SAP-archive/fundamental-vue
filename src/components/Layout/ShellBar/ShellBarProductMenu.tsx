import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import { Button, ShellBarProductTitle, Popover } from '@/components';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBarProductMenu') })
@Api.Component('Shell Bar Product Menu')
@Api.defaultSlot('Product Items (FdShellBarProductSwitcherItem)')
@Api.slot('control', 'Popover Control (optional). Defaults to a specially configured FdButton with grid icon.')
export class ShellBarProductMenu extends TsxComponent<{}> {
  public render() {
    const title = this.$slots.title;
    const menu = this.$slots.menu;
    return (
      <div class='fd-product-menu'>
          <Popover placement='right'>
              <div slot='control'>
                <Button styling='light' class='fd-product-menu__control'>
                  <ShellBarProductTitle class='fd-product-menu__title'>{title}</ShellBarProductTitle>
                </Button>
              </div>
              {menu}
          </Popover>
      </div>
    );
  }
}
