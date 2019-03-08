<script lang="ts">
import Vue, { CreateElement, VNode, PropOptions } from "vue";
import { Item, RawItem, Store, normalizeItems } from "./Model";
import SideNavSubItem from "./SideNavSubItem.vue";
import SideNavSubLink from "./SideNavSubLink.vue";
import SideNavLink from "./SideNavLink.vue";
import SideNavItem from "./SideNavItem.vue";
import SideNavIcon from "./SideNavIcon.vue";
import SideNavSubList from "./SideNavSubList.vue";

export default Vue.extend({
  name: "FdSideNavList",
  inject: ["sideNavStore"],
  props: {
    items: { type: Array, default: () => [] } as PropOptions<RawItem[]>
  },
  computed: {
    normalizedItems(): Item[] {
      return normalizeItems(this.items);
    },
    store(): Store {
      // @ts-ignore
      return this.sideNavStore;
    }
  },
  methods: {},
  render(h: CreateElement): VNode {
    const store = this.store;
    const afterLinkTextRenderer = this.$scopedSlots.afterLinkText || (() => []);
    const renderSubItem = ({ id, to = "#", name }: Item) => {
      return h(
        SideNavSubItem,
        {
          key: id,
          props: {
            itemId: id
          }
        },
        [
          h(
            SideNavSubLink,
            {
              props: { to }
            },
            name
          )
        ]
      );
    };

    const renderSubItems = (items: Item[]) => items.map(renderSubItem);

    const renderLink = (item: Item) => {
      const customLinkRenderer = this.$scopedSlots.link;
      const { to = "#", icon, name, children = [] } = item;
      if (customLinkRenderer) {
        return customLinkRenderer(item);
      }
      const iconChildren =
        icon == null ? [] : [h(SideNavIcon, { props: { icon } })];
      const hasChildren = children.length > 0;
      const afterLink = afterLinkTextRenderer(item);
      return h(
        SideNavLink,
        {
          props: { to, hasChildren }
        },
        [...iconChildren, name, afterLink]
      );
    };

    const renderItem = (item: Item) => {
      const { id, children = [] } = item;
      const hidden = store.expanded(id);
      const hasChildren = children.length > 0;

      return h(
        SideNavItem,
        {
          key: id,
          props: { uid: id }
        },
        [
          renderLink(item),
          hasChildren
            ? h(SideNavSubList, { props: { hidden } }, renderSubItems(children))
            : []
        ]
      );
    };

    return h("ul", { class: "fd-side-nav__list" }, [
      ...(this.$slots.default || []),
      ...this.normalizedItems.map(renderItem)
    ]);
  }
});
</script>
