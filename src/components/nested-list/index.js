import NestedList from './nested-list.vue'
import NestedListItem from './item.vue'
import NestedListTitle from './title.vue'
import NestedListLink from './link.vue'
import NestedListGroupHeader from './group-header.vue'
import NestedListIcon from './icon.vue'

import pluginify from './../../util/pluginify'

export default pluginify(
  NestedList,
  NestedListItem,
  NestedListTitle,
  NestedListLink,
  NestedListGroupHeader,
  NestedListIcon
)

export {
  NestedList,
  NestedListItem,
  NestedListLink,
  NestedListTitle,
  NestedListGroupHeader,
  NestedListIcon
}
