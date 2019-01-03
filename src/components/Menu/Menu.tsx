import { MenuItem } from './MenuItem';
import { MENU } from './types';
import { Component, Event, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  canHaveAddon?: boolean;
}

@Component('Menu', {
  provide() {
    return {
      [MENU]: this,
    };
  },
})
@Event('select', 'Sent when a menu item was selected', ['value', String])
@DefaultSlot('0 or more menu lists.')
export class Menu extends Base<Props> {
  @Prop('whether menu item can have an addon', { type: Boolean, default: false })
  public canHaveAddon!: boolean;

  public render() {
    const lists = this.$slots.default;
    return <nav class={this.classes}>{lists}</nav>;
  }

  private get classes() {
    return {
      'fd-menu': true,
      'fd-menu--addon-before': this.canHaveAddon,
    };
  }

  public menuItemDidClick(item: MenuItem) {
    this.$emit('select', item);
  }
}
