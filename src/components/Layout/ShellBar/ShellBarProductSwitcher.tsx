import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import { Button, Popover } from '@/components';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBarProductSwitcher') })
@Api.Component('Shell Bar Product Switcher')
@Api.defaultSlot('Product Items (FdShellBarProductSwitcherItem)')
@Api.slot('control', 'Popover Control (optional). Defaults to a specially configured FdButton with grid icon.')
export class ShellBarProductSwitcher extends TsxComponent<{}> {
  public render() {
    const control = this.$slots.control;
    return (
      <div class='fd-product-switcher'>
        <Popover placement='right'>
          <div class='fd-user-menu__control' slot='control'>
            {control}
            {!control && <Button styling='light' class='fd-button--shell' icon='grid'/>}
          </div>
          <div slot='body' class='fd-product-switcher__body'>
            <nav>
              <ul>
                {this.$slots.default}
              </ul>
            </nav>
          </div>
        </Popover>
      </div>
    );
  }
}
