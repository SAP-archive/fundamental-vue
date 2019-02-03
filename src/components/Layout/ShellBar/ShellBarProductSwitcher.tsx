import { Component, Base } from '@/core';
import { Button, Popover } from '@/components';

@Component('ShellBarProductSwitcher')

export class ShellBarProductSwitcher extends Base<{}> {
  render() {
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
