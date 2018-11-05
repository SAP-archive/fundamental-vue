import { Component, Prop } from 'vue-property-decorator';
import { MenuItem } from './MenuItem';
import { componentName } from '@/util';
import { MENU } from './types';
import { API } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  canHaveAddon?: boolean;
}

@Component({
  name: componentName('Menu'),
  provide() {
    return {
      [MENU]: this,
    };
  },
})
@API.Component('Menu', comp => {
  comp.
    addEvent('select', 'Sent when a menu item was selected', event => {
      event.string('value');
    });
})
export class Menu extends TsxComponent<Props> {
  @API.Prop('whether menu item can have an addon', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false })
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
    this.$emit('select', item.value);
  }
}
