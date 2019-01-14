import { Item, Store } from './Model';
import { Prop, Slot, Base, Component } from '@/core';
import { Inject } from 'vue-property-decorator';
import { SideNavSubItem } from './SideNavSubItem';
import { SideNavItem } from './SideNavItem';
import { SideNavSubList } from './SideNavSubList';
import { SideNavLink } from './SideNavLink';
import { SideNavSubLink } from './SideNavSubLink';
import { SideNavIcon } from './..';
import { noop } from '@/util';

interface Props { items?: Item[]; }

@Component('SideNavList')
@Slot('link', 'Render a custom Link. slot-scope gives you access to the rendered item.')
export class SideNavList extends Base<Props> {
  @Inject(Store.KEY) public store!: Store;

  @Prop(Array, {
    default: () => [],
    readableDefault: 'Array<Item>',
  })
  public items!: Item[];

  public render() {
    const store = this.store;
    const afterLinkTextRenderer = (this.$scopedSlots.afterLinkText || noop);

    const renderSubItem = ({id, to = '#', name}: Item) => {
      return (
        <SideNavSubItem itemId={id} key={id}>
          <SideNavSubLink to={to}>{name}</SideNavSubLink>
        </SideNavSubItem>
      );
    };

    const renderSubItems = (items: Item[]) => items.map(renderSubItem);

    const renderLink = (item: Item) => {
      const customLinkRenderer = this.$scopedSlots.link;
      const {to = '#', icon, name, children = []} = item;
      if(customLinkRenderer) {
        return customLinkRenderer(item);
      }
      return (
        <SideNavLink to={to} hasChildren={children.length > 0}>
          {icon != null ? <SideNavIcon icon={icon} /> : null}
          {name}
          {afterLinkTextRenderer(item)}
        </SideNavLink>
      );
    };

    const renderItem = (item: Item) => {
      const { id, children = [] } = item;
      return (
        <SideNavItem itemId={id}>
          {renderLink(item)}
          {children.length > 0 &&
            <SideNavSubList hidden={!store.expanded(id)}>
              {renderSubItems(children)}
            </SideNavSubList>
          }
        </SideNavItem>
      );
    };

    return (
      <ul class='fd-side-nav__list'>
        {this.$slots.default}
        {this.items.map(renderItem)}
      </ul>
    );
  }
}
