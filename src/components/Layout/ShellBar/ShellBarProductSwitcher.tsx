import { Slot, Component, DefaultSlot, Base } from '@/core';
import { Button, Popover } from '@/components';

@Component('ShellBarProductSwitcher')
@DefaultSlot('Product Items (FdShellBarProductSwitcherItem)')
@Slot('control', 'Popover Control (optional). Defaults to a specially configured FdButton with grid icon.')
export class ShellBarProductSwitcher extends Base<{}> {
  public render() {
    const control = this.$slots.control;
    return (
      <div class='fd-product-switcher'>
        <Popover placement='right'>
          <div class='fd-user-menu__control' slot='control'>
            {control}
            {!control && <Button styling='light' class='fd-button--shell' icon='grid'/>}
          </div>
          <div class='fd-product-switcher__body'>
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
