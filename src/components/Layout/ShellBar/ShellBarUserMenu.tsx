import { Slot, Component, DefaultSlot, Base } from '@/core';
import { Identifier, Popover, MenuList, Menu } from '@/components';

@Component('ShellBarUserMenu')
@DefaultSlot('Menu Items (FdMenuItem)')
@Slot('control', 'Popover Control (optional). Defaults to a specially configured FdIdentifier.')
export class ShellBarUserMenu extends Base<{}> {
    public render() {
        const control = this.$slots.control;
        return (
            <div class='fd-user-menu'>
                <Popover placement='right'>
                    <div class='fd-user-menu__control' slot='control' title='Experimental'>
                        {control}
                        {!control && (
                            <Identifier size='s' backgroundColor='accent-6' circle={true} icon='person-placeholder' />
                        )}
                    </div>
                    <Menu>
                        <MenuList>
                            {this.$slots.default}
                        </MenuList>
                    </Menu>
                </Popover>
            </div>
        );
    }
}
