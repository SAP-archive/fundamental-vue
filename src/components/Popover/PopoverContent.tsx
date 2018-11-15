import { Component } from 'vue-property-decorator';
import { Menu, MenuList, MenuItem } from '@/components';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { componentName } from '@/util';
import { Api } from '@/api';

interface Props {
  uid?: string; // Uid mixin
}

@Component({
  name: componentName('PopoverContent'),
  components: { Menu, MenuList, MenuItem },
})
@Api.Component('Popover Content', comp => {
  comp
    .addEvent('item-click', 'Sent when an item in the popover was clicked', event => {
      event.raw('item', 'MenuItem');
    });
})
export class PopoverContent extends mixins(Uid) {
  public $tsxProps!: Readonly<{}> & Readonly<Props>;

  public render() {
    const items = this.$slots.default;
    return (
      <div id={this.uid} class='fd-popover__body'>
        <Menu>
          <MenuList on-select={val => this.handleItemClick(val)}>
            {items}
          </MenuList>
        </Menu>
      </div>
    );
  }

  public handleItemClick(value: string | null) {
    this.$emit('select', value);
  }
}
