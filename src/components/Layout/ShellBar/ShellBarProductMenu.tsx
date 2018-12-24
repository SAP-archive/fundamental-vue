import { Slot, Component, DefaultSlot, Base } from '@/core';
import { Button, ShellBarProductTitle, Popover, Menu, MenuList } from '@/components';

@Component('ShellBarProductMenu')
@DefaultSlot('Product Items (FdShellBarProductSwitcherItem)')
@Slot('control', 'Popover Control (optional). Defaults to a specially configured FdButton with grid icon.')
export class ShellBarProductMenu extends Base<{}> {
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
            <Menu>
              <MenuList>
                {menu}
              </MenuList>
            </Menu>
          </Popover>
      </div>
    );
  }
}
