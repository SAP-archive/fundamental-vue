import pluginify from './../../util/pluginify'

import List from './list.vue'
import Item from './item.vue'
import Title from './title.vue'
import Secondary from './secondary.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Icon from './icon.vue'

export default pluginify(List, Item, Title, Secondary, Header, Footer, Icon)

export { default as List } from './list.vue'
export { default as ListTitle } from './title.vue'
export { default as ListItem } from './item.vue'
export { default as ListSecondary } from './secondary.vue'
export { default as ListHeader } from './header.vue'
export { default as ListFooter } from './footer.vue'
export { default as ListIcon } from './icon.vue'
