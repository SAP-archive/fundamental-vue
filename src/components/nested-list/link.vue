<script>
export default {
  name: 'FdNestedListLink',
  inject: {
    fdNestedListItem: {
      default: {
        uid: null,
        containsList: false
      }
    },
    fdNestedList: {
      default: null
    }
  },
  props: {
    to: {},
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    item() {
      return this.fdNestedListItem
    },
    itemId() {
      return this.item.uid
    },
    rootList() {
      const parentList = this.fdNestedList
      const parentParentList = parentList != null ? parentList.fdNestedList : null
      const rootList = parentParentList != null ? parentParentList : parentList
      return rootList
    },
    itemIsExpanded() {
      const { item, rootList } = this
      return rootList.expandedIds.indexOf(item.uid) >= 0
    }
  },

  render(h) {
    const item = this.item
    const asAnchor = this.to == null
    const parentList = this.fdNestedList
    const parentParentList = parentList != null ? parentList.fdNestedList : null
    const rootList = parentParentList != null ? parentParentList : parentList
    const routerLinkProps = {
      activeClass: 'is-selected'
    }

    const routerLinkAttrs = {
      to: this.to
    }

    const anchorProps = {}
    const anchorAttrs = {
      href: this.$attrs.href || '#'
    }
    const expanded = item.uid != null && this.itemIsExpanded
    const attrs = {
      ...this.$attrs,
      ...(asAnchor ? anchorAttrs : routerLinkAttrs),
      'aria-expanded': String(expanded),
      'aria-haspopup': String(item.containsList)
    }

    const props = asAnchor ? anchorProps : routerLinkProps
    const routerLinkOn = {}

    const anchorOn =
      item.containsList === false
        ? {}
        : {
            click: event => {
              event.preventDefault()
              event.stopPropagation()
              const { expandedIds } = rootList
              if (expandedIds.indexOf(item.uid) >= 0) {
                rootList.expandedIds = rootList.expandedIds.filter(id => id !== item.uid)
              } else {
                rootList.expandedIds = [...rootList.expandedIds, item.uid]
              }
            }
          }

    const on = {
      ...this.$listeners,
      ...(asAnchor ? anchorOn : anchorOn)
    }

    const data = {
      attrs,
      props,
      on,
      class: [
        'fd-nested-list__link',
        this.selected || expanded ? 'is-selected' : '',
        {
          'is-expanded': false,
          'has-child': item != null && item.containsList
        }
      ]
    }

    const children = this.$slots.default
    const tag = asAnchor ? 'a' : 'router-link'
    return h(tag, data, children)
  }
}
</script>
