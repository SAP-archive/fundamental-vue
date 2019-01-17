import { warn, Prop, Base, Component } from '@/core';
import { Inject } from 'vue-property-decorator';
import { Config, Store } from './Model';
import { SideNavItem } from './SideNavItem';

interface Props {
  to: string | object; // correct type: VueRouter.RawLocation;
  hasChildren?: boolean | null;
  selected?: boolean;
}

@Component('SideNavLink')
export class SideNavLink extends Base<Props> {
  @Inject(Store.KEY) public store!: Store;
  @Inject(SideNavItem.KEY) public parentItem!: SideNavItem;
  @Inject(Config.KEY) public config!: Config;

  @Prop('to', {
    type: [Object, String],
    default: '#',
  })
  public to!: string | object;

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
    const attrs: { [key: string]: any } = {};
    const attributes = {
      attrs,
    };
    if(this.mode === 'router') {
      attributes.attrs['exact-active-class'] = 'is-selected';
    }

    return (
      <a
        {...attributes}
        href='#'
        on-click={this.onClick}
        staticClass='fd-side-nav__link'
        class={this.classes}
        aria-selected={this.selected}
      >
        {this.$slots.default}
      </a>
    );
  }

  private onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.store.selectedId = this.parentItem.itemId;
    this.store.toggleExpanded(this.parentItem.itemId);

    const { to, $router } = this;
    if (to != null) {
      if($router != null) {
        $router.push(to);
      } else {
        warn(`Tried to navigate to ${to} but $router not found.`);
      }
    }
    this.$emit('click', this);
  }
}
