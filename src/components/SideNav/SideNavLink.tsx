import { Prop, Base, Component } from '@/core';
import { RawLocation } from 'vue-router';
import { Inject } from 'vue-property-decorator';
import { Config, Store } from './Model';
import { SideNavItem } from './SideNavItem';

interface Props {
  to: RawLocation;
  hasChildren?: boolean | null;
  selected?: boolean;
}

@Component('SideNavLink')
export class SideNavLink extends Base<Props> {
  @Inject(Store.KEY) public store!: Store;
  @Inject(SideNavItem.KEY) public parentItem!: SideNavItem;
  @Inject(Config.KEY) public config!: Config;

  @Prop('to', { type: [Object, String], default: '#' })
  public to!: RawLocation;

  private get mode() {
    return this.config.mode;
  }

  private get hasChildren() {
    return this.store.hasSubItems(this.parentItem.itemId);
  }

  private get selected() {
    return this.store.selected(this.parentItem.itemId);
  }

  private get classes() {
    return {
      'has-child': this.hasChildren,
      'is-selected': this.selected,
    };
  }

  public render() {
    const attributes = {
      attrs: {},
    };
    if(this.mode === 'router') {
      attributes.attrs['exact-active-class'] = 'is-selected';
    }

    return (
      <router-link
        {...attributes}
        nativeOnClick={this.onClick}
        tag='a'
        to={this.to}
        staticClass='fd-side-nav__link'
        class={this.classes}
        aria-selected={this.selected}
      >
        {this.$slots.default}
      </router-link>
    );
  }

  private onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.store.selectedId = this.parentItem.itemId;
    this.store.toggleExpanded(this.parentItem.itemId);
  }
}
