import { Component, Base } from '@/core';
import { Button, ShellBarProductTitle, Popover } from '@/components';

@Component('ShellBarProductMenu')

export class ShellBarProductMenu extends Base<{}> {
  render() {
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
